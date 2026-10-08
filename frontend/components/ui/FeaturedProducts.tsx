import Link from "next/link";
import { ShoppingCart, Heart, Star } from "lucide-react";

// Sahte Ürün Verisi (Mock Data)
const products = [
    {
        id: 1,
        name: "Oversize Pamuklu Tişört",
        category: "Erkek Giyim",
        price: 499.90,
        oldPrice: 599.90,
        rating: 4.8,
        isNew: true,
    },
    {
        id: 2,
        name: "Yüksek Bel Wide Leg Jean",
        category: "Kadın Giyim",
        price: 899.00,
        oldPrice: null,
        rating: 4.5,
        isNew: false,
    },
    {
        id: 3,
        name: "Kablosuz Kulak Üstü Kulaklık",
        category: "Elektronik",
        price: 2499.00,
        oldPrice: 2999.00,
        rating: 4.9,
        isNew: false,
    },
    {
        id: 4,
        name: "Klasik Beyaz Sneaker",
        category: "Ayakkabı",
        price: 1299.90,
        oldPrice: null,
        rating: 4.6,
        isNew: true,
    }
];

export default function FeaturedProducts() {
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Başlık ve Tümünü Gör Linki */}
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Öne Çıkanlar</h2>
                        <p className="mt-2 text-sm text-slate-500">Sezonun en çok tercih edilen ürünleri.</p>
                    </div>
                    <Link href="/urunler" className="hidden sm:block text-indigo-600 font-semibold hover:text-indigo-700 hover:underline transition-all">
                        Tümünü Gör &rarr;
                    </Link>
                </div>

                {/* Ürün Grid Yapısı */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">

                            {/* Ürün Görsel Alanı */}
                            <div className="relative aspect-[4/5] bg-slate-100 flex items-center justify-center overflow-hidden">
                                {/* İndirim veya Yeni Etiketi */}
                                {product.isNew && (
                                    <span className="absolute top-3 left-3 bg-indigo-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide z-10">
                                        Yeni
                                    </span>
                                )}
                                {product.oldPrice && (
                                    <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide z-10">
                                        İndirim
                                    </span>
                                )}

                                {/* Favoriye Ekle Butonu */}
                                <button className="absolute top-3 right-3 p-2 bg-white rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors z-10 shadow-sm opacity-0 group-hover:opacity-100">
                                    <Heart className="w-5 h-5" />
                                </button>

                                {/* Görsel Placeholder */}
                                <div className="text-slate-300 text-sm font-medium flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-500">
                                    <span className="text-4xl text-slate-200">📦</span>
                                    Ürün Görseli
                                </div>
                            </div>

                            {/* Ürün Bilgileri */}
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-medium text-slate-400">{product.category}</span>
                                    <div className="flex items-center text-amber-400 text-xs font-semibold">
                                        <Star className="w-3.5 h-3.5 fill-current mr-1" />
                                        {product.rating}
                                    </div>
                                </div>

                                <h3 className="text-base font-semibold text-slate-800 line-clamp-1 mb-3 group-hover:text-indigo-600 transition-colors">
                                    <Link href={`/urun/${product.id}`}>
                                        <span className="absolute inset-0" />
                                        {product.name}
                                    </Link>
                                </h3>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex flex-col">
                                        {product.oldPrice && (
                                            <span className="text-xs text-slate-400 line-through mb-0.5">
                                                {product.oldPrice.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺
                                            </span>
                                        )}
                                        <span className="text-lg font-bold text-slate-900">
                                            {product.price.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺
                                        </span>
                                    </div>

                                    {/* Sepete Ekle Butonu (Absolute konumlandırma ile hover'da çıkar) */}
                                    <button className="relative z-20 flex items-center justify-center p-2.5 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-colors border border-indigo-100">
                                        <ShoppingCart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Mobil için Tümünü Gör Butonu */}
                <div className="mt-10 sm:hidden flex justify-center">
                    <Link href="/urunler" className="w-full text-center bg-slate-100 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-200 transition-colors">
                        Tüm Ürünleri Gör
                    </Link>
                </div>
            </div>
        </section>
    );
}