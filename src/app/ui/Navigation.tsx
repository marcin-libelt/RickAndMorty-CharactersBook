"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navigation({ navLinks }): JSX.Element {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link: { href: string; name: string }) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={isActive ? "text-blue-500 border-[10px]" : ""}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
