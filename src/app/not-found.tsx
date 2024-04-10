import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<p className="text-[16rem] font-bold leading-none text-secondary-foreground">404</p>
			<p className="text-4xl font-semibold mt-2">Page Not Found</p>
			<p className="text-xl text-muted-foreground mt-4">{"The page you're looking for does not seem to exist"}</p>
			<Button size="lg" className="mt-20" asChild>
				<Link href="/">Go to home</Link>
			</Button>
		</div>
	);
};

export default NotFound;
