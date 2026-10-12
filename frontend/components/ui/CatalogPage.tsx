import Link from "next/link";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/mock-data";

type CatalogPageProps = { title: string; description: string; filter?: string; accent?: string };

export default function CatalogPage({ title, description, filter, accent = "bg-indigo-600" }: CatalogPageProps) {
    const visibleProducts = filter ? products.filter((product) => product.categorySlug === filter) : products;

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                        <div>
                            <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white ${accent}`}>ShopTR koleksiyonu</span>
                            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">{title}</h1>
                            <p className="mt-3 max-w-2xl text-slate-500">{description}</p>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-500"><SlidersHorizontal className="h-4 w-4" /> {visibleProducts.length} urun</div>
                    </div>
                </div>
            </section>
            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-center justify-between"><p className="text-sm text-slate-500">Senin icin secilenler</p><Link href="/urunler" className="flex items-center gap-2 text-sm font-bold text-indigo-600">Tum katalog <ArrowRight className="h-4 w-4" /></Link></div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
            </section>
            <Footer />
        </main>
    );
}
