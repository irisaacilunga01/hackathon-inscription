"use server";

import { createClient } from "@supabase/supabase-js";
import { Student } from "./types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// Initialisation de Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Ajouter un étudiant
export async function addStudent(student: Student) {
  try {
    const { data, error } = await supabase.from("students").insert([student]);

    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("Erreur lors de l'ajout du participant:", error);
    throw new Error("Impossible d'ajouter l'étudiant.");
  }
  revalidatePath("/succes");
  redirect("/succes");
}

// Récupérer tous les étudiants
export async function getStudents() {
  try {
    const { data, error } = await supabase.from("students").select("*");

    if (error) throw new Error(error.message);

    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des étudiants:", error);
    throw new Error("Impossible de récupérer la liste des étudiants.");
  }
}
