import { Controller, useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type TInputFileProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const InputFile = ({
  name,
  label,
  placeholder,
  required = false,
  className = "",
}: TInputFileProps) => {
  const { control } = useFormContext();

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-text-primary font-medium mb-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              type="file"
              id={name}
              placeholder={placeholder}
              className={twMerge(
                `mt-1 block w-full text-sm text-text-secondary border rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-text-contrast hover:file:bg-primary/90 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                  error
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-background focus:ring-primary focus:border-primary"
                }`,
                className
              )}
              onChange={(e) => {
                field.onChange(e.target.files?.[0] || null);
              }}
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
            />
            {error && (
              <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default InputFile;
