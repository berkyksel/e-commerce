import Link from "next/link";
import { ArrowLeft, Check, ShoppingCart, Star } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { formatPrice, getProduct, products } from "@/lib/mock-data";

export function generateStaticParams() {
    return products.map((product) => ({ id: String(product.id) }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = getProduct(id);

    if (!product) {
        return <main className="min-h-screen bg-slate-50"><Navbar /><div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="text-3xl font-black text-slate-950">Urun bulunamadi</h1><Link href="/urunler" className="mt-6 inline-block font-bold text-indigo-600">Kataloga don</Link></div><Footer /></main>;
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <Link href="/urunler" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600"><ArrowLeft className="h-4 w-4" /> Kataloga don</Link>
                <div className="grid gap-10 lg:grid-cols-2">
                    <div role="img" aria-label={product.name} className={`aspect-square rounded-3xl bg-cover bg-center ${product.color}`} style={{ backgroundImage: `url(${product.image})` }} />
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">{product.category}</span>
                        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{product.name}</h1>
                        <div className="mt-5 flex items-center gap-2 text-amber-500"><Star className="h-5 w-5 fill-current" /><span className="font-bold">{product.rating}</span><span className="text-sm text-slate-400">(128 degerlendirme)</span></div>
                        <p className="mt-6 text-lg leading-8 text-slate-600">{product.description}</p>
                        <div className="mt-8">{product.oldPrice && <span className="mr-3 text-slate-400 line-through">{formatPrice(product.oldPrice)}</span>}<span className="text-3xl font-black text-slate-950">{formatPrice(product.price)}</span></div>
                        <button type="button" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-bold text-white transition hover:bg-indigo-700 sm:w-fit sm:px-10"><ShoppingCart className="h-5 w-5" /> Sepete ekle</button>
                        <div className="mt-8 space-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600"><p className="flex gap-2"><Check className="h-5 w-5 text-emerald-500" /> 750 TL uzeri ucretsiz kargo</p><p className="flex gap-2"><Check className="h-5 w-5 text-emerald-500" /> 14 gun icinde kolay iade</p></div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
