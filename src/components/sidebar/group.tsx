export const SidebarGroup = ({ children, title }: { children: React.ReactNode; title: string }) => {
	return (
		<div className="space-y-1">
			<p className="uppercase px-6 !mb-2 !mt-6 text-xs font-semibold tracking-widest text-muted-foreground">{title}</p>
			<div className="space-y-1">{children}</div>
		</div>
	);
};
