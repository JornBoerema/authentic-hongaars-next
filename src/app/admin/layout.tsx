import { Sidebar } from "@/components/sidebar";
import { Toaster } from "@/components/ui/sonner";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="w-full px-8 py-6">{children}</div>
			<Toaster closeButton richColors theme="light" />
		</div>
	);
};

export default Layout;
