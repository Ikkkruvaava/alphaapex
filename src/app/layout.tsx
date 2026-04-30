import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SplashCursor from "@/components/ui/SplashCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
      <head>
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
          <Footer />
          <SplashCursor
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.2}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
            SHADING
            RAINBOW_MODE={false}
            COLOR="#C8963E"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
