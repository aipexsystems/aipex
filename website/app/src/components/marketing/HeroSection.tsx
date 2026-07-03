import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function HeroSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="max-w-4xl space-y-8">

          <span className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600">
            Digital ecosystems for ambitious organizations
          </span>

          <h1 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-7xl">
            Beautiful software should solve real business problems.
          </h1>

          <p className="max-w-2xl text-xl leading-8 text-slate-600">
            AIPEX designs, engineers, and maintains elegant digital ecosystems
            that help organizations automate operations, increase revenue,
            and build lasting trust.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button>
              Schedule a Discovery Conversation
            </Button>

            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Explore Services
            </a>
          </div>

          <div className="grid gap-8 pt-12 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-slate-900">3</p>
              <p className="text-sm text-slate-500">
                Focus Industries
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-slate-900">100%</p>
              <p className="text-sm text-slate-500">
                Outcome-Driven Engagements
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-slate-900">
                Services → Products
              </p>
              <p className="text-sm text-slate-500">
                Long-Term Company Doctrine
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
