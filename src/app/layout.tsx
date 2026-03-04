import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "HackHustle | IEEE 24-Hour Hackathon",
  description: "Code. Compete. Conquer. The ultimate 24-hour innovation marathon.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "HackHustle",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05010a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      <body className={`${spaceGrotesk.className} antialiased bg-[#05010a] text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-x-hidden`}>

        {/* Visual Noise Overlay (The "Hacker" Texture) */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Dynamic Background Glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
          <div className="absolute top-[60%] -right-[5%] w-[30%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
        </div>

        <main className="relative z-10 min-h-screen flex flex-col">
          {/* You can add a Navbar component here */}
          {children}
          {/* You can add a Footer component here */}
        </main>

      </body>
    </html>
  );
}