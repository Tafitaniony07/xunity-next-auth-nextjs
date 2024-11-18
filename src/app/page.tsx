"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image.js";

export default function Home() {
	const { data: session } = useSession();
	if (session) {
		console.log(session);
	}

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#001721] from-10% via-[#002a3c] via-50% to-[#001721] to-90% ">
			<h1 className="text-6xl uppercase font-black text-yellow-400/75 font-[family-name:var(--font-geist-sans)]">
				XUnity Next Auth
			</h1>
			<p className="text-white font-[family-name:var(--font-geist-sans)] font-thin my-3">
				Bienvenue {session?.user?.name}, nous sommes ravis de vous accueillir sur notre plateforme.
			</p>
			<div className="flex items-center justify-center gap-3 mt-5">
				<button
					onClick={() => signIn("google")}
					className="flex items-center space-x-2 px-4 py-3 bg-slate-400/5 rounded-md hover:bg-yellow-400/5 transition hover:scale-105"
				>
					<picture>
						<img src="/google.png" alt="google" className="w-5 h-5" />
					</picture>
					<span className="text-white font-medium group-hover:text-white">Se connecter avec Google</span>
				</button>
				<button
					onClick={() => signIn("github")}
					className="flex items-center space-x-2 px-4 py-3 bg-slate-400/5 rounded-md hover:bg-yellow-400/5 transition hover:scale-105"
				>
					<Image src="/github-2.png" alt="github" width={20} height={20} />
					<span className="text-white font-medium group-hover:text-white">Se connecter avec Github</span>
				</button>
			</div>
		</div>
	);
}
