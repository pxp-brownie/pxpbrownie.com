import type { Metadata } from "next";
import { Inter, Karantina, B612_Mono, Mynerve } from "next/font/google";
import "./globals.css";
import CalEmbed from "@/components/CalEmbed";

const inter = Inter({ subsets: ["latin"] });
const karantina = Karantina({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: '--font-karantina'
});
const b612Mono = B612_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: '--font-b612-mono'
});
const mynerve = Mynerve({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-mynerve'
});

export const metadata: Metadata = {
  title: "Blog",
  description: "A blog project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${karantina.variable} ${b612Mono.variable} ${mynerve.variable}`}>
        {children}
        <CalEmbed />
      </body>
    </html>
  );
}
