"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItemProps {
	children?: React.ReactNode;
	href?: string;
	title: string;
	className?: string;
}

export const NavItem = ({ href, title, children, className }: NavItemProps) => {
	const pathname = usePathname();

	const active = pathname === href;

	if (children) {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="nav" className="gap-x-2">
						<span>{title}</span>
						<ChevronDownIcon className="w-4 h-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent sideOffset={18} className="flex flex-col w-[200px]">
					{children}
				</DropdownMenuContent>
			</DropdownMenu>
		);
	} else {
		return (
			<Button variant="nav" className={cn(active && "bg-primary", className)} asChild>
				<Link href={href!}>{title}</Link>
			</Button>
		);
	}
};
