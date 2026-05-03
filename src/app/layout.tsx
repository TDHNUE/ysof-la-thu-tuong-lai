import type { Metadata, Viewport } from "next";
import { Quicksand, Caveat } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";
import Image from "next/image";

const quicksand = Quicksand({
  subsets: ["latin", "vietnamese"],
  variable: "--font-quicksand",
});

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-caveat",
});

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ysof-letter.vercel.app"),
  title: {
    default: "YSOF — Ký Ức Trong Tương Lai",
    template: "%s | YSOF Ký Ức Trong Tương Lai",
  },
  description:
    "Nơi lưu giữ những kỷ niệm, lời chúc và hy vọng gửi đến YSOF trong tương lai. Hãy tự tay viết một chiếc note xinh xắn và dán lên bức tường kỹ thuật số của chúng mình nhé!",
  keywords: ["YSOF", "tương lai", "ký ức", "note", "bức tường", "kỷ niệm", "lời chúc", "digital wall", "leave a note"],
  authors: [{ name: "YSOF", url: "https://ysof-letter.vercel.app" }],
  creator: "YSOF",
  publisher: "YSOF",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "YSOF — Ký Ức Trong Tương Lai",
    description:
      "Nơi lưu giữ những kỷ niệm, lời chúc và hy vọng gửi đến YSOF trong tương lai. Dán một chiếc note lên tường ngay! 💙",
    url: "https://ysof-letter.vercel.app",
    siteName: "YSOF Ký Ức Trong Tương Lai",
    images: [
      {
        url: "/z7780006893195_384da50a3eec00ff2134e8b69700e2c0.jpg",
        width: 1200,
        height: 630,
        alt: "Giao diện Bức Tường Tương Lai YSOF",
      },
    ],
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "YSOF — Ký Ức Trong Tương Lai",
    description: "Nơi lưu giữ những kỷ niệm và lời chúc gửi đến YSOF trong tương lai. Dán một chiếc note lên tường ngay! 💙",
    creator: "@ysof",
    images: ["/z7780006893195_384da50a3eec00ff2134e8b69700e2c0.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://ysof-letter.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`h-full antialiased ${quicksand.variable} ${caveat.variable}`}>
      <body className="min-h-full flex flex-col">
        {/* Desktop Background Image */}
        <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
          <Image
            src="/z7780006893195_384da50a3eec00ff2134e8b69700e2c0.jpg"
            alt="Desktop Background"
            fill
            quality={100}
            priority
            className="object-cover object-[center_top] md:object-left-top w-full h-full"
          />
        </div>

        {/* Mobile Background Image */}
        <div className="fixed inset-0 pointer-events-none z-0 block md:hidden">
          <Image
            src="/1.svg"
            alt="Mobile Background"
            fill
            quality={100}
            priority
            className="object-cover object-left-top w-full h-full"
          />
        </div>
        
        {/* Main content layer */}
        <ToastProvider>
          <div className="relative z-10 flex flex-col flex-1">
            {children}
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
