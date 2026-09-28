import { Link } from "react-router-dom";

export default function Attaque() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Attaque</h1>
      <Link to="/" className="text-blue-500 underline mt-4 block">
        Retour à l'accueil
      </Link>
    </div>
  );
}