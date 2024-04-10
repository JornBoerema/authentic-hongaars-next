const domain = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const sendVerificationEmail = (email: string, token: string) => {
	const confirmURL = `${domain}/new-verification?token=${token}`;

	console.log(confirmURL);

	// TODO: send mail with url
};

export const sendPasswordResetEmail = (email: string, token: string) => {
	const resetURL = `${domain}/new-password?token=${token}`;

	console.log(resetURL);

	// TODO: send mail with url
};
