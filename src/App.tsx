import { Section } from "@/components/shared/Section";
import { Heading, Text } from "@/components/ui/Typography";

function App() {
  return (
    <main className="bg-[#030712] text-white">
      <Section spacing="xl">
        <Heading level={1} size="display">
          Hello, I'm Ubaid 👋
        </Heading>

        <Text variant="muted" size="lg" className="mt-6 max-w-2xl">
          Full Stack Java Developer building modern, scalable and high-performance web applications
          with Java, Spring Boot and React.
        </Text>
      </Section>

      <Section background="surface" spacing="lg">
        <Heading level={2}>About Me</Heading>

        <Text variant="muted" className="mt-4">
          This is the second section.
        </Text>
      </Section>
    </main>
  );
}

export default App;
