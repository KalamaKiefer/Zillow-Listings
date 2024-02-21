import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Zillow Listings",
    description: "A web app that pulls in the latest Zillow listings.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(inter.className, "bg-black")}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
