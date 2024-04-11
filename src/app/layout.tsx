import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Services } from "@/components/navigation-services";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Povolo Produções",
  description: "Para animar suas festas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-zinc-100`}>
        <nav className="flex justify-around items-center fixed z-10 w-full bg-slate-600">
          <div className="flex gap-1">
            <Image src="/logo.png" width={50} height={50} alt="" />
            <div className="flex flex-col"></div>
          </div>
          <div className="flex gap-6 items-center text-xl">
            <Link href="/" className="hover:underline underline-offset-8 ">
              Home
            </Link>
            <Link href="/about" className="hover:underline underline-offset-8 ">
              Sobre
            </Link>
            <Services />
            <a
              href="#depoimentos"
              className="hover:underline underline-offset-8 "
            >
              Depoimentos
            </a>
            <a href="" className="hover:underline underline-offset-8 ">
              Contato
            </a>
          </div>
        </nav>
        {children}
        <footer>
          <p className="text-center">
            2024 &#169; Todos os direitos reservados a Povolo Produçoes
          </p>
        </footer>
      </body>
    </html>
  );
}
