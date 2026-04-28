import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alpha Apex Advisory Group | Strategic Advisory & Governance",
  description:
    "We guide organizations to their highest point of performance through strategy, clarity, and execution discipline. Strategic advisory, governance, and long-term growth solutions.",
  keywords: [
    "advisory group",
    "strategic advisory",
    "governance",
    "business transformation",
    "leadership guidance",
    "operational excellence",
    "corporate strategy",
  ],
  openGraph: {
    title: "Alpha Apex Advisory Group",
    description:
      "We guide organizations to their highest point of performance through strategy, clarity, and execution discipline.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        {/* Clash Grotesk — Primary Brand Typeface */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
