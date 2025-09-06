import { Controller, useFormContext } from "react-hook-form";

type TSelectOption = {
  label: string;
  value: string | number;
};

type TSelectProps = {
  name: string;
  label?: string;
  options: TSelectOption[];
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const SelectInput = ({
  name,
  label,
  options,
  placeholder = "Select an option",
  required = false,
  className = "",
}: TSelectProps) => {
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
            <select
              id={name}
              {...field}
              className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary ${
                error ? "border-red-500" : "border-text-secondary"
              }`}
            >
              <option value="">{placeholder}</option>
              {options?.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt?.label}
                </option>
              ))}
            </select>
            {error && (
              <p className="mt-1 text-sm text-red-500">{error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default SelectInput;
