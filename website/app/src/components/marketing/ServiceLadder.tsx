import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

const services = [
  {
    title: "Digital Foundation",
    description:
      "Modern websites, branding, infrastructure, and operational foundations.",
  },
  {
    title: "Growth Operations",
    description:
      "Automation, CRM systems, lead pipelines, and revenue operations.",
  },
  {
    title: "Enterprise Transformation",
    description:
      "Large-scale modernization initiatives and organizational change.",
  },
  {
    title: "Managed Services",
    description:
      "Long-term partnerships focused on continuous improvement and support.",
  },
];

export function ServiceLadder() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Service Portfolio
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Services designed to become products.
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Every engagement creates reusable intellectual property that
            compounds into platforms and ecosystems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title}>
              <h3 className="mb-3 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="text-slate-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
