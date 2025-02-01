"use client";

import { useToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addStudent } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Switch } from "./ui/switch";
import { Textarea } from "./ui/textarea";
const FormSchema = z.object({
  nom: z.string().min(2, {
    message: "le nom doit avoir 2 caractères.",
  }),
  postnom: z.string().min(2, {
    message: "le postnom doit avoir 2 caractères.",
  }),
  prenom: z.string().min(2, {
    message: "le prénom doit avoir 2 caractères.",
  }),
  inspiration: z.string().min(5, {
    message: "ce champ doit avoir 5 caractères.",
  }),
  impression: z.string().min(5, {
    message: "ce champ doit avoir 5 caractères.",
  }),
  reve: z.string().min(5, {
    message: "ce champ doit avoir 5 caractères.",
  }),
  email: z.string().email({
    message: "le email doit être valide.",
  }),
  numero: z.string().min(10, {
    message: "le numero doit avoir 10 caractères.",
  }),
  bases: z.boolean(),
  bureautique: z.boolean().default(false).optional(),
  mobile: z.boolean().default(false).optional(),
  web: z.boolean().default(false).optional(),
  desktop: z.boolean().default(false).optional(),
  video: z.boolean().default(false).optional(),
  photo: z.boolean().default(false).optional(),
});
export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nom: "",
      postnom: "",
      prenom: "",
      bases: true,
      bureautique: false,
      mobile: false,
      web: false,
      desktop: false,
      video: false,
      photo: false,
    },
  });
  const [disabled, setDesabled] = useState(false);
  const { toast } = useToast();
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setDesabled(true);
      await addStudent(data);
      toast({
        title: "Inscription réussie",
        description: `Le participant ${data.prenom} ${data.postnom} a été ajouter avec succès`,
        className: "bg-green-700 text-white",
      });
    } catch (error) {
      setDesabled(false);
      toast({
        title: "Erreur lors de l'ajoute",
        description: `Erreur d'ajout du participant  ${data.prenom} ${data.postnom} !`,
        className: "bg-red-700 text-white",
      });
    }
  }
  return (
    <Form {...form}>
      {/* <form
      className={cn("flex flex-col gap-6 ", className)}
      onSubmit={onSubmit}
      {...props}
    > */}
      <div className="flex flex-col items-center gap-2 text-center mb-4">
        <h1 className="text-2xl font-bold">Inscrivez-vous !</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Créez gratuitement votre compte puis accéder au site principal dès que
          vous aurez confirmer votre paiement !
        </p>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-2 ", className)}
      >
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground font-bold">
            Vos informations !
          </span>
        </div>
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>Votre nom de famille</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postnom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post-Nom</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>Votre postnom.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="prenom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>Votre prénom.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border my-4">
          <span className="relative z-10 bg-background px-2 text-muted-foreground font-bold">
            Choix des technologies !
          </span>
        </div>
        <div>
          {/* <h3 className="mb-4 text-lg font-medium">Email Notifications</h3> */}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="bases"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Les bases</FormLabel>
                    <FormDescription>
                      Le premier pas vers l&apos;informatique avec les ooutils
                      de base.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bureautique"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Bureautique</FormLabel>
                    <FormDescription>
                      En profondeur avec MS Word, Excel, PowerPoint et Project
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Mobile</FormLabel>
                    <FormDescription>
                      Développement des applications Android et IOS.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="web"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Web</FormLabel>
                    <FormDescription>
                      Développement des applications web.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="desktop"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Desktop</FormLabel>
                    <FormDescription>
                      Développement des applications Desktop.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="video"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Montage vidéo</FormLabel>
                    <FormDescription>
                      Apprentissage du montage vidéo.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <FormLabel>Montage photo (Design)</FormLabel>
                    <FormDescription>
                      Apprentissage du montage photo et design avec des outils
                      adaptés
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border my-4">
          <span className="relative z-10 bg-background px-2 text-muted-foreground font-bold">
            Notez bien !
          </span>
        </div>
        <p className="text-md mb-4">
          Etês-vous sûr de vos choix ? Car chaque option choissit vous
          demanderas du temps, des sacrifices et des exercices pour la maitrise.
          Alors veuillez révoir vos choix car c&apos;est mieux d&apos;être
          excellent dans une matière que d&apos;être un peu par tout !
        </p>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground font-bold">
            Un peu de vous !
          </span>
        </div>
        <FormField
          control={form.control}
          name="impression"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Que dites-vous de cette formation ? Vos impressions ou
                recommandations
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              {/* <FormDescription>Votre nom de famille</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="inspiration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Pourquoi ou qui vous a inspiré à faire l&apos;informatique ?
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              {/* <FormDescription>Votre postnom.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reve"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Qui voullez-vous devénir ou quels sont vos rêves et vos projets
                en informatique ?
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              {/* <FormDescription>Votre postnom.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground font-bold">
            Vos contacts !
          </span>
        </div>
        <FormField
          control={form.control}
          name="numero"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numéro de téléphone</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>Votre nom de famille</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              {/* <FormDescription>Votre postnom.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border my-4">
          <span className="relative z-10 bg-background px-2 text-muted-foreground font-bold">
            Notez bien !
          </span>
        </div>
        <p className="text-md mb-4">
          Etês-vous sûr de vouloir suivre cette formation ?
        </p>
        <p className="text-md mb-4">
          Avant d&apos;appuyer sur le boutton Confirmer, notez que toutes les
          formations se passeront sur votre machine, donc vous aurez les cours
          avec vous et dont vous apprendriez avec votre rithme.
        </p>
        <p className="text-md mb-4">
          Enfin ! Une fois votre paiement validé, vous récevrez le lien sur
          Whatsapp et email pour obtenir l&apos;accès vers le site officiel où
          tout va se passer ! Et dont votre numéro de téléphone sera gardé
          secret !
        </p>
        <p className="text-md mb-4">Etes vous prêt ?</p>
        <Button type="submit" disabled={disabled} aria-disabled={disabled}>
          Confirmer 🤝
        </Button>
      </form>
    </Form>
  );
}
