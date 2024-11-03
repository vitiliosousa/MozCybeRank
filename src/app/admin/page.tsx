'use client'
import Button from "@/components/Button";
import Header from "@/components/header";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";

export default function Admin() {
    const router = useRouter()
    const rank =() => {
        router.push('/admin/rank')
    }
    
    return (
        <div className="bg-black min-h-screen w-full sm:p-16 p-4 text-dark flex flex-col sm:text-2xl gap-10">
            <Header />
            <div className="space-y-2 sm:w-96">
                <h1 className="sm:text-3xl text-light">Admin</h1>
                <Input label="Username"/>
                <Input label="Password" type="password"/>
                <Button text="Submit" onClick={rank}/>
            </div>
        </div>
    )
}