import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

// Body / UI - Open Sans, an even, highly legible humanist sans.
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Display headings - Merriweather, a sturdy, confident text serif.
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dei Gratia Medical Services · Trusted care, close to home. Tamale",
  description:
    "Modern medicine and compassionate care in Tamale, Northern Region. Maternal & child health, 24/7 emergency care, laboratory, imaging and more. NHIS accepted.",
  icons: {
    // The Dei Gratia seal as the favicon. A white version is served to dark-
    // theme browser tabs so the mark stays visible; the colour seal is the
    // fallback (visible on the usual light tab bar) for browsers that ignore
    // the prefers-color-scheme media query on icons.
    icon: [
      { url: "/icon-dark.png", type: "image/png", sizes: "64x64", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-light.png", type: "image/png", sizes: "64x64", media: "(prefers-color-scheme: light)" },
      { url: "/icon-light.png", type: "image/png", sizes: "64x64" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Marks JS as available before first paint; scroll-reveal styles
            in globals.css only hide content beneath the `js` class. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
