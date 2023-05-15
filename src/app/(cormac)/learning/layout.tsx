import "../../globals.css";
import Footer from "../components/Footer"
import Header from "../components/Header";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learning Tailwind",
  description: "Explore Tailwind CSS 3",
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header></Header>
      {children}
      <Footer></Footer>
    </section>
  );
}
