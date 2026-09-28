

export default function Bouton({ name }: { name: string }) {

    return (
        <div className="rounded-xl bg-yellow-400 w-100 h-50">
            <h1>Je suis {name}</h1>
        </div>
    )
}