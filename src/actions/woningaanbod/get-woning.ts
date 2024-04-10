"use server";

import { db } from "@/lib/prisma";

export const getWoning = (id: string) => {
	return db.woning.findUnique({ where: { id }, include: { afbeeldingen: { orderBy: { order: "asc" } } } });
};
