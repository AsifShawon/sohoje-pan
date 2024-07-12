// src/app/RootClientLayout.tsx
"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isChecked ? 'light' : 'dark'
    );
  }, [isChecked]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar isChecked={isChecked} onToggle={handleToggle} />
        {children}
      </body>
    </html>
  );
}
