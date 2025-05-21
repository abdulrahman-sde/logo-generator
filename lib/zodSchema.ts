import { z } from "zod";

export const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(50, {
      message: "Title must not exceed 50 characters.",
    }),
  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters.",
    })
    .max(1000, {
      message: "Description must not exceed 1000 characters.",
    }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  style: z.string({
    required_error: "Please select a style.",
  }),
  colorScheme: z.array(z.string()).min(1, {
    message: "Please select at least one color.",
  }),
})