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
    <section
      id="contact"
      className="relative w-full overflow-visible bg-white px-4 pb-20 pt-24"
    >
      <div className="relative z-10 mx-auto max-w-[1080px]">
        <h2 className="text-center text-[3rem] font-extrabold leading-[0.96] tracking-[0] text-[#111] md:text-[4.5rem] lg:text-[80px] lg:leading-[78px]">
          {title || "Neem contact met ons op"}
        </h2>
        <div className="mx-auto mt-4 max-w-[860px]">
          <p className="text-center text-[22px] font-bold leading-[1.15] text-[#111] md:text-[28px]">
            Capaciteit nodig? wij denken graag mee.
          </p>
          <p className="mx-auto mt-2 max-w-[860px] text-center text-[18px] leading-[1.35] text-[#111] md:text-[22px]">
            Heeft u tijdelijke onderbezetting of zoekt u structurele
            ondersteuning in tekenwerk? Neem vrijblijvend contact met ons op om
            de mogelijkheden te bespreken.
          </p>
        </div>

        {status === "succeeded" ? (
          <div className="mt-8 p-6 bg-green-50 border border-green-100 rounded-lg text-center animate-in fade-in zoom-in duration-300">
            <p className="text-green-800 font-bold text-lg">
              Bedankt! Uw aanvraag is verzonden.
            </p>
            <p className="text-green-600 text-sm mt-1">
              Wij nemen zo spoedig mogelijk contact met u op.
            </p>
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
              <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded">
                {error}
              </p>
            )}

            <BrandButton
              type="submit"
              size="md"
              fullWidth
              disabled={status === "loading"}
              className="flex h-[80px] w-full items-center justify-center gap-3 rounded-none text-[24px] font-medium uppercase tracking-[-0.01em]"
            >
              {status === "loading" ? "VERZENDEN..." : "VERSTUREN"}
              <Image
                src="/icons/CustomArrowBlack.svg"
                alt=""
                width={22}
                height={22}
                className="h-[22px] w-[22px] brightness-0 invert"
              />
            </BrandButton>
          </form>
        )}
      </div>
    </section>
  );
}
