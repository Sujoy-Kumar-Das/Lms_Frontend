"use client";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const navItemsArray = [
  { id: "home", title: "Home", link: "#" },
  { id: "courses", title: "Courses", link: "/courses" },
  { id: "features", title: "Features", link: "#features" },
  { id: "testimonials", title: "Testimonials", link: "#testimonials" },
  { id: "contact", title: "Contact", link: "#contact" },
];

export default function NavItems({
  className,
  onToggleMenu,
}: {
  className: string;
  onToggleMenu?: () => void;
}) {
  const { user } = useAuth();

  const navLinks = [
    ...navItemsArray,
    ...(user
      ? [
          {
            id: "dashboard",
            title: "Dashboard",
            link: `/dashboard/${user.role}`,
          },
        ]
      : []),
  ];

  return (
    <div className={twMerge(className)}>
      {navLinks.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          onClick={onToggleMenu && onToggleMenu}
          className="text-text-primary hover:text-primary px-3 py-2 font-medium"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
