"use client";

import dynamic from "next/dynamic";
import { Controller, useFormContext } from "react-hook-form";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <p>Loading Text Editor...</p>,
});

type TInputTextEditorProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  readOnly?: boolean;
};

const InputTextEditor = ({
  name,
  label,
  placeholder,
  required = false,
  className = "",
  readOnly = false,
}: TInputTextEditorProps) => {
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
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <ReactQuill
              {...field}
              theme="snow"
              readOnly={readOnly}
              placeholder={placeholder}
              className={`rounded-lg border h-auto ${
                error ? "border-red-500" : "border-background"
              }`}
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }],
                  ["bold", "italic", "underline", "strike"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["link", "image"],
                  ["clean"],
                ],
              }}
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

export default InputTextEditor;
