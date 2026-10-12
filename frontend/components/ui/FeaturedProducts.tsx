import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/mock-data";

export default function FeaturedProducts() {
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">One Cikanlar</h2>
                        <p className="mt-2 text-sm text-slate-500">Sezonun en cok tercih edilen urunleri.</p>
                    </div>
                    <Link href="/urunler" className="hidden font-semibold text-indigo-600 transition-all hover:text-indigo-700 hover:underline sm:block">Tumunu Gor &rarr;</Link>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
                <div className="mt-10 flex justify-center sm:hidden">
                    <Link href="/urunler" className="w-full rounded-xl bg-slate-100 py-3 text-center font-semibold text-slate-700 transition-colors hover:bg-slate-200">Tum Urunleri Gor</Link>
                </div>
            </div>
        </section>
    );
}
