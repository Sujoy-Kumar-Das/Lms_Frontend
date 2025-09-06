import z from "zod";

const moduleValidationSchema = {
  create: z.object({
    title: z
      .string({ error: "Title is required." })
      .min(10, { error: "Module title must be at least 10 characters long." })
      .max(100, { error: "Module title cannot exceed 100 characters." }),
    course: z
      .string({ error: "Course title is required." })
      .min(10, { error: "Course title must be at least 10 characters long." }),
  }),

  edit: z.object({
    title: z
      .string({ error: "Title is required." })
      .min(10, { error: "Module title must be at least 10 characters long." })
      .max(100, { error: "Module title cannot exceed 100 characters." }),
    course: z
      .string({ error: "Course Title is required." })
      .min(10, { error: "Course title must be at least 10 characters long." }),
  }),
};

export default moduleValidationSchema;
