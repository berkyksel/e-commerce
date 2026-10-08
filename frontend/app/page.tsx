import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Öne Çıkan Ürünler Vitrini */}
      <FeaturedProducts />

      {/* 4. Footer */}
      <Footer />

    </main>
  );
}    