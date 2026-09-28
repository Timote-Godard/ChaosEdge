import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Accueil</h1>
      <Link to="/attaque" className="text-blue-500 underline mt-4 block">
        Aller vers l'Attaque
      </Link>
      <Link to="/radar" className="text-blue-500 underline mt-4 block">
        Aller vers le Radar
      </Link>
    </div>
  );
}