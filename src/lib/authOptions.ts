// Import des modules nécessaires pour l'authentification
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

// Configuration des options d'authentification
export const authOptions: NextAuthOptions = {
	// Liste des fournisseurs d'authentification
	providers: [
		// Configuration du provider Github
		GithubProvider({
			clientId: process.env.GITHUB_ID as string, // ID client Github depuis les variables d'environnement
			clientSecret: process.env.GITHUB_SECRET as string, // Secret client Github depuis les variables d'environnement
		}),
		// Configuration du provider Google
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string, // ID client Google depuis les variables d'environnement
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, // Secret client Google depuis les variables d'environnement
		}),
	],
};
