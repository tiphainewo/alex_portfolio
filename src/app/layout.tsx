import type { Metadata } from "next";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Lexend } from "next/font/google";

export const metadata: Metadata = {
  title: "Xeleph",
  description:
    "Hi, I'm Xeleph ! I'm a pixel artist that specializes in game art and environment",
};

const lexend = Lexend({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lexend.className}>
      <body>
        <div id="root">
          <div className="grid grid-rows-[auto_minmax(0px,_1fr)_auto] min-h-screen h-auto p-4 pb-0 max-w-[100rem] m-auto overflow-hidden 2xl:overflow-visible 4xl:max-w-[120rem]">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
