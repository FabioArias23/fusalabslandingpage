import { Layout } from "../../components/Layout";
import { LanguageProvider, useLanguage } from "../../context/LanguageContext";
import landingData from "../../data/landingData.json";
import { ProductsSection } from "../../sections/Products";

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
