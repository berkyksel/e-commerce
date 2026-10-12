export type Product = {
    id: number;
    name: string;
    category: string;
    categorySlug: string;
    price: number;
    oldPrice?: number;
    rating: number;
    badge?: string;
    color: string;
    image: string;
    description: string;
};

export const products: Product[] = [
    { id: 1, name: "Oversize Pamuklu Tisort", category: "Erkek Giyim", categorySlug: "erkek", price: 499.9, oldPrice: 599.9, rating: 4.8, badge: "Yeni", color: "bg-sky-100", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85", description: "Gunluk stilin icin nefes alan, yumusak dokulu %100 pamuklu tisort." },
    { id: 2, name: "Yuksek Bel Wide Leg Jean", category: "Kadin Giyim", categorySlug: "kadin", price: 899, rating: 4.5, badge: "Cok satan", color: "bg-rose-100", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85", description: "Yuksek belli kesimi ve rahat kalibiyla sezonun favori jean modeli." },
    { id: 3, name: "Kablosuz Kulak Ustu Kulaklik", category: "Elektronik", categorySlug: "elektronik", price: 2499, oldPrice: 2999, rating: 4.9, badge: "-17%", color: "bg-violet-100", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85", description: "Aktif gurultu engelleme ve 32 saate kadar pil omruyle kesintisiz ses." },
    { id: 4, name: "Klasik Beyaz Sneaker", category: "Ayakkabi", categorySlug: "kadin", price: 1299.9, rating: 4.6, badge: "Yeni", color: "bg-amber-100", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85", description: "Her kombine uyum saglayan hafif ve konforlu gunluk sneaker." },
    { id: 5, name: "Minimal Deri Omuz Canta", category: "Kadin Giyim", categorySlug: "kadin", price: 1099, oldPrice: 1399, rating: 4.7, badge: "Firsat", color: "bg-orange-100", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85", description: "Gun icindeki tum esyalarin icin duzenli bolmeli, zamansiz tasarim." },
    { id: 6, name: "Smartwatch Active 2", category: "Elektronik", categorySlug: "elektronik", price: 3199, rating: 4.4, badge: "Yeni", color: "bg-emerald-100", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85", description: "Saglik takibi, bildirimler ve spor modlari tek bir akilli saatte." },
    { id: 7, name: "Oversize Keten Gomlek", category: "Erkek Giyim", categorySlug: "erkek", price: 749, oldPrice: 899, rating: 4.6, badge: "-16%", color: "bg-lime-100", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85", description: "Yaz sicaklarinda serin tutan rahat kesimli keten gomlek." },
    { id: 8, name: "Seramik Aroma Difuzoru", category: "Ev & Yasam", categorySlug: "ev-yasam", price: 679, rating: 4.8, badge: "Cok satan", color: "bg-pink-100", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85", description: "Yasamina sakinlik katan sessiz calisma ve yumusak isik deneyimi." },
    { id: 9, name: "Nemlendirici Yuz Serumu", category: "Kozmetik", categorySlug: "kozmetik", price: 589, oldPrice: 699, rating: 4.7, badge: "Yeni", color: "bg-fuchsia-100", image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=85", description: "Gunluk bakim rutinine uygun, hafif dokulu nemlendirici serum." },
];

export const formatPrice = (price: number) => `${price.toLocaleString("tr-TR", { minimumFractionDigits: 2 })} TL`;

export const getProduct = (id: string) => products.find((product) => product.id === Number(id));
