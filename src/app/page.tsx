'use client'
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/Main";
import { ReactNode, useState } from "react";
import CatWelcome from "@/components/pages/catWelcome";
export default function Home() {
  const [selectedpage, setSelectedPage] = useState<ReactNode>(<CatWelcome />);
  const handleSelectedPage = (page: ReactNode) => {
    setSelectedPage(page)
  }
  return (
    <div className="bg-black min-h-screen justify-between w-full sm:p-16 p-4 text-dark flex flex-col sm:text-2xl">
      <div className="space-y-20">
        <Header />
        <Main selectedPage={selectedpage} />
      </div>
      <Footer onSelectedPage={handleSelectedPage} />
    </div>
  );
}
