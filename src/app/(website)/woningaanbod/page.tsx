import { getWoningen } from "@/actions/woningaanbod/get-woningen";
import { WoningCard } from "@/components/woningaanbod/woning-card";

const WoningaanbodPage = async () => {
	const woningen = await getWoningen();

	return (
		<div className="container py-12 space-y-6">
			<div className="flex bg-primary px-6 py-5 rounded text-white">
				<h1 className="font-bold text-3xl">Woningaanbod</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{woningen
					.filter((woning) => woning.afbeeldingen.length > 0)
					.map((woning) => {
						return <WoningCard key={woning.id} woning={woning} />;
					})}
			</div>
		</div>
	);
};

export default WoningaanbodPage;
