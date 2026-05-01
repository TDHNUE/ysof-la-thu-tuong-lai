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
  title: "Bức Tường Tương Lai — Hãy Để Lại Ký Ức Của Bạn",
  description:
    "Một bức tường kỹ thuật số nơi bạn có thể để lại những dòng ký ức, lời chúc và hy vọng cho YSOF trong tương lai. Viết một note và dán lên tường ngay!",
  keywords: ["tương lai", "ký ức", "note", "bức tường", "YSOF", "kỷ niệm"],
  authors: [{ name: "YSOF" }],
  creator: "YSOF",
  publisher: "YSOF",
  robots: "index, follow",
  openGraph: {
    title: "Bức Tường Tương Lai — Lưu Giữ Ký Ức YSOF",
    description:
      "Hãy để lại một mảnh ký ức cho YSOF trong tương lai 💙",
    url: "https://ysof-letter.vercel.app", // Placeholder, user can update
    siteName: "Bức Tường Tương Lai",
    images: [
      {
        url: "/z7780006893195_384da50a3eec00ff2134e8b69700e2c0.jpg",
        width: 1200,
        height: 630,
        alt: "Bức Tường Tương Lai YSOF",
      },
    ],
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bức Tường Tương Lai — Lưu Giữ Ký Ức YSOF",
    description: "Hãy để lại một mảnh ký ức cho YSOF trong tương lai 💙",
    images: ["/z7780006893195_384da50a3eec00ff2134e8b69700e2c0.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        {/* Background Image */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <Image
            src="/z7780006893195_384da50a3eec00ff2134e8b69700e2c0.jpg"
            alt="Background"
            fill
            quality={100}
            priority
            className="object-cover object-[center_top] md:object-left-top w-full h-full"
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
