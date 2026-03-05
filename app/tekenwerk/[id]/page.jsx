import { tekenwerkenProducts } from "@/lib/data/tekenwerken-data";
import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/components/sections/tekenwerken/ProductDetailClient";
import { ContactSection } from "@/components/sections/home/ContactSection";

export function generateStaticParams() {
  return tekenwerkenProducts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = tekenwerkenProducts.find((p) => p.id === id);
  return { title: product ? `${product.title} | Stek+` : "Tekenwerk | Stek+" };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = tekenwerkenProducts.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <main className="bg-white min-h-screen">
      <ProductDetailClient product={product} />
      <ContactSection preselectedDienst={product.formDienst} title="Vul uw gegevens in" />
    </main>
  );
}
