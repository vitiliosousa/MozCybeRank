'use client'
import { ReactNode, useState } from "react"
import CatWelcome from "./pages/catWelcome";
import Rank from "./pages/rank";
import Team from "./pages/team";

interface FooterProps{
    onSelectedPage : (component: ReactNode) => void
}

export default function Footer({onSelectedPage}: FooterProps) {
    const [selectedPage, setSelectedPage] = useState<string>("cat welcome.txt");
    const pages = [
        { name: "cat welcome.txt", component: <CatWelcome /> },
        { name: "./rank.sh", component: <Rank /> },
        { name: "./team.sh", component: <Team /> }
      ]
      const handleClick = (pageName: string, component: ReactNode) => {
        setSelectedPage(pageName);
        onSelectedPage(component); 
    } 
    return (
        <footer className="w-full flex sm:space-x-20 space-x-4">
            {pages.map((page) => (
                <div key={page.name} onClick={()=> handleClick(page.name, page.component)} className={ `cursor-pointer hover:text-light ${selectedPage===page.name ? "text-light" : "text-dark"}`} >
                    <p>{'.'.repeat(page.name.length)}</p>
                    {page.name}
                </div>   
            ))}
        </footer>
    )
}