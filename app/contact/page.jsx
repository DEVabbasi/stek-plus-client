import { Container } from "@/components/layout/Container";

export default function Contact() {
  return (
    <section className="section-padding bg-[#f5f7fa]">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Contact
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          Neem contact met ons op voor meer informatie.
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Adres:</strong> Bulkesstraat 17, 4051LW Ingen
          </p>
          <p className="text-gray-700">
            <strong>KVK Nummer:</strong> 95072526
          </p>
          <p className="text-gray-700">
            <strong>BTW Identificatienummer:</strong> NL006946783B3
          </p>
        </div>
      </Container>
    </section>
  );
}
