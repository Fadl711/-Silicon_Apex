import type { Metadata } from "next";
import "./globals.css";
import "./techbelt.css";
import "./hero.css";
import Providers from "./Providers";



export const metadata: Metadata = {
  title: "Silicon Apex — هندسة برمجية من الجيل القادم",
  description: "شركة Silicon Apex لتطوير الويب وتطبيقات الجوال والحلول الرقمية. نهندس منتجات رقمية تصنع الفرق.",
  keywords: ["web development", "mobile apps", "UI/UX design", "digital transformation", "Silicon Apex", "Saudi Arabia"],
  openGraph: {
    title: "Silicon Apex — Next-Gen Software Engineering",
    description: "We build systems your users love and your business depends on.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,600;12..96,700;12..96,800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600&family=Cairo:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
