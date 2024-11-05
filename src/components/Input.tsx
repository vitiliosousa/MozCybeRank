interface InputProps {
    label: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add this line
}

export default function Input({ label, type = 'text', onChange }: InputProps) {
    return (
        <div className="flex flex-col">
            <label className="text-light">{label}</label>
            <input
                type={type}
                onChange={onChange} // Ensure this is passed down
                className="border-2 px-2 border-dark border-dashed bg-transparent outline-none"
            />
        </div>
    );
}
