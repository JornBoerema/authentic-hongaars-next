import { Navbar } from "@/components/navbar";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-screen h-screen relative">
			<Navbar />
			<div className="fixed top-16 left-0 right-0">{children}</div>
		</div>
	);
};

export default WebsiteLayout;
