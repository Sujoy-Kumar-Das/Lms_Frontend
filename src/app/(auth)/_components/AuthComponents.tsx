"use client";

import Form from "@/_components/form/Form";
import Input from "@/_components/form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import authValues from "./auth.deault-value";
import authValidation from "./auth.validationSchema";

type AuthFormProps = {
  type: "login" | "register";
  loading: boolean;
  onSubmit: (data: FieldValues) => Promise<void>;
};

export default function AuthComponent({
  type,
  onSubmit,
  loading,
}: AuthFormProps) {
  // default fields for login and register;
  const defaultFields = authValues.defaultFields[type];

  // default values for login and register;
  const defaultValues = authValues.defaultValues[type];

  const title =
    type === "register" ? "Create Your Account" : "Login to Your Account";

  const btnText = type === "register" ? "Register" : "Login";

  const footerInfo = authValues.footerValues[type];

  const validationSchema = authValidation[type];

  const loadingText = type === "login" ? "Logging...." : "Registering...";

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-background rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-text-primary mb-6 text-center capitalize">
          {title}
        </h1>

        <Form
          resolver={zodResolver(validationSchema)}
          defaultValues={defaultValues}
          onSubmit={onSubmit}
        >
          {defaultFields.map((item) => (
            <Input
              name={item.name}
              label={item.label}
              placeholder={item.placeholder}
              type={item.type}
              key={item.name}
            />
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 btn btn-primary mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                {loadingText}
              </>
            ) : (
              btnText
            )}
          </button>
        </Form>

        <p className="mt-6 text-center text-text-secondary text-sm">
          {footerInfo.title}

          <Link href={footerInfo.link} className="text-primary hover:underline">
            {footerInfo.linkText}
          </Link>
        </p>
      </div>
    </div>
  );
}
