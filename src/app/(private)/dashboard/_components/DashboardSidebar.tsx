import Logo from "@/_components/shared/logo/Logo";
import { IUserRoles } from "@/interface/user.roles.interface";
import dashboardRoutes from "@/routes/dashboard.routes";
import routeGenerator from "@/utils/route.generator";
import Link from "next/link";

export default function DashboardSidebar({
  isSidebarOpen,
  role,
}: {
  isSidebarOpen: boolean;
  role?: string;
}) {
  const routes = routeGenerator(dashboardRoutes, role as IUserRoles);

  return (
    <aside
      className={`bg-background min-h-screen w-64 p-5 text-text-primary
        fixed top-0 left-0 h-full overflow-y-auto transition-transform z-50
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:sticky md:translate-x-0 md:block`}
    >
      {/* Logo  */}
      <div className="pb-4 border-b border-text-secondary">
        <Logo />
        <p className="text-text-secondary text-sm mt-2 capitalize">
          {role} Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-1">
        {routes.map((route) => (
          <Link
            key={route.text}
            href={route.link}
            className="flex items-center gap-3 px-6 py-3 border-l-4 border-transparent text-text-secondary
              hover:bg-primary/10 hover:border-primary hover:text-primary
              transition-all duration-200 rounded-l-lg"
          >
            <span className="text-xl">{route.icon}</span>
            <span className="text-base font-medium">{route.text}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
