"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export interface SidebarItemProps {
	label: string;
	icon: IconProp;
	path: string;
}

export const SidebarItem = ({ label, icon, path }: SidebarItemProps) => {
	const pathname = usePathname();

	const active = pathname.includes(path);

	return (
		<Link
			href={path}
			className={cn(
				"flex justify-start items-center h-9 mx-3 px-3 py-2 rounded-md transition-colors text-sm font-medium",
				active ? "text-primary before:bg-primary before:w-1 before:h-7 before:rounded-r-full before:absolute before:start-0" : "hover:bg-muted"
			)}
		>
			<FontAwesomeIcon icon={icon} className="w-5 h-5 mr-3" />
			<span className="truncate">{label}</span>
		</Link>
	);
};
