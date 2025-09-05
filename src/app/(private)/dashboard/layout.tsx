"use client";
import Logo from "@/_components/shared/logo/Logo";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import DashboardSidebar from "./_components/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuth();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex min-h-screen bg-contrast">
      <DashboardSidebar isSidebarOpen={isSidebarOpen} role={user?.role} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-contrast/40 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* navbar for mobile */}
        <header className="h-16 flex justify-between items-center px-4 shadow-md md:hidden">
          <Logo />
          <button onClick={toggleSidebar} className=" btn text-text-primary">
            {isSidebarOpen ? <RxCross2 /> : <FiMenu />}
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
