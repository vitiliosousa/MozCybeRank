interface ButtonProps {
    text: string
    onClick?:() => void
}

export default function Button({text, onClick}:ButtonProps) {
    return (
        <button type="submit" className="border-2 border-dashed border-light px-4 hover:bg-light hover:text-black" onClick={onClick}>{text}</button>
    )
}