import { Container } from "./Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-12">
      <Container>
        <div className="space-y-3">
          <h2 className="font-semibold">{site.name}</h2>

          <p className="max-w-xl text-sm text-slate-600">
            {site.description}
          </p>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
