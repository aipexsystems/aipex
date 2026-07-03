import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const industries = [
  {
    title: "Construction",
    challenge:
      "Disconnected systems, manual workflows, and fragmented project communication.",
  },
  {
    title: "Senior Living",
    challenge:
      "Operational complexity, compliance requirements, and resident experience management.",
  },
  {
    title: "Home Healthcare",
    challenge:
      "Care coordination, documentation burdens, and scalable service delivery.",
  },
];

export function IndustryGrid() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Industry Expertise
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Deep specialization creates better outcomes.
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We focus on industries where operational excellence and trust are
            decisive competitive advantages.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.title}>
              <h3 className="mb-4 text-2xl font-semibold">
                {industry.title}
              </h3>

              <p className="text-slate-600">
                {industry.challenge}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
