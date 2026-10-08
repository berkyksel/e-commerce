"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
    const[isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* 1. Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-3xl font-extrabold text-indigo-600 tracking-tight">
                            ShopTR
                        </Link>
                    </div>

                    {/* 2. Masaüstü Menü ve Arama Çubuğu */}
                    <div className="hidden md:flex flex-1 items-center justify-between ml-10">

                        {/* Kategoriler */}
                        <div className="flex space-x-8">
                            <Link href="/kadin" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Kadın</Link>
                            <Link href="/erkek" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Erkek</Link>
                            <Link href="/elektronik" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Elektronik</Link>
                            <Link href="/indirim" className="text-red-500 hover:text-red-600 font-medium transition-colors">İndirim</Link>
                        </div>

                        {/* Arama Çubuğu */}
                        <div className="flex-1 max-w-lg mx-8">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
                                    placeholder="Ürün, kategori veya marka ara..."
                                />
                            </div>
                        </div>

                        {/* İkonlar (Hesabım & Sepet) */}
                        <div className="flex items-center space-x-6">
                            <Link href="/hesabim" className="text-gray-600 hover:text-indigo-600 flex flex-col items-center transition-colors">
                                <User className="h-6 w-6" />
                                <span className="text-[11px] font-medium mt-1">Hesabım</span>
                            </Link>

                            <Link href="/sepet" className="text-gray-600 hover:text-indigo-600 flex flex-col items-center relative transition-colors">
                                <div className="relative">
                                    <ShoppingCart className="h-6 w-6" />
                                    {/* Sepet Bildirim Sayacı */}
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                                        3
                                    </span>
                                </div>
                                <span className="text-[11px] font-medium mt-1">Sepetim</span>
                            </Link>
                        </div>
                    </div>

                    {/* 3. Mobil Menü Butonu (Hamburger Menü) */}
                    <div className="flex items-center md:hidden space-x-4">
                        {/* Mobilde sepeti her zaman göster */}
                        <Link href="/sepet" className="text-gray-600 relative">
                            <ShoppingCart className="h-6 w-6" />
                            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                3
                            </span>
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. Mobil Açılır Menü */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    {/* Mobil Arama */}
                    <div className="p-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Ara..."
                            />
                        </div>
                    </div>

                    {/* Mobil Linkler */}
                    <div className="px-4 pb-4 space-y-1">
                        <Link href="/kadin" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Kadın</Link>
                        <Link href="/erkek" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Erkek</Link>
                        <Link href="/elektronik" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Elektronik</Link>
                        <Link href="/indirim" className="block px-3 py-3 rounded-md text-base font-medium text-red-500 hover:text-red-600 hover:bg-red-50">İndirim</Link>
                    </div>

                    {/* Mobil Alt Menü */}
                    <div className="pt-4 pb-6 border-t border-gray-100 flex justify-center">
                        <Link href="/hesabim" className="flex items-center text-gray-600 hover:text-indigo-600 font-medium px-4">
                            <User className="h-6 w-6 mr-3" />
                            <span>Hesabım & Siparişler</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}