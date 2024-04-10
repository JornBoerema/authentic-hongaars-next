"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/auth/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () => {
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();

	const searchParams = useSearchParams();

	const token = searchParams.get("token");

	const handleSubmit = useCallback(() => {
		if (success || error) return;

		if (!token) {
			setError("Missing token!");
			return;
		}

		newVerification(token)
			.then((data) => {
				setSuccess(data.success);
				setError(data.error);
			})
			.catch(() => {
				setError("Something went wrong!");
			});
	}, [token, success, error]);

	useEffect(() => {
		handleSubmit();
	}, [handleSubmit]);

	return (
		<CardWrapper title="Email Verification" subtitle="Confirming your verification">
			<div className="w-full flex items-center justify-center py-10">
				{!success && !error && <p>Loading...</p>}
				<FormError message={error} />
				{!success && <FormSuccess message={success} />}
			</div>
		</CardWrapper>
	);
};
