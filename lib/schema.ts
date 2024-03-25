import { z } from "zod";
export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be atleast 2 characters",
  }),
  password: z
    .string()
    .min(4, { message: "Password must be atleast 4 characters" }),
});
