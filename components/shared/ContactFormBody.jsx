import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function ContactFormBody({ register, errors, setValue, watch }) {
  const currentDienst = watch("drawingType");
  const fieldClassName =
    "h-[52px] rounded-none border border-[#d3d3d3] bg-white px-[18px] text-[13px] font-normal leading-none text-[#111] placeholder:text-[#111] placeholder:opacity-100 shadow-none focus:border-[#1072B7] focus-visible:ring-0 md:px-5 md:text-[14px]";
  const textAreaClassName =
    "min-h-[92px] rounded-none border border-[#d3d3d3] bg-white px-[18px] py-[16px] text-[13px] font-normal text-[#111] placeholder:text-[#111] placeholder:opacity-100 shadow-none resize-none focus:border-[#1072B7] focus-visible:ring-0 md:px-5 md:py-[16px] md:text-[14px]";

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-3">
        <div className="space-y-1">
          <Input
            {...register("customerName")}
            placeholder="Klantnaam"
            className={cn(
              fieldClassName,
              errors.customerName && "border-red-500 focus:border-red-500"
            )}
          />
          {errors.customerName && (
            <p className="text-xs text-red-500">{errors.customerName.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Input
            {...register("companyName")}
            placeholder="Bedrijfsnaam"
            className={cn(
              fieldClassName,
              errors.companyName && "border-red-500 focus:border-red-500"
            )}
          />
          {errors.companyName && (
            <p className="text-xs text-red-500">{errors.companyName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-3">
        <div className="space-y-1">
          <Input
            {...register("email")}
            type="email"
            placeholder="E-mailadres"
            className={cn(
              fieldClassName,
              errors.email && "border-red-500 focus:border-red-500"
            )}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <Input
            {...register("phone")}
            type="tel"
            placeholder="Telefoonnummer"
            className={cn(
              fieldClassName,
              errors.phone && "border-red-500 focus:border-red-500"
            )}
          />
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <Select
          onValueChange={(val) =>
            setValue("drawingType", val, { shouldValidate: true })
          }
          value={currentDienst}
        >
          <SelectTrigger
            className={cn(
              "flex h-[52px] w-full items-center justify-between rounded-none border border-[#d3d3d3] bg-white px-[18px] py-0 text-[13px] font-normal leading-none text-[#111] data-[placeholder]:text-[#111] data-[placeholder]:opacity-100 focus-visible:ring-0 [&>svg:last-child]:hidden [&_[data-slot=select-value]]:leading-none md:px-5 md:text-[14px]",
              errors.drawingType && "border-red-500"
            )}
          >
            <SelectValue placeholder="Selecteer Dienst" />
            <ChevronDown className="h-[18px] w-[18px] text-[#b8b8b8]" strokeWidth={1.8} />
          </SelectTrigger>
          <SelectContent className="rounded-none border-[#d3d3d3] text-[14px] md:text-[15px]">
            <SelectItem value="trappen">Trappen</SelectItem>
            <SelectItem value="hekwerken">Hekwerken</SelectItem>
            <SelectItem value="staalconstructies">Staalconstructies</SelectItem>
            <SelectItem value="overige">Overige</SelectItem>
          </SelectContent>
        </Select>
        {errors.drawingType && (
          <p className="text-xs text-red-500">{errors.drawingType.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <Textarea
          {...register("message")}
          placeholder="Projectbeschrijving"
          className={cn(
            textAreaClassName,
            errors.message && "border-red-500 focus:border-red-500"
          )}
        />
        {errors.message && (
          <p className="text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>
    </div>
  );
}
