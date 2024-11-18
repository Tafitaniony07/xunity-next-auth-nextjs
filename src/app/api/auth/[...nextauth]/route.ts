// Import des options d'authentification depuis le fichier authOptions
import { authOptions } from "@/lib/authOptions";
// Import du module NextAuth
import NextAuth from "next-auth";

// Création du gestionnaire d'authentification avec les options configurées
const handler = NextAuth(authOptions);

// Export du gestionnaire pour les requêtes GET et POST
export { handler as GET, handler as POST };
