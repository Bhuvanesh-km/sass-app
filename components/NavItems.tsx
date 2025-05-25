"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItem = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItem.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            "relative inline-block text-sm font-medium transition-colors duration-300 group underline-hover",
            pathname === href
              ? "text-primary font-semibold"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
