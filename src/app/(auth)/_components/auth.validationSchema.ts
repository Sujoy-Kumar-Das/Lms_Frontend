import z from "zod";

const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long." })
  .max(32, { message: "Password should not exceed 32 characters." })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter.",
  })
  .regex(/[a-z]/, {
    message: "Password must contain at least one lowercase letter.",
  })
  .regex(/[0-9]/, { message: "Password must contain at least one number." })
  .regex(/[^A-Za-z0-9]/, {
    message: "Password must contain at least one special character.",
  });

const authValidation = {
  login: z.object({
    email: z.email({ error: "Invalid email address" }),
    password: passwordSchema,
  }),
  register: z.object({
    name: z
      .string({ error: "Name is required." })
      .min(2, { error: "Name minimum 2 characters long" })
      .max(50, { error: "Name should not be maximum 50 characters" }),
    email: z.email({ error: "Invalid email address" }),
    password: passwordSchema,
  }),
};

export default authValidation;
