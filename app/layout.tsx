import type { Metadata } from "next";
import "./globals.css";
import MenuNav from "@/components/menu";

export const metadata: Metadata = {
  title: "Streak Habits App",
  description: "habits app to track your streak everyday",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="text-text">
      <body className=" flex flex-col font-serif bg-[url(/background.avif)] bg-cover bg-center
      min-h-[calc(100dvh-6rem)]">
        <div className="p-3 sticky flex justify-between bg-primary text-text ">
            <div className="uppercase font-bold">Best <span className="text-text">Streak</span></div>
            <div><MenuNav/></div>
        </div>
        {children}
        </body>
    </html>
  );
}
