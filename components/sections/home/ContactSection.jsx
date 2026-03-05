"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BrandButton } from "@/components/ui/BrandButton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContactSection({ preselectedDienst, title, subtitle }) {
  const [formData, setFormData] = useState({
    klantnaam: "",
    bedrijfsnaam: "",
    email: "",
    telefoonnummer: "",
    dienst: preselectedDienst || "",
    projectbeschrijving: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (formData.klantnaam.length < 2) newErrors.klantnaam = "Vul uw naam in";
    if (formData.bedrijfsnaam.length < 2) newErrors.bedrijfsnaam = "Vul uw bedrijfsnaam in";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Ongeldig e-mailadres";
    if (formData.telefoonnummer.length < 10 || !/^[0-9+\s\-()]+$/.test(formData.telefoonnummer)) {
      newErrors.telefoonnummer = "Ongeldig telefoonnummer";
    }
    if (!formData.dienst) newErrors.dienst = "Selecteer een dienst";
    if (formData.projectbeschrijving.length < 10) newErrors.projectbeschrijving = "Beschrijf uw project (minimaal 10 tekens)";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      // In a real app, send data to the server here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, dienst: value }));
  };

  return (
    <section className="relative overflow-visible w-full bg-white pt-24 pb-20 px-4">
      {/* Decorator - Bridging top-left to WaaromSection */}
      <div className="absolute -top-16 left-0 w-32 h-32 md:w-44 md:h-44 z-20 pointer-events-none">
        <Image 
          src="/icons/vectorDesign1.svg" 
          alt="" 
          width={176} 
          height={176} 
          className="object-contain" 
        />
      </div>

      {/* Decorator - Bottom right large */}
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 z-0 pointer-events-none">
        <Image 
          src="/icons/vectorDesign2.svg" 
          alt="" 
          width={256} 
          height={256} 
          className="object-contain" 
        />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-[#111] leading-tight">
          {title || "Neem contact met ons op"}
        </h2>
        <div className="mt-4">
          <p className="text-sm md:text-base font-bold text-center text-[#111] uppercase tracking-wider">
            Capaciteit nodig? Wij denken graag mee.
          </p>
          <p className="text-xs md:text-sm text-center text-gray-500 mt-2 max-w-lg mx-auto leading-relaxed">
            Heeft u tijdelijke onderbezetting of zoekt u structurele ondersteuning in tekenwerk? Neem vrijblijvend contact met ons op om de mogelijkheden te bespreken.
          </p>
        </div>

        {isSuccess ? (
          <div className="mt-8 text-center text-brand font-medium text-lg">
            Bedankt! Wij nemen spoedig contact met u.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input 
                  name="klantnaam"
                  value={formData.klantnaam}
                  onChange={handleChange}
                  placeholder="Klantnaam" 
                  className="h-12 border border-gray-300 rounded-none bg-white text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)]"
                />
                {errors.klantnaam && <p className="text-red-500 text-xs mt-1">{errors.klantnaam}</p>}
              </div>
              <div>
                <Input 
                  name="bedrijfsnaam"
                  value={formData.bedrijfsnaam}
                  onChange={handleChange}
                  placeholder="Bedrijfsnaam" 
                  className="h-12 border border-gray-300 rounded-none bg-white text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)]"
                />
                {errors.bedrijfsnaam && <p className="text-red-500 text-xs mt-1">{errors.bedrijfsnaam}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-Mailadres" 
                  className="h-12 border border-gray-300 rounded-none bg-white text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)]"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <Input 
                  name="telefoonnummer"
                  type="tel" 
                  value={formData.telefoonnummer}
                  onChange={handleChange}
                  placeholder="Telefoonnummer" 
                  className="h-12 border border-gray-300 rounded-none bg-white text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)]"
                />
                {errors.telefoonnummer && <p className="text-red-500 text-xs mt-1">{errors.telefoonnummer}</p>}
              </div>
            </div>

            <div>
              <Select onValueChange={handleSelectChange} value={formData.dienst}>
                <SelectTrigger className="w-full h-12 border border-gray-300 rounded-none bg-white text-gray-500 [&>svg:last-child]:hidden flex items-center justify-between px-3">
                  <SelectValue placeholder="Selecteer Dienst" />
                  <Image src="/icons/CustomArrowBlack.svg" alt="" width={16} height={16} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trappen">Trappen</SelectItem>
                  <SelectItem value="hekwerken">Hekwerken</SelectItem>
                  <SelectItem value="staalconstructies">Staalconstructies</SelectItem>
                  <SelectItem value="overige">Overige</SelectItem>
                </SelectContent>
              </Select>
              {errors.dienst && <p className="text-red-500 text-xs mt-1">{errors.dienst}</p>}
            </div>

            <div>
              <Textarea
                name="projectbeschrijving"
                value={formData.projectbeschrijving}
                onChange={handleChange}
                placeholder="Projectbeschrijving"
                className="min-h-[120px] border border-gray-300 rounded-none resize-none bg-white text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[var(--brand-blue)] focus:border-[var(--brand-blue)]"
              />
              {errors.projectbeschrijving && <p className="text-red-500 text-xs mt-1">{errors.projectbeschrijving}</p>}
            </div>

            <BrandButton
              type="submit"
              size="md"
              fullWidth
              className="w-full h-12 uppercase rounded-none flex items-center justify-center gap-2"
            >
               VERSTUREN
               <Image src="/icons/CustomArrowBlack.svg" alt="" width={16} height={16} className="brightness-0 invert" />
            </BrandButton>
          </form>
        )}
      </div>
    </section>
  );
}
