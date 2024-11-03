'use client'

import { ReactNode } from "react"

interface MainProps{
    selectedPage: ReactNode
}

export default function Main({selectedPage}:MainProps) {
    return (
        <main className="w-full">
            {selectedPage}
        </main>
    )
}