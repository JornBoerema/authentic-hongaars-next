"use server";

import { db } from "@/lib/prisma";

export const getWoningen = () => {
	return db.woning.findMany({ include: { afbeeldingen: { where: { hoofd_afbeelding: true } } } });
};
