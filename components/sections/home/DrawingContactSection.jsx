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

/**
 * Specialized contact section for the drawing detail page.
 * Injects the drawingId into the submission payload.
 */
export function DrawingContactSection({ drawingId, preselectedDienst, title }) {
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
      drawingId: drawingId || "",
    },
  });

  // Sync drawingId if it changes
  useEffect(() => {
    if (drawingId) setValue("drawingId", drawingId);
  }, [drawingId, setValue]);

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
    <section id="drawing-contact" className="relative overflow-visible w-full bg-white pt-24 pb-20 px-4 scroll-mt-20">
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-[#111] leading-tight">
          {title || "Interesse in dit project?"}
        </h2>
        <p className="text-xs md:text-sm text-center text-gray-500 mt-4 max-w-lg mx-auto leading-relaxed">
          Laat uw gegevens achter voor een vrijblijvende offerte of meer informatie over dit type tekenwerk.
        </p>

        {status === "succeeded" ? (
          <div className="mt-8 p-6 bg-green-50 border border-green-100 rounded-lg text-center animate-in fade-in zoom-in duration-300">
            <p className="text-green-800 font-bold text-lg">Aanvraag ontvangen!</p>
            <p className="text-green-600 text-sm mt-1">We nemen contact met u op over project #{drawingId.slice(-6)}.</p>
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
               {status === "loading" ? "VERZENDEN..." : "OFFERTE AANVRAGEN"}
               <Image src="/icons/CustomArrowBlack.svg" alt="" width={16} height={16} className="brightness-0 invert" />
            </BrandButton>
          </form>
        )}
      </div>
    </section>
  );
}
