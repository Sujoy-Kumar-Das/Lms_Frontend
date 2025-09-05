import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const Input = ({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  className = "",
}: TInputProps) => {
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
              id={name}
              {...field}
              type={type}
              placeholder={placeholder}
              className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary ${
                error ? "border-red-500" : "border-text-secondary"
              }`}
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

export default Input;
