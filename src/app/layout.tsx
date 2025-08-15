import type { Metadata } from "next";
import { Archivo_Black, Montserrat } from 'next/font/google'
import Navbar from "../components/Navbar";
import "./globals.css";

export const archivoBlack = Archivo_Black({
  weight:'400',
  subsets:['latin'],
})

export const montserrat = Montserrat({
  weight: ['700','400'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Baby Store | Todo para tu Bebé en Quilmes",
  description: "En Baby Store podés encontrar todo para tu Bebé, Indumentaria e Insumos para el cuidado de tu bebe en Quilmes, Argentina. Hacemos Envíos, Consultános!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <body className="grid align-top justify-center text-center text-[var(--secundary)] py-2 bg-[var(--primary)] dark:bg-[var(--dark)] dark:text-[var(--dark)] transition-colors duration-300" >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
