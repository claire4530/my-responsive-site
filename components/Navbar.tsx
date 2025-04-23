"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // 用來獲取當前路徑

const navItems = [
    { label: "首頁", path: "/" },
    { label: "關於我", path: "/about" },
    { label: "作品集", path: "/portfolio" },
    { label: "聯絡我", path: "/contact" },
  ];

  
export default function Navbar() {
    const pathname = usePathname();
    
    return (
        <main >
            <nav className="bg-gray-200 p-8 flex justify-between items-center sticky top-0 z-10 shadow-lg">
                <div className="text-xl font-bold">Claire&apos;s Site</div>
                <ul className="hidden md:flex space-x-6">
                    {navItems.map(({label, path}, index) => (
                        <li key={index}>
                            <Link 
                                href={path}
                                className={`relative group text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
                                    pathname === path ? "text-blue-600 font-semibold" : ""
                                  }`}
                                >
                                {label}
                                <span
                                    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"
                                ></span>
                            </Link >
                        </li>
                    ))}
                </ul>
            </nav>
        </main>
    );
}
