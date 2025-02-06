import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001"
  ),
  title: {
    default: "ICON.",
    template: "%s | ICON.",
  },
  description:
    "Create beautiful designs for websites, apps, and more, directly in your browser.",
  icons: {
    icon: "/icons/ICON..svg",
    apple: "/icons/ICON..svg",
    shortcut: "/icons/ICON..svg",
  },
  openGraph: {
    title: "ICON.",
    description:
      "Create beautiful designs for websites, apps, and more, directly in your browser.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
