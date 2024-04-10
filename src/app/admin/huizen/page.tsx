import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getWoningen } from "@/actions/woningaanbod/get-woningen";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HuizenPage = async () => {
	const woningen = await getWoningen();

	return (
		<>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Huizen</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="flex items-center justify-between">
				<p className="text-2xl font-bold mt-8">Huizen</p>
				<Button>
					<Link href="/admin/huizen/new">Huis toevoegen</Link>
				</Button>
			</div>
			<div className="bg-secondary rounded-lg overflow-hidden mt-4">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Titel</TableHead>
							<TableHead>Subtitel</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{woningen.map((woning) => {
							return (
								<TableRow key={woning.id}>
									<TableCell>{woning.titel}</TableCell>
									<TableCell>{woning.subtitel}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
		</>
	);
};

export default HuizenPage;
