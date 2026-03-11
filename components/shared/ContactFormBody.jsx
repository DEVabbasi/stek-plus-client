import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Shared body for contact forms (Home and Project Detail).
 * Uses React Hook Form 'register' and 'errors'.
 * Keys are translated to English (e.g. customerName, message).
 */
export function ContactFormBody({ register, errors, setValue, watch }) {
  const currentDienst = watch("drawingType");

  return (
    <div className="space-y-4">
      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Input 
            {...register("customerName")}
            placeholder="Klantnaam" 
            className={cn(
              "h-12 border border-gray-300 rounded-none bg-white text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1072B7] focus:border-[#1072B7]",
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
              "h-12 border border-gray-300 rounded-none bg-white text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1072B7] focus:border-[#1072B7]",
              errors.companyName && "border-red-500 focus:ring-red-500"
            )}
          />
          {errors.companyName && <p className="text-red-500 text-xs">{errors.companyName.message}</p>}
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Input 
            {...register("email")}
            type="email" 
            placeholder="E-Mailadres" 
            className={cn(
              "h-12 border border-gray-300 rounded-none bg-white text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1072B7] focus:border-[#1072B7]",
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
              "h-12 border border-gray-300 rounded-none bg-white text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1072B7] focus:border-[#1072B7]",
              errors.phone && "border-red-500 focus:ring-red-500"
            )}
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Row 3: Service Selection (Custom Select) */}
      <div className="space-y-1">
        <Select 
          onValueChange={(val) => setValue("drawingType", val, { shouldValidate: true })} 
          value={currentDienst}
        >
          <SelectTrigger className={cn(
            "w-full h-12 border border-gray-300 rounded-none bg-white text-gray-500 [&>svg:last-child]:hidden flex items-center justify-between px-3",
            errors.drawingType && "border-red-500"
          )}>
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
        {errors.drawingType && <p className="text-red-500 text-xs">{errors.drawingType.message}</p>}
      </div>

      {/* Row 4: Project Description */}
      <div className="space-y-1">
        <Textarea
          {...register("message")}
          placeholder="Projectbeschrijving"
          className={cn(
            "min-h-[120px] border border-gray-300 rounded-none resize-none bg-white text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-[#1072B7] focus:border-[#1072B7]",
            errors.message && "border-red-500 focus:ring-red-500"
          )}
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>
    </div>
  );
}
