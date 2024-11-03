import Button from "@/components/Button";
import Header from "@/components/header";
import Input from "@/components/Input";

export default function TeamRegistration() {
    return (
        <div className="bg-black min-h-screen w-full sm:p-16 p-4 text-dark flex flex-col sm:text-2xl gap-10">
            <Header />
            <div className="space-y-2 sm:w-96">
                <h1 className="sm:text-3xl text-light">Team Registration</h1>
                <Input label="Team Name" />
                <Input label="Team Leader" />
                <Input label="Team Member" />
                <Input label="Team Member" />
                <Button text="Submit"/>
            </div>
        </div>
    )
}