import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold">
            Let's build your next success story.
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Every transformation begins with a conversation about your
            organization, your challenges, and the future you want to create.
          </p>

          <div className="mt-10">
            <Button className="bg-white text-slate-900 hover:bg-slate-100">
              Schedule a Discovery Conversation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
