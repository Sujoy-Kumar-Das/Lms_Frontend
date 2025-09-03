"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const navItemsArray = [
  { id: "home", title: "Home", link: "#" },
  { id: "courses", title: "Courses", link: "#courses" },
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
  return (
    <div className={twMerge(className)}>
      {navItemsArray.map((item) => (
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
