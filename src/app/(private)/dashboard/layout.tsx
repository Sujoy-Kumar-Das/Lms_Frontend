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
    <div className="flex md:flex-row flex-col min-h-screen bg-contrast">
      {/* Sidebar */}
      <DashboardSidebar isSidebarOpen={isSidebarOpen} role={user?.role} />

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex-1 flex flex-col">
        {/* Mobile navbar */}
        <header className="h-16 flex justify-between items-center px-4 shadow-md bg-background md:hidden sticky top-0 z-[10001]">
          <Logo />
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-text-primary hover:bg-primary/10 transition"
          >
            {isSidebarOpen ? <RxCross2 size={22} /> : <FiMenu size={22} />}
          </button>
        </header>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
