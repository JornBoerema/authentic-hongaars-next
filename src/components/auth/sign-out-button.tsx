"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/actions/auth/logout";

export const SignOutButton = () => {
	return (
		<Button variant="secondary" onClick={() => logout()}>
			Sign out
		</Button>
	);
};
