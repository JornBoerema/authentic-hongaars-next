import { db } from "@/lib/prisma";

export const getPasswordResetTokenByToken = async (token: string) => {
	try {
		return await db.passwordResetToken.findUnique({
			where: { token },
		});
	} catch {
		return null;
	}
};

export const getPasswordResetTokenByEmail = async (email: string) => {
	try {
		const passwordResetToken = await db.passwordResetToken.findFirst({
			where: { email },
		});

		return passwordResetToken;
	} catch {
		return null;
	}
};
