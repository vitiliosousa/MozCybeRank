interface InputProps{
    label: string
    type?: string
}

export default function Input({label, type}: InputProps) {
    return(
        <div className="flex flex-col">
            <label htmlFor="" className="text-light">{label}</label>
            <input type={type} className="border-2 px-2 border-dark border-dashed bg-transparent outline-none"/>
        </div>
    )
}