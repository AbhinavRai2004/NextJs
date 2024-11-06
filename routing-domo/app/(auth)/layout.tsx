"use client";

import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" }
];

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="auth-layout">
      <nav>
        <ul className="flex m-3">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.name} className="mx-1 p-3 ">
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "font-bold text-lg"
                      : "text-blue-600 hover:text-orange-400"
                  }
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}
