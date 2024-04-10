"use client";

import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-regular-svg-icons";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { NavItem } from "@/components/navbar/item";

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<Accordion type="single" collapsible value={open ? "nav" : ""} className="fixed top-0 z-10">
			<AccordionItem value="nav">
				<header className="w-screen h-16 bg-[#775e58]">
					<div className="h-full container flex items-center justify-between">
						<h1 className="text-white font-semibold text-2xl">Authentic Hongaars</h1>
						<div className="flex lg:hidden items-center justify-center">
							<Button variant="nav" size="icon" onClick={() => setOpen((prevState) => !prevState)}>
								<FontAwesomeIcon icon={faBars} className="w-4 h-4" />
							</Button>
						</div>
						<nav className="hidden lg:flex items-center gap-x-4">
							<NavItem href="/" title="Home" />
							<NavItem href="/woningaanbod" title="Woningaanbod" />
							<NavItem title="Bouw en infra">
								<NavItem href="/renovatieplannen" title="Renovatieplannen" className="justify-start" />
								<NavItem href="/Verbouwingen" title="Verbouwingen" className="justify-start" />
							</NavItem>
							<NavItem title="Diensten">
								<NavItem href="/omgeving" title="Omgeving" className="justify-start" />
								<NavItem href="/emigreren" title="Emigreren" className="justify-start" />
								<NavItem href="/Beheer en nazorg" title="Beheer en nazorg" className="justify-start" />
							</NavItem>
							<NavItem href="/over-ons" title="Over ons" />
						</nav>
					</div>
				</header>
				<AccordionContent className="lg:hidden bg-[#775e58]">
					<div className="flex flex-col container">
						<NavItem href="/" title="Home" />
						<NavItem href="/" title="Woningaanbod" />
						<NavItem href="/" title="Bouw en infra" />
						<NavItem href="/" title="Diensten" />
						<NavItem href="/" title="Over ons" />
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};
