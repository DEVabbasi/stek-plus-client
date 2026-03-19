import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

/**
 * Shared body for contact forms (Home and Project Detail).
 * Uses React Hook Form 'register' and 'errors'.
 * Keys are translated to English (e.g. customerName, message).
 */
export function ContactFormBody({ register, errors, setValue, watch }) {
  const currentDienst = watch("drawingType");
  const fieldClassName =
    "h-[80px] border border-[#cfcfcf] rounded-none bg-white px-7 text-[20px] font-normal text-[#111] placeholder:text-[#111] placeholder:opacity-100 shadow-none focus:border-[#1072B7] focus:ring-0";
  const textAreaClassName =
    "min-h-[138px] border border-[#cfcfcf] rounded-none resize-none bg-white px-7 py-6 text-[20px] font-normal text-[#111] placeholder:text-[#111] placeholder:opacity-100 shadow-none focus:border-[#1072B7] focus:ring-0";

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <Input 
            {...register("customerName")}
            placeholder="Klantnaam" 
            className={cn(
              fieldClassName,
              errors.customerName && "border-red-500 focus:ring-red-500"
            )}
          />
          {errors.customerName && <p className="text-red-500 text-xs">{errors.customerName.message}</p>}
        </div>
        <div className="space-y-1">
          <Input 
            {...register("companyName")}
            placeholder="Bedrijfsnaam" 
            className={cn(
              fieldClassName,
              errors.companyName && "border-red-500 focus:ring-red-500"
            )}
          />
          {errors.companyName && <p className="text-red-500 text-xs">{errors.companyName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <Input 
            {...register("email")}
            type="email" 
            placeholder="E-Mailadres" 
            className={cn(
              fieldClassName,
              errors.email && "border-red-500 focus:ring-red-500"
            )}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>
        <div className="space-y-1">
          <Input 
            {...register("phone")}
            type="tel" 
            placeholder="Telefoonnummer" 
            className={cn(
              fieldClassName,
              errors.phone && "border-red-500 focus:ring-red-500"
            )}
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-1">
        <Select 
          onValueChange={(val) => setValue("drawingType", val, { shouldValidate: true })} 
          value={currentDienst}
        >
          <SelectTrigger className={cn(
            "flex h-[80px] w-full items-center justify-between rounded-none border border-[#cfcfcf] bg-white px-7 text-[20px] font-normal text-[#111] data-[placeholder]:text-[#111] data-[placeholder]:opacity-100 [&>svg:last-child]:hidden",
            errors.drawingType && "border-red-500"
          )}>
            <SelectValue placeholder="Selecteer Dienst" />
            <ChevronDown className="h-8 w-8 text-[#b8b8b8]" strokeWidth={1.8} />
          </SelectTrigger>
          <SelectContent className="rounded-none border-[#cfcfcf]">
            <SelectItem value="trappen">Trappen</SelectItem>
            <SelectItem value="hekwerken">Hekwerken</SelectItem>
            <SelectItem value="staalconstructies">Staalconstructies</SelectItem>
            <SelectItem value="overige">Overige</SelectItem>
          </SelectContent>
        </Select>
        {errors.drawingType && <p className="text-red-500 text-xs">{errors.drawingType.message}</p>}
      </div>

      <div className="space-y-1">
        <Textarea
          {...register("message")}
          placeholder="Projectbeschrijving"
          className={cn(
            textAreaClassName,
            errors.message && "border-red-500 focus:ring-red-500"
          )}
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>
    </div>
  );
}
