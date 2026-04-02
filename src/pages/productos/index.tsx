import { Layout } from "../../components/Layout";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";
import landingData from "../../data/landingData.json";
import { ProductsSection } from "../../sections/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos IA: Agents, RAG y Omnicanal | Fusa Labs",
  description:
    "Explorá FUSA AGENTS, FUSA RAG y FUSA OMNICANAL: productos propios para automatizar procesos y ampliar capacidad operativa.",
  alternates: {
    canonical: "/productos",
  },
  openGraph: {
    title: "Productos IA: Agents, RAG y Omnicanal | Fusa Labs",
    description:
      "Explorá FUSA AGENTS, FUSA RAG y FUSA OMNICANAL: productos propios para automatizar procesos y ampliar capacidad operativa.",
    url: "/productos",
    siteName: "Fusa Labs",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    title: "Productos IA: Agents, RAG y Omnicanal | Fusa Labs",
    description:
      "Explorá FUSA AGENTS, FUSA RAG y FUSA OMNICANAL: productos propios para automatizar procesos y ampliar capacidad operativa.",
  },
};

function ProductsPageContent() {
  const { lang } = useLanguage();
  const data = (landingData as any)[lang];
  const { title, subtitle } = data.productsSection;

  return (
    <div className="pb-20 md:pb-32">
      <ProductsSection
        title={title}
        subtitle={subtitle}
        lang={lang}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <LanguageProvider>
      <Layout>
        <ProductsPageContent />
      </Layout>
    </LanguageProvider>
  );
}
