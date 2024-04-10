import * as z from "zod";

export const NewPasswordSchema = z.object({
	password: z.string().min(8, {
		message: "Minimum of 8 characters required",
	}),
});
