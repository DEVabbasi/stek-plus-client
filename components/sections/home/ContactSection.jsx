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
      className="relative w-full overflow-visible bg-white px-4 pb-20 pt-20 md:pt-24"
    >
      <div className="relative z-10 mx-auto max-w-[1080px]">
        <h2 className="text-center text-[2.7rem] font-extrabold leading-[0.96] tracking-[-0.04em] text-[#111] md:text-[4rem] lg:text-[4.45rem] lg:whitespace-nowrap">
          {title || "Neem contact met ons op"}
        </h2>

        <div className="mx-auto mt-2.5 max-w-[760px]">
          <p className="text-center text-[15px] font-bold leading-[1.15] text-[#111] md:text-[16px]">
            Capaciteit nodig? wij denken graag mee.
          </p>
          <p className="mx-auto mt-1 max-w-[760px] text-center text-[13px] leading-[1.35] text-[#111] md:text-[14px]">
            {subtitle ||
              "Heeft u tijdelijke onderbezetting of zoekt u structurele ondersteuning in tekenwerk? Neem vrijblijvend contact met ons op om de mogelijkheden te bespreken."}
          </p>
        </div>

        {status === "succeeded" ? (
          <div className="mt-8 rounded-lg border border-green-100 bg-green-50 p-6 text-center animate-in fade-in zoom-in duration-300">
            <p className="text-lg font-bold text-green-800">
              Bedankt! Uw aanvraag is verzonden.
            </p>
            <p className="mt-1 text-sm text-green-600">
              Wij nemen zo spoedig mogelijk contact met u op.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-6 max-w-[790px] space-y-3 md:mt-8"
          >
            <ContactFormBody
              register={register}
              errors={errors}
              setValue={setValue}
              watch={watch}
            />

            {error && (
              <p className="rounded bg-red-50 p-3 text-center text-sm text-red-500">
                {error}
              </p>
            )}

            <BrandButton
              type="submit"
              size="md"
              fullWidth
              disabled={status === "loading"}
              className="flex h-[52px] w-full items-center justify-center gap-2 rounded-none text-[13px] font-normal uppercase tracking-[-0.01em] md:text-[14px]"
            >
              {status === "loading" ? "VERZENDEN..." : "VERSTUREN"}
              <Image
                src="/icons/CustomArrowBlack.svg"
                alt=""
                width={14}
                height={14}
                className="h-[14px] w-[14px] brightness-0 invert"
              />
            </BrandButton>
          </form>
        )}
      </div>
    </section>
  );
}
