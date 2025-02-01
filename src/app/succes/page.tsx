"use client";

import { Icons } from "@/components/icons";
import { getStudents } from "@/lib/actions";
import { Student } from "@/lib/types";
import { useEffect, useState } from "react";

const StudentsPage = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [jour, setJour] = useState<string | number>(0);
  const [heure, setHeure] = useState<string | number>(0);
  const [minute, setMinute] = useState<string | number>(0);
  const [seconde, setSeconde] = useState<string | number>(0);
  const countDownEndDate = "February 10, 2025 18:00:00";
  useEffect(() => {
    // Change the value of countDownEndDate to the day you want to end the count down

    let endDate = new Date(countDownEndDate).getTime();

    let x = setInterval(function () {
      let timeNow = new Date().getTime();

      let timeLeft = endDate - timeNow;

      let days: string | number = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      let hours: string | number = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes: string | number = Math.floor(
        (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds: string | number = Math.floor(
        (timeLeft % (1000 * 60)) / 1000
      );

      if (days < 10) {
        days = "0" + days;
      }

      if (hours < 10) {
        hours = "0" + hours;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if (timeLeft > 0) {
        setJour(days);
        setHeure(hours);
        setMinute(minutes);
        setSeconde(seconds);
      }
    }, 1000);
    const fetchStudents = async () => {
      try {
        const data = await getStudents(); // Appel à l'action pour récupérer les étudiants
        setStudents(data); // Mise à jour de l'état avec les étudiants récupérés
      } catch (error) {
        console.error("Erreur lors de la récupération des étudiants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []); // Le tableau vide [] signifie que cette fonction s'exécute une seule fois au montage

  if (loading) {
    return (
      <div className="w-screen h-screen overflow-auto bg-slate-900 items-center flex justify-center text-center">
        <h1 className="font-bold text-5xl font-Comforter-Brush text-amber-500 grow text-center animate-ping">
          😎 Hackathon.
        </h1>
      </div>
    );
  }

  return (
    <header className="w-full bg-[url('/leaves.jpg')] bg-cover bg-bottom">
      <div className="w-full min-h-screen md:w-1/2 bg-gradient-to-b from-gray-900/90 to-gray-900/95 p-10 flex">
        <div className="w-full text-center my-auto">
          <h1 className="font-bold text-5xl font-Comforter-Brush text-amber-500 mb-10 md:text-right">
            😎 Hackathon.
          </h1>
          <h6 className="font-Montserrat font-bold uppercase text-4xl md:text-5xl lg:text-6xl mb-14 md:-mr-20 text-white md:text-right">
            Coming <span className="text-white/70 md:-mr-20">soon</span>
          </h6>

          {/* <!-- Count down --> */}
          <div className="w-full text-left flex mb-10">
            <ul className="w-full flex place-content-center md:place-content-end gap-5 mx-auto text-gray-50">
              <li>
                <div className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24">
                  {jour}
                </div>
                <p className="text-center text-xs mt-2">Jour(s)</p>
              </li>

              <li>
                <div className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24">
                  {heure}
                </div>
                <p className="text-center text-xs mt-2">Heure(s)</p>
              </li>

              <li>
                <div className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24">
                  {minute}
                </div>
                <p className="text-center text-xs mt-2">Minute(s)</p>
              </li>

              <li>
                <div className="font-bold text-white rounded-full border-dotted border-gray-700 border-4 flex items-center justify-center text-2xl lg:text-4xl h-16 lg:h-24 w-16 lg:w-24">
                  {seconde}
                </div>
                <p className="text-center text-xs mt-2">Séconde(s)</p>
              </li>
            </ul>
          </div>

          {/* <!-- Content --> */}
          <p className="text-base mb-10 text-gray-200 md:text-right">
            Très bientôt le site officiel sera dispobile pour la formation !.
            Entre temps finalisé votre inscription pour permettre une bonne
            organisation. <br /> Réjoinez le groupe whatsapp en cliquant sur le
            logo ci-dessous !{" "}
          </p>
          {/* 
        <!-- Social media --> */}
          <div className="w-full text-left flex">
            <ul className="w-full flex place-content-center md:place-content-end gap-10 mx-auto text-gray-500">
              <li>
                <a
                  href="https://chat.whatsapp.com/LTM2mahfxDs26uLIrek2CI"
                  className="text-lg hover:text-amber-500 flex gap-2"
                >
                  <Icons.whatsapp className="size-8" /> Inscrit :{" "}
                  <span className="font-bold text-md text-blue-700">
                    {students.length}/50
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StudentsPage;

// <div>
//   <h1>Liste des Étudiants</h1>
//   {students.length === 0 ? (
//     <p>Aucun étudiant trouvé.</p>
//   ) : (
//     <ul>
//       {students.map((student) => (
//         <li key={student.id}>
//           <h3>
//             {student.prenom} {student.nom} {student.postnom}
//           </h3>
//           <p>Email: {student.email}</p>
//           <p>Numéro: {student.numero}</p>
//           <p>Inspiration: {student.inspiration}</p>
//           <p>Impression: {student.impression}</p>
//           <p>Rêve: {student.reve}</p>
//           {/* Afficher les autres champs selon ton besoin */}
//         </li>
//       ))}
//     </ul>
//   )}
// </div>
