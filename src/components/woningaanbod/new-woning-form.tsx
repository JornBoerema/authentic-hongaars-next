"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useTransition } from "react";
import { createWoning } from "@/actions/woningaanbod/create-woning";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const CreateWoningSchema = z.object({
	titel: z.string().min(1, {
		message: "Titel is verplicht",
	}),
	subtitel: z.string().min(1, {
		message: "Subtitel is verplicht",
	}),
	korte_omschrijving: z.string().min(1, {
		message: "Korte omschrijving is verplicht",
	}),
	omschrijving: z.string().min(1, {
		message: "Omschrijving is verplicht",
	}),
	omgeving: z.string().min(1, {
		message: "Omgeving is verplicht",
	}),
	prijs: z.string().min(1, {
		message: "Prijs is verplicht",
	}),
	oppervlakte: z.string().min(1, {
		message: "Oppervlakte is verplicht",
	}),
	slaapkamers: z.string().min(1, {
		message: "Slaapkamers is verplicht",
	}),
	badkamers: z.string().min(1, {
		message: "Badkamers is verplicht",
	}),
	verkocht: z.boolean({ required_error: "Verkocht is verplicht" }),
});

export const NewWoningForm = () => {
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof CreateWoningSchema>>({
		resolver: zodResolver(CreateWoningSchema),
		defaultValues: {
			titel: "",
			subtitel: "",
			korte_omschrijving: "",
			omschrijving: "",
			omgeving: "",
			prijs: "",
			oppervlakte: "",
			slaapkamers: "",
			badkamers: "",
			verkocht: false,
		},
	});

	const handleSubmit = (values: z.infer<typeof CreateWoningSchema>) => {
		startTransition(() => {
			createWoning(values).then(() => {
				toast.success("Huis toegevoegd");
			});
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} className="mt-8">
				<div className="flex items-center justify-between">
					<p className="text-2xl font-bold">Huis toevoegen</p>
					<Button type="submit" disabled={isPending}>
						Opslaan
					</Button>
				</div>
				<div className="mt-5 space-y-6">
					<FormField
						control={form.control}
						name="titel"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Titel</FormLabel>
								<FormControl>
									<Input {...field} disabled={isPending} className="bg-card" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="subtitel"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Subtitel</FormLabel>
								<FormControl>
									<Input {...field} disabled={isPending} className="bg-card" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="korte_omschrijving"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Korte omschrijving</FormLabel>
								<FormControl>
									<Input {...field} disabled={isPending} className="bg-card" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="omschrijving"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Omschrijving</FormLabel>
								<FormControl>
									<Input {...field} disabled={isPending} className="bg-card" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="omgeving"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Omgeving</FormLabel>
								<FormControl>
									<Input {...field} disabled={isPending} className="bg-card" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="prijs"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Prijs</FormLabel>
								<FormControl>
									<Input {...field} disabled={isPending} className="bg-card" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="oppervlakte"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Oppervlakte</FormLabel>
								<FormControl>
									<Input {...field} disabled={isPending} className="bg-card" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="slaapkamers"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Slaapkamers</FormLabel>
								<FormControl>
									<Input {...field} disabled={isPending} className="bg-card" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="badkamers"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Badkamers</FormLabel>
								<FormControl>
									<Input {...field} disabled={isPending} className="bg-card" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="verkocht"
						render={({ field }) => (
							<FormItem className="flex items-center gap-x-2">
								<FormLabel>Verkocht</FormLabel>
								<FormControl className="!mt-0">
									<Checkbox onCheckedChange={field.onChange} onBlur={field.onBlur} checked={field.value} className="bg-card" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
			</form>
		</Form>
	);
};
