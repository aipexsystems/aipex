import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="border-b border-slate-200">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          {site.name}
        </Link>

        <nav className="hidden gap-8 md:flex">
          {site.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-700 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
