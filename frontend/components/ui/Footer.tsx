import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    CreditCard,
    ShieldCheck,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 pt-16 pb-8 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Üst Kısım: Bülten Aboneliği & İletişim */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-b border-slate-800 pb-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Bültenimize Abone Olun</h3>
                        <p className="text-slate-400 mb-6 lg:mb-0">
                            Yeni ürünlerden, indirimlerden ve özel kampanyalardan ilk siz haberdar olun.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="E-posta adresiniz"
                            className="flex-1 bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                        />
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                            Kayıt Ol
                        </button>
                    </div>
                </div>

                {/* Orta Kısım: Linkler ve Menüler */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* 1. Sütun: Marka ve İletişim Bilgileri */}
                    <div className="space-y-4">
                        <Link href="/" className="text-3xl font-extrabold text-white tracking-tight inline-block mb-2">
                            ShopTR
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            En yeni trendler, en teknolojik ürünler ve evinizin ihtiyacı olan her şey güvenli alışveriş güvencesiyle ShopTR'de.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                                <FaFacebookF className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                                <FaXTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                                <FaYoutube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* 2. Sütun: Kategoriler */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-wider">Kategoriler</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/kadin" className="hover:text-indigo-400 transition-colors">Kadın Giyim</Link></li>
                            <li><Link href="/erkek" className="hover:text-indigo-400 transition-colors">Erkek Giyim</Link></li>
                            <li><Link href="/elektronik" className="hover:text-indigo-400 transition-colors">Elektronik</Link></li>
                            <li><Link href="/kozmetik" className="hover:text-indigo-400 transition-colors">Kozmetik & Kişisel Bakım</Link></li>
                            <li><Link href="/ev-yasam" className="hover:text-indigo-400 transition-colors">Ev & Yaşam</Link></li>
                        </ul>
                    </div>

                    {/* 3. Sütun: Müşteri Hizmetleri */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-wider">Müşteri Hizmetleri</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/sss" className="hover:text-indigo-400 transition-colors">Sıkça Sorulan Sorular</Link></li>
                            <li><Link href="/iade" className="hover:text-indigo-400 transition-colors">İade ve Değişim</Link></li>
                            <li><Link href="/kargo" className="hover:text-indigo-400 transition-colors">Kargo Takip</Link></li>
                            <li><Link href="/gizlilik" className="hover:text-indigo-400 transition-colors">Gizlilik Politikası</Link></li>
                            <li><Link href="/mesafeli-satis" className="hover:text-indigo-400 transition-colors">Mesafeli Satış Sözleşmesi</Link></li>
                        </ul>
                    </div>

                    {/* 4. Sütun: İletişim */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase tracking-wider">İletişim</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                                <span>Levent Mah. Çayır Çimen Sok. No: 123<br />Beşiktaş, İstanbul</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                                <span>0850 123 45 67</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                                <span>destek@shoptr.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Alt Kısım: Telif Hakkı ve Güvenlik/Ödeme */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500 text-center md:text-left">
                        &copy; {currentYear} ShopTR. Tüm hakları saklıdır.
                    </p>

                    <div className="flex items-center gap-4 text-slate-500">
                        <div className="flex items-center gap-1 hover:text-slate-300 transition-colors">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-xs font-medium">Güvenli Alışveriş</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Normalde buraya Visa/Mastercard ikonları gelir */}
                            <CreditCard className="w-8 h-8 opacity-70" />
                            <div className="w-8 h-5 bg-slate-700 rounded opacity-70"></div>
                            <div className="w-8 h-5 bg-slate-700 rounded opacity-70"></div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}