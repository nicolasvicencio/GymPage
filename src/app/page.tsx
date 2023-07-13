import { Contact, Featured, Footer, InfoSection } from "@/components";
import ProductMain from "@/components/ProductMain/ProductMain";

export default function Home() {
  return (
    <main>
      <Featured />
      <InfoSection />
      <ProductMain />
      <Contact />
    </main>
  );
}
