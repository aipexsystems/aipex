import { Container } from "@/components/layout/Container";

const steps = [
  {
    title: "Discover",
    description: "Understand workflows, bottlenecks, and business objectives.",
  },
  {
    title: "Design",
    description: "Create elegant systems aligned with operational realities.",
  },
  {
    title: "Build",
    description: "Implement scalable solutions with documentation and security.",
  },
  {
    title: "Optimize",
    description: "Continuously improve through managed services and iteration.",
  },
];

export function ProcessFlow() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Process
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900">
            A disciplined methodology that compounds over time.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 p-8"
            >
              <div className="mb-6 text-3xl font-bold text-blue-600">
                0{index + 1}
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
