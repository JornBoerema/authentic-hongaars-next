import type { UserRole } from "@prisma/client";
import { auth } from "@/auth";

interface ProtectedProps {
	children: React.ReactNode;
	role?: UserRole;
	fallback?: React.ReactNode;
}

export const Protected = async ({ children, role, fallback }: ProtectedProps) => {
	const session = await auth();

	if (role && session?.user?.role !== role) {
		return <>{fallback}</>;
	}

	return <>{children}</>;
};
