import { getWoning } from "@/actions/woningaanbod/get-woning";
import { moneyFormatter } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBedFront, faTableCells } from "@fortawesome/pro-regular-svg-icons";

const WoningPage = async ({ params }: { params: { [key: string]: string } }) => {
	const woning = await getWoning(params.id);

	return woning ? (
		<div className="container py-12 grid grid-cols-2 gap-x-12">
			<img src={woning.afbeeldingen[0].url} className="rounded-md" />
			<div>
				<div className="bg-primary text-white flex items-center justify-between px-6 py-3 text-xl font-bold rounded-md">
					<p>{woning.titel}</p>
					<p>{moneyFormatter.format(woning.prijs)}</p>
				</div>
				<div className="mt-5 space-y-2 text-[#775e58]">
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-bold">Omschrijving</h2>
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
					</div>
					<p>{woning.omschrijving}</p>
				</div>
				<div className="mt-5 space-y-2 text-[#775e58]">
					<h2 className="text-2xl font-bold">Tuin en omgeving</h2>
					<p>{woning.omgeving}</p>
				</div>
			</div>
		</div>
	) : null;
};

export default WoningPage;
