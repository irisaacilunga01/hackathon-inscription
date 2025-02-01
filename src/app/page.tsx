
import { Vortex } from "@/components/ui/vortex";
import { getStudents } from "@/lib/actions";
import Link from "next/link";

export default async function VortexDemo() {

  return (
    <div className="w-screen   h-screen overflow-hidden absolute top-0 left-0 right-0 bottom-0 z-50">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Bienvenue sur Hackathon
        </h1>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Une formation complète en informatique pour les entreprises juste pour
          vous ! Avec au programme la pratique des plusieurs exercices et
          l&apos;apprentissage des plusieurs programmes utiles !
        </p>
        <h2 className="text-white text-xl md:text-2xl font-bold text-center mt-8">
          Qui sommes nous ?
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link href={"/about"}>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] animate-bounce mt-8">
              Commençons 🤏
            </button>
          </Link>
        </div>
      </Vortex>
    </div>
  );
}
