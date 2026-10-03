import type { Metadata } from "next";
import "./globals.css";
import MenuNav from "@/components/menu";
import MenuLg from "@/components/menuLg";

export const metadata: Metadata = {
  title: "Streak Habits App",
  description: "habits app to track your streak everyday",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="text-text">
      <body className=" flex flex-col font-serif bg-cover bg-center
      min-h-[calc(100dvh-6rem)] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
        <div className="p-3 lg:px-20 sticky flex justify-between bg-primary text-text ">
            <div className="uppercase font-bold lg:text-3xl">Best <span className="text-text hover:text-gray-300 transition">Streak</span></div>
            <div className="sm:hidden"><MenuNav/></div>
            <div className="hidden sm:flex"><MenuLg/></div>
        </div>
        {children}
        </body>
    </html>
  );
}
