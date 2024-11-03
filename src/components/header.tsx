import Image from "next/image";
import logo from "../../public/logo.svg"

export default function Header() {
    return (
        <header className="w-full flex justify-between">
            <Image src={logo} alt="logo" className="w-40 sm:w-72"/>
            <h1 className="text-light sm:text-3xl text-base">Portal V1</h1>
        </header>
    )
}