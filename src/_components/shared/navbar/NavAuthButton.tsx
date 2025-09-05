"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { toast } from "react-toastify";

export default function NavAuthButton({ isAuth = false }: { isAuth: boolean }) {
  const { user, loading, logoutUser } = useAuth();

  if (loading) {
    return null;
  }

  const handleLogout = () => {
    logoutUser("/login");
    toast.success("User Logged out successfully");
  };

  return (
    <>
      {!isAuth && (
        <>
          {!user ? (
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-dark hover:text-primary font-medium"
              >
                Login
              </Link>
              <Link href="/register" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          ) : (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          )}
        </>
      )}
    </>
  );
}
