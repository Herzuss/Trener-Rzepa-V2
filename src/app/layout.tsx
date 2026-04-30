import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Anton, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: {
    default: "Trener Rzepa | Trening Personalny i Dieta",
    template: "%s | Trener Rzepa",
  },
  description: "Zmień swoją sylwetkę z Trenerem Rzepą. Indywidualne plany treningowe, plany dietetyczne i wsparcie w drodze do wymarzonej formy.",
  keywords: ["trener personalny", "trening", "dieta", "metamorfoza", "trening online", "trener"],
  authors: [{ name: "Trener Rzepa" }],
  creator: "Trener Rzepa",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://rzepatrener.pl", 
    title: "Trener Rzepa | Trening Personalny i Dieta",
    description: "Zmień swoją sylwetkę z Trenerem Rzepą. Indywidualne plany treningowe, plany dietetyczne i wsparcie.",
    siteName: "Trener Rzepa",
    images: [
      {
        url: "/wizytowka.png",
        width: 1200,
        height: 630,
        alt: "Trener Rzepa | Trening Personalny i Dieta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trener Rzepa | Trening Personalny i Dieta",
    description: "Zmień swoją sylwetkę z Trenerem Rzepą. Indywidualne plany treningowe, plany dietetyczne i wsparcie w drodze do wymarzonej formy.",
    images: ["/wizytowka.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={cn("font-sans", geist.variable, "scroll-smooth")}>
      <body
        className={`${manrope.variable} ${anton.variable} bg-zinc-950 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
