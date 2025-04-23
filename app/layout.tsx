import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar"; // 注意這是從 components 資料夾引入的

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

