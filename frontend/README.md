# ShopTR

ShopTR, moda, elektronik ve günlük ihtiyaç ürünlerini modern bir e-ticaret vitrini üzerinden sunan frontend odaklı bir web arayüzü prototipidir.

Next.js App Router, React, TypeScript ve Tailwind CSS kullanılarak geliştirilen proje; responsive tasarım, component tabanlı yapı ve modern kullanıcı deneyimine odaklanmaktadır.

## Özellikler

- Responsive navigasyon ve mobil menü
- Ürün, kategori ve marka araması için arama alanı
- Sezon kampanyalarını tanıtan hero bölümü
- Öne çıkan ürünler vitrini
- Ürün fiyatı, indirim, puan ve yeni ürün etiketleri
- Bülten aboneliği ve iletişim bilgilerini içeren footer
- Component tabanlı frontend mimarisi
- Responsive ve modern kullanıcı arayüzü

> Ürünler, `FeaturedProducts` bileşeni içerisinde bulunan örnek veriler üzerinden gösterilmektedir. Ürün görselleri ve kategori bağlantıları prototip amaçlı placeholder olarak kullanılmaktadır.

## Teknolojiler

| Teknoloji | Kullanım |
|---|---|
| **Next.js 16** | React tabanlı web uygulaması ve App Router |
| **React 19** | Component tabanlı kullanıcı arayüzü |
| **TypeScript** | Tip güvenliği |
| **Tailwind CSS 4** | Responsive ve modern arayüz tasarımı |
| **shadcn/ui** | UI bileşenleri |
| **Lucide React** | Arayüz ikonları |
| **React Icons** | Ek ikon desteği |
| **ESLint** | Kod kalitesi ve lint kontrolleri |

## Proje Yapısı

```text
app/
├── globals.css             # Global stiller ve Tailwind tema ayarları
├── layout.tsx              # Uygulama layout'u ve metadata
└── page.tsx                # Ana sayfa bileşen kompozisyonu

components/
└── ui/
    ├── Navbar.tsx          # Masaüstü ve mobil navigasyon
    ├── Hero.tsx            # Kampanya ve ana çağrı alanı
    ├── FeaturedProducts.tsx # Örnek ürün vitrini
    └── Footer.tsx          # Bülten, bağlantılar ve iletişim alanı

lib/
└── utils.ts                # Ortak yardımcı fonksiyonlar

public/
└── ...                     # Statik varlıklar
```

## Mimari

ShopTR, Next.js App Router yapısı üzerine kurulmuş component tabanlı bir frontend mimarisine sahiptir.

Ana sayfa `app/page.tsx` üzerinden oluşturulurken, navigasyon, hero, ürün vitrini ve footer gibi bölümler bağımsız React bileşenleri olarak `components/ui` altında yapılandırılmıştır.

Tailwind CSS ile responsive tasarım sağlanmış ve farklı ekran boyutlarına uyumlu bir kullanıcı arayüzü oluşturulmuştur.

## Responsive