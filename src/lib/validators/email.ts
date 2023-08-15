import { z } from "zod";

export const EmailValidator = z.object({
    fullName: z.string().min(3).max(255),
    email: z.string().email(),
    company: z.string().min(3).max(255),
    phone: z.string().min(3).max(255),
    message: z.string().min(3).max(2000),
});

export type EmailValidatorType = z.infer<typeof EmailValidator>;

