import Logo from "@/_components/shared/logo/Logo";
import { useAuth } from "@/hooks/useAuth";
import { IUserRoles } from "@/interface/user.roles.interface";
import dashboardRoutes from "@/routes/dashboard.routes";
import routeGenerator from "@/utils/route.generator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosLogOut } from "react-icons/io";

export default function DashboardSidebar({
  isSidebarOpen,
}: {
  isSidebarOpen: boolean;
}) {
  const { user, logoutUser } = useAuth();
  const routes = routeGenerator(dashboardRoutes, user?.role as IUserRoles);

  const pathname = usePathname();

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
          {user?.role} Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-1">
        {routes.map((route) => {
          const isActivePath =
            pathname === route.link || pathname.startsWith(route.link + "/");

          return (
            <Link
              key={route.text}
              href={route.link}
              className={`flex items-center gap-3 px-6 py-3 border-l-4 transition-all duration-200 rounded-l-lg ${
                isActivePath
                  ? "bg-primary/10 border-l-primary text-primary"
                  : "border-transparent text-text-secondary hover:bg-primary/10 hover:border-l-primary hover:text-primary"
              }`}
            >
              <span className="text-xl">{route.icon}</span>
              <span className="text-base font-medium">{route.text}</span>
            </Link>
          );
        })}
      </nav>

      <button
        className="btn btn-primary w-full mt-5 py-2 flex items-center gap-6"
        onClick={() => logoutUser("/login")}
      >
        <IoIosLogOut />

        <span>Logout</span>
      </button>
    </aside>
  );
}
