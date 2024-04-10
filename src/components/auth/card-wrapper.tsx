import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CardWrapperProps {
	children: React.ReactNode;
	title: string;
	subtitle?: string;
}

export const CardWrapper = ({ children, title, subtitle }: CardWrapperProps) => {
	return (
		<Card className="w-[400px] shadow-md">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{subtitle}</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
};
