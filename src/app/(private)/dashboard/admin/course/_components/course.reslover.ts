import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/common/image.config";
import z from "zod";

export const courseValidationSchema = {
  create: z.object({
    title: z
      .string({
        error: "Course title is required.",
      })
      .min(3, "Course title must be at least 3 characters long."),

    thumbnail: z
      .instanceof(File)
      .refine((file) => file.size <= MAX_FILE_SIZE, {
        message: "Max file size is 500KB.",
      })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: "Only .jpg, .jpeg, .png, and .webp files are accepted.",
      }),

    description: z
      .string({
        error: "Course description is required.",
      })
      .min(500, "Course description must be at least 500 characters long."),

    shortDescription: z
      .string({
        error: "Course description is required.",
      })
      .min(10, "Course description must be at least 10 characters long.")
      .max(50, "Course description should not be at least 50 characters long."),

    price: z.coerce
      .number({
        error: "Course price is required.",
      })
      .min(0, "Course price must be greater than or equal to 0."),
  }),

  edit: z.object({
    title: z
      .string({
        error: "Course title is required.",
      })
      .min(3, "Course title must be at least 3 characters long.")
      .optional(),

    thumbnail: z
      .instanceof(File)
      .refine((file) => file.size <= MAX_FILE_SIZE, {
        message: "Max file size is 500KB.",
      })
      .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: "Only .jpg, .jpeg, .png, and .webp files are accepted.",
      })
      .optional(),

    description: z
      .string({
        error: "Course description is required.",
      })
      .min(500, "Course description must be at least 500 characters long.")
      .optional(),

    shortDescription: z
      .string({
        error: "Course description is required.",
      })
      .min(10, "Course description must be at least 10 characters long.")
      .max(50, "Course description should not be at least 50 characters long.")
      .optional(),

    price: z
      .number({
        error: "Course price is required.",
      })
      .min(0, "Course price must be greater than or equal to 0.")
      .optional(),
  }),
};
