import Link from "next/link"

export default function Team() {
    return(
        <div>
            <p>
                Para fazer parte do MozCybeRank, o líder da equipe deve criar um time na plataforma notforms seguindo o link em <Link href={"/team-registration"} className="text-light underline">./registar_equipe.sh</Link>, adicionando dois membros para formar um trio. Este trio será responsável por representar a equipe nas maratonas de CTFs que acontecem durante o HackOnWednesdays. Prepare sua equipe, mostre suas habilidades e lute pelo topo do ranking da comunidade MozCyber!
            </p>
        </div>
    )
}