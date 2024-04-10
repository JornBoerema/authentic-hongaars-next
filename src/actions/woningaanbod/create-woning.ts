"use server";

import * as z from "zod";
import { CreateWoningSchema } from "@/components/woningaanbod/new-woning-form";
import { db } from "@/lib/prisma";

export const createWoning = async (values: z.infer<typeof CreateWoningSchema>) => {
	await db.woning.create({
		data: {
			titel: values.titel,
			subtitel: values.subtitel,
			korte_omschrijving: values.korte_omschrijving,
			omschrijving: values.omschrijving,
			omgeving: values.omgeving,
			prijs: Number(values.prijs),
			oppervlakte: Number(values.oppervlakte),
			slaapkamers: Number(values.slaapkamers),
			badkamers: Number(values.badkamers),
			verkocht: values.verkocht,
		},
	});
};
