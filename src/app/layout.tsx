import Link from "next/link";
import "./globals.css";
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});
//https://prismic.io/blog/nextjs-fonts#using-nextfont-with-tailwind-css-and-a-css-variable

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <header className="bg-cruiseBlue h-24 rounded-b-lg flex items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="My Kind Of Cruise Logo"
              height={100}
              width={200}
              className="ml-32"
            />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
