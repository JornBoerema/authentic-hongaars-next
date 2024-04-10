import { Woning, WoningAfbeelding } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBath, faBedFront, faTableCells } from "@fortawesome/pro-regular-svg-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { moneyFormatter } from "@/lib/utils";

interface WoningCardProps {
	woning: Woning & { afbeeldingen: WoningAfbeelding[] };
}

export const WoningCard = ({ woning }: WoningCardProps) => {
	return (
		<div className="text-[#775e58]">
			<img src={woning.afbeeldingen[0].url} alt={`afbeelding van ${woning.titel}`} />
			<div className="bg-primary text-white rounded mt-3 px-3 py-1.5 flex items-center justify-between">
				<p className="font-semibold">{woning.titel}</p>
				<p>{moneyFormatter.format(woning.prijs)}</p>
			</div>
			<p className="text-xl mt-3 font-semibold">{woning.subtitel}</p>
			<p className="mt-2">{woning.korte_omschrijving}</p>
			<div className="mt-4 flex items-center justify-between">
				<div className="flex items-center gap-x-5">
					<span className="flex items-center justify-center gap-x-2 ">
						<FontAwesomeIcon icon={faTableCells} className="w-4 h-4" />
						{woning.oppervlakte} m²
					</span>
					<span className="flex items-center justify-center gap-x-2 ">
						<FontAwesomeIcon icon={faBedFront} className="w-4 h-4" />
						{woning.slaapkamers}
					</span>
					<span className="flex items-center justify-center gap-x-2 ">
						<FontAwesomeIcon icon={faBath} className="w-4 h-4" />
						{woning.badkamers}
					</span>
				</div>
				<Button className="gap-x-2" asChild>
					<Link href={`/woningaanbod/${woning.id}`}>
						Meer info
						<FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
					</Link>
				</Button>
			</div>
		</div>
	);
};
