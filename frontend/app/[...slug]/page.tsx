import Link from "next/link";
import { ArrowLeft, CheckCircle2, Package, ShieldCheck } from "lucide-react";
import CatalogPage from "@/components/ui/CatalogPage";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const categoryPages: Record<string, { title: string; description: string; filter: string; accent: string }> = {
    kadin: { title: "Kadin koleksiyonu", description: "Sezonun rahat, zamansiz ve kolay kombinlenen parcalari.", filter: "kadin", accent: "bg-rose-500" },
    erkek: { title: "Erkek koleksiyonu", description: "Gun boyu konfor ve karakterli stil icin secilen parcalar.", filter: "erkek", accent: "bg-sky-600" },
    elektronik: { title: "Elektronik", description: "Gunun temposuna ayak uyduran akilli ve kullanisli teknoloji urunleri.", filter: "elektronik", accent: "bg-violet-600" },
    "ev-yasam": { title: "Ev & Yasam", description: "Yasam alanina iyi gelen kucuk dokunuslar ve islevsel tasarimlar.", filter: "ev-yasam", accent: "bg-emerald-600" },
    kozmetik: { title: "Kozmetik & Kisisel Bakim", description: "Gunluk bakim rutinini tamamlayan secili urunler.", filter: "kozmetik", accent: "bg-fuchsia-600" },
};

const infoPages: Record<string, { title: string; text: string; items: string[] }> = {
    sss: { title: "Sikca Sorulan Sorular", text: "ShopTR deneyimini kolaylastirmak icin en cok merak edilenleri bir araya getirdik.", items: ["Siparisim ne zaman kargoya verilir? Siparisler ortalama 1-3 is gunu icinde hazirlanir.", "Kargo ucreti ne kadar? 750 TL ve uzeri siparislerde kargo ucretsizdir.", "Urunu nasil iade edebilirim? Teslimattan sonraki 14 gun icinde hesabinizdan iade talebi olusturabilirsiniz."] },
    iade: { title: "Iade ve Degisim", text: "Memnun kalmadiginiz urunleri kolayca iade edebilirsiniz.", items: ["Urun kullanilmamis ve yeniden satilabilir durumda olmalidir.", "Iade talebinizi Hesabim > Siparislerim alanindan baslatabilirsiniz.", "Onaylanan iadeler 3-5 is gunu icinde odeme yonteminize aktarilir."] },
    kargo: { title: "Kargo Takip", text: "Mock siparisiniz #TR-20481 hazirlaniyor.", items: ["Siparis alindi - 12 Ekim", "Paketlendi - 13 Ekim", "Kargoya verilecek - Tahmini 14 Ekim"] },
    gizlilik: { title: "Gizlilik Politikasi", text: "Verileriniz ShopTR tarafindan yalnizca siparis, teslimat ve destek deneyimini saglamak icin kullanilir.", items: ["Odeme bilgileriniz sistemlerimizde saklanmaz.", "Hesap verilerinizi istediginiz zaman guncelleyebilir veya silebilirsiniz.", "Pazarlama iletilerinden tek tikla ayrilabilirsiniz."] },
    "mesafeli-satis": { title: "Mesafeli Satis Sozlesmesi", text: "Bu sayfa, mock magaza deneyimi icin sozlesme ozetini icerir.", items: ["Satici: ShopTR Elektronik Ticaret A.S.", "Teslimat suresi: Siparis onayindan sonra en fazla 30 gun.", "Cayma hakki: Tuketici, teslimattan itibaren 14 gun icinde cayma hakkina sahiptir."] },
};

function InfoPage({ slug }: { slug: string }) {
    const page = infoPages[slug];
    return <main className="min-h-screen bg-slate-50"><Navbar /><section className="mx-auto max-w-3xl px-4 py-16 sm:px-6"><Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600"><ArrowLeft className="h-4 w-4" /> Ana sayfaya don</Link><div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12"><span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">ShopTR destek</span><h1 className="mt-4 text-4xl font-black text-slate-950">{page.title}</h1><p className="mt-4 text-lg leading-8 text-slate-600">{page.text}</p><div className="mt-10 space-y-4">{page.items.map((item) => <div key={item} className="flex gap-3 border-t border-slate-100 pt-4 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />{item}</div>)}</div></div></section><Footer /></main>;
}

function AccountPage() {
    return <main className="min-h-screen bg-slate-50"><Navbar /><section className="mx-auto max-w-5xl px-4 py-16 sm:px-6"><div className="mb-10"><span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">Mock hesap</span><h1 className="mt-3 text-4xl font-black text-slate-950">Hos geldin, Deniz</h1><p className="mt-2 text-slate-500">Siparislerini ve favorilerini buradan takip edebilirsin.</p></div><div className="grid gap-6 md:grid-cols-3"><div className="rounded-2xl bg-indigo-600 p-6 text-white md:col-span-2"><Package className="h-7 w-7" /><p className="mt-8 text-sm text-indigo-100">Aktif siparis</p><h2 className="mt-1 text-2xl font-bold">#TR-20481</h2><p className="mt-2 text-sm text-indigo-100">Kargoya verilmeye hazirlaniyor</p></div><div className="rounded-2xl border border-slate-200 bg-white p-6"><ShieldCheck className="h-7 w-7 text-emerald-500" /><h2 className="mt-8 font-bold text-slate-900">Guvenli hesap</h2><p className="mt-2 text-sm text-slate-500">Bilgilerin mock ortaminda korunuyor.</p></div></div><div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-bold text-slate-900">Son siparisler</h2><div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm"><span>#TR-20481 · 12 Ekim 2026</span><span className="font-bold text-emerald-600">Hazirlaniyor</span></div></div></section><Footer /></main>;
}

function CartPage() {
    return <main className="min-h-screen bg-slate-50"><Navbar /><section className="mx-auto max-w-5xl px-4 py-16 sm:px-6"><h1 className="text-4xl font-black text-slate-950">Sepetim <span className="text-lg font-medium text-slate-400">(3 urun)</span></h1><div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]"><div className="space-y-4">{["Oversize Pamuklu Tisort", "Kablosuz Kulak Ustu Kulaklik", "Klasik Beyaz Sneaker"].map((item, index) => <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5"><div><p className="font-bold text-slate-900">{item}</p><p className="mt-1 text-sm text-slate-500">Adet: {index === 1 ? 1 : 2}</p></div><span className="font-bold text-slate-900">{[999.8, 2499, 1299.9][index].toLocaleString("tr-TR")} TL</span></div>)}</div><div className="h-fit rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-bold text-slate-900">Siparis ozeti</h2><div className="mt-6 flex justify-between text-slate-500"><span>Ara toplam</span><span>4.798,70 TL</span></div><div className="mt-3 flex justify-between text-slate-500"><span>Kargo</span><span className="text-emerald-600">Ucretsiz</span></div><div className="my-5 border-t border-slate-100 pt-5 flex justify-between text-lg font-black"><span>Toplam</span><span>4.798,70 TL</span></div><button type="button" className="w-full rounded-xl bg-indigo-600 py-3 font-bold text-white hover:bg-indigo-700">Mock siparisi tamamla</button></div></div></section><Footer /></main>;
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    const key = slug.join("/");
    if (categoryPages[key]) return <CatalogPage {...categoryPages[key]} />;
    if (["urunler", "yeni-sezon", "indirim", "indirimler"].includes(key)) return <CatalogPage title={key === "yeni-sezon" ? "Yeni sezon" : key.startsWith("indirim") ? "Firsat urunleri" : "Tum urunler"} description="ShopTR mock katalogunda senin icin secilen urunleri kesfet." accent={key.startsWith("indirim") ? "bg-red-500" : "bg-indigo-600"} />;
    if (key === "hesabim") return <AccountPage />;
    if (key === "sepet") return <CartPage />;
    if (infoPages[key]) return <InfoPage slug={key} />;
    return <CatalogPage title="Kesfet" description="ShopTR katalogundaki urunleri kesfet." />;
}
