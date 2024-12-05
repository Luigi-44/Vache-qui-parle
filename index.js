// Importation des modules
import dotenv from 'dotenv';
import cowsay from 'cowsay';

// Charger les variables d'environnement
dotenv.config(); // Pas de require ici, tout est avec import

// Récupérer les variables d'environnement
const name = process.env.NAME;
const campus = process.env.CAMPUS;

// Utiliser le module cowsay
console.log(
cowsay.say({
    text: `Hello, My name is ${name} , and i work at ${campus}`,
})
);