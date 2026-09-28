import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors()); // Autorise les requêtes cross-origin (CORS)
app.use(express.json()); // Permet de parser le corps des requêtes POST/PUT en JSON

// Route de test GET
app.get("/api/message", (req: Request, res: Response) => {
  res.json({ message: "Hello depuis le backend Node !" });
});

// Exemple de route POST
app.post("/api/data", (req: Request, res: Response) => {
  const body = req.body;
  console.log("Données reçues du front :", body);

  res.status(201).json({
    status: "success",
    received: body,
  });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});