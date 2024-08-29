import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Steeve MOMBRUN - Portfolio",
    description: "Portfolio de Steeve MOMBRUN, développeur web à Lyon",
    openGraph: {
        title: "Steeve MOMBRUN - Portfolio",
        description: "Portfolio de Steeve MOMBRUN, développeur web à Lyon",
        url: "https://portfolio-steeve-mombrun.vercel.app/",
        siteName: "Steeve MOMBRUN - Portfolio",
        locale: "fr_FR",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
