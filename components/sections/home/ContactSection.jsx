"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { contactSchema } from "@/lib/validations/contact.schema";
import { submitQuotation, resetContactForm } from "@/store/slices/contactSlice";
import { ContactFormBody } from "@/components/shared/ContactFormBody";
import { BrandButton } from "@/components/ui/BrandButton";

export function ContactSection({ preselectedDienst, title, subtitle }) {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.contact);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      customerName: "",
      companyName: "",
      email: "",
      phone: "",
      drawingType: preselectedDienst || "",
      message: "",
    },
  });

  // Reset form on success
  useEffect(() => {
    if (status === "succeeded") {
      reset();
      const timer = setTimeout(() => {
        dispatch(resetContactForm());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status, reset, dispatch]);

  const onSubmit = (data) => {
    dispatch(submitQuotation(data));
  };

  return (
    <section id="contact" className="relative overflow-visible w-full bg-white pt-24 pb-20 px-4">
      {/* Decorators */}
      <div className="absolute -top-16 left-0 w-32 h-32 md:w-44 md:h-44 z-20 pointer-events-none">
        <Image src="/icons/vectorDesign1.svg" alt="" width={176} height={176} className="object-contain" />
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 z-0 pointer-events-none">
        <Image src="/icons/vectorDesign2.svg" alt="" width={256} height={256} className="object-contain" />
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

        {status === "succeeded" ? (
          <div className="mt-8 p-6 bg-green-50 border border-green-100 rounded-lg text-center animate-in fade-in zoom-in duration-300">
            <p className="text-green-800 font-bold text-lg">Bedankt! Uw aanvraag is verzonden.</p>
            <p className="text-green-600 text-sm mt-1">Wij nemen zo spoedig mogelijk contact met u op.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <ContactFormBody 
              register={register} 
              errors={errors} 
              setValue={setValue} 
              watch={watch} 
            />

            {error && (
              <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded">{error}</p>
            )}

            <BrandButton
              type="submit"
              size="md"
              fullWidth
              disabled={status === "loading"}
              className="w-full h-12 uppercase rounded-none flex items-center justify-center gap-2"
            >
               {status === "loading" ? "VERZENDEN..." : "VERSTUREN"}
               <Image src="/icons/CustomArrowBlack.svg" alt="" width={16} height={16} className="brightness-0 invert" />
            </BrandButton>
          </form>
        )}
      </div>
    </section>
  );
}
