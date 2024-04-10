import { SidebarItem } from "@/components/sidebar/item";
import { faHouse } from "@fortawesome/pro-regular-svg-icons";

export const Sidebar = () => {
	return (
		<aside className="h-screen w-72 border-primary/50 border-r">
			<h1 className="mx-6 my-5 text-xl font-bold">Rental portal</h1>
			<div className="space-y-4">
				<SidebarItem label="Huizen" icon={faHouse} path="/admin/huizen" />
			</div>
		</aside>
	);
};
