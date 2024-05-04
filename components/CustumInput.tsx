import { authFormSchema } from "@/lib/utils";
import { Control } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

interface CostumInputProps {
  control: Control<z.infer<typeof authFormSchema>>;
  name: string;
  label: string;
  placeholder: string;
  type: string | undefined;
}

const CostumInput = ({
  control,
  name,
  label,
  placeholder,
  type,
}: CostumInputProps) => {
  return (
    <FormField
      control={control}
      name={name as "email" | "password"}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field}
              ></Input>
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CostumInput;
