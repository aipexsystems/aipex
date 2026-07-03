import { Container } from "@/components/layout/Container";

const metrics = [
  {
    value: "3",
    label: "Specialized Industries",
  },
  {
    value: "100%",
    label: "Outcome-Focused Engagements",
  },
  {
    value: "Recurring",
    label: "Revenue-First Philosophy",
  },
];

export function CredibilityBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-8">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-2xl font-bold text-slate-900">
                {metric.value}
              </p>

              <p className="text-sm text-slate-600">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
