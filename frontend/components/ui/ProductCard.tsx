import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { formatPrice, type Product } from "@/lib/mock-data";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">
            <div role="img" aria-label={product.name} className={`relative aspect-[4/5] overflow-hidden bg-cover bg-center ${product.color}`} style={{ backgroundImage: `url(${product.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                {product.badge && <span className="absolute left-3 top-3 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">{product.badge}</span>}
                <button type="button" aria-label={`${product.name} urununu favorilere ekle`} className="absolute right-3 top-3 rounded-full bg-white p-2 text-slate-400 shadow-sm transition hover:text-red-500">
                    <Heart className="h-5 w-5" />
                </button>
            </div>
            <div className="p-5">
                <div className="mb-2 flex items-center justify-between gap-2 text-xs text-slate-400">
                    <span>{product.category}</span>
                    <span className="flex items-center gap-1 font-semibold text-amber-500"><Star className="h-3.5 w-3.5 fill-current" />{product.rating}</span>
                </div>
                <h3 className="line-clamp-1 text-base font-bold text-slate-800"><Link href={`/urun/${product.id}`}>{product.name}</Link></h3>
                <div className="mt-4 flex items-end justify-between gap-3">
                    <div>
                        {product.oldPrice && <div className="text-xs text-slate-400 line-through">{formatPrice(product.oldPrice)}</div>}
                        <div className="text-lg font-extrabold text-slate-950">{formatPrice(product.price)}</div>
                    </div>
                    <button type="button" aria-label={`${product.name} urununu sepete ekle`} className="rounded-full bg-indigo-50 p-2.5 text-indigo-600 transition hover:bg-indigo-600 hover:text-white"><ShoppingCart className="h-5 w-5" /></button>
                </div>
            </div>
        </article>
    );
}
