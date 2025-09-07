import z from "zod";

export const createLectureSchema = z.object({
  title: z
    .string({
      error: "Title is required",
    })
    .min(10, "Title must be at least 10 characters long")
    .max(100, "Title must be at most 100 characters long"),

  video: z.url({
    error: "Video URL is required",
  }),

  notes: z.array(
    z
      .instanceof(File, { message: "Invalid file type" })
      .refine((file) => file.type === "application/pdf", {
        message: "Only PDF files are allowed",
      })
  ),

  module: z
    .string({
      error: "Module is required",
    })
    .min(5, { error: "Module is required." }),
});

export const editLectureSchema = z.object({
  title: z
    .string({
      error: "Title is required",
    })
    .min(10, "Title must be at least 10 characters long")
    .max(100, "Title must be at most 100 characters long"),

  video: z.url({
    error: "Video URL is required",
  }),

  module: z
    .string({
      error: "Module is required",
    })
    .min(5, { error: "Module is required." }),
});
