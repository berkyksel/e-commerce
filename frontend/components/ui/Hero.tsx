// components/Hero.tsx
import Link from "next/link";
import { MoveRight, ShoppingBag } from "lucide-react";

export default function Hero() {
    return (
        <div className="bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">

                {/* 1. Metin İçeriği (Sol Taraf) */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                        Yaz Koleksiyonu 2024 🔥
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tighter">
                        Tarzını Keşfet, <br />
                        <span className="text-indigo-600">Farkını Ortaya Koy</span>
                    </h1>

                    <p className="text-lg text-slate-600 max-w-2xl mx-auto md:mx-0">
                        En yeni trendleri yansıtan özel koleksiyonumuzla her anında şık ve rahat hisset. Sınırlı sayıda üretilen ürünleri hemen keşfet ve gardırobunu yenile!
                    </p>

                    {/* Aksiyon Butonları (Call to Action) */}
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                        <Link href="/yeni-sezon" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-indigo-700 transition duration-150 group shadow-md hover:shadow-lg w-full sm:w-auto justify-center">
                            Şimdi Alışverişe Başla
                            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link href="/indirimler" className="inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-indigo-600 transition px-8 py-3.5 group">
                            Fırsat Ürünleri <ShoppingBag className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* 2. Görsel Alanı (Sağ Taraf) */}
                <div className="flex-1 w-full max-w-xl md:max-w-none relative">
                    {/* Arka plan dekoratif daireler (İsteğe bağlı) */}
                    <div className="absolute -inset-4 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>

                    {/* Modern Görsel Placeholder/Container */}
                    <div className="relative z-10 w-full h-full bg-white shadow-2xl rounded-3xl p-4 border border-slate-100">
                        <div className="aspect-[4/3] rounded-2xl bg-indigo-50 flex flex-col items-center justify-center border-2 border-dashed border-indigo-100 overflow-hidden group">
                            {/* 
                  GERÇEK PROJEDE BURAYA <Image /> BİLEŞENİNİ EKLEYİN:
                  <Image src="/hero-image.jpg" alt="Model" fill className="object-cover transition-transform group-hover:scale-105" />
                */}

                            {/* Placeholder İllüstrasyonu */}
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-200">
                                <rect x="50" y="40" width="100" height="120" rx="8" fill="currentColor" opacity="0.5" />
                                <circle cx="100" cy="80" r="20" fill="currentColor" />
                                <rect x="70" y="110" width="60" height="8" rx="4" fill="currentColor" />
                                <rect x="80" y="125" width="40" height="8" rx="4" fill="currentColor" />
                            </svg>
                            <span className="text-indigo-400 font-medium mt-4">Koleksiyon Görseli [%4:3]</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}