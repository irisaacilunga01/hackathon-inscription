import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";

export default function Page() {
  const BLUR_FADE_DELAY = 0.04;
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Bienvenue sur Hackathon
      </h1>
      <p className="text-sm md:text-xl max-w-xl mt-6 text-center">
        Une vision d&apos;apprentissage moderne pas comme les autres ! Apprennez
        de n&apos;importe où ! A n&apos;importe quand ! Juste avec votre
        ordinanateur.
      </p>
      <h2 className=" text-md md:text-xl font-bold text-center my-8">
        Comme Je le disais, Je suis Isaac ILUNGA, Ingénieur concepteur et
        developpeur des applications multiplateformes.
      </h2>
      {/* <!-- Header --> */}
      <header className="bg-blue-600  py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">
            Apprenez à votre propre rithme et en groupe 💻
          </h1>
          <p className="mt-2 text-lg">
            Un adage : &quot; Seul on va vite mais plusieurs on va loin ! &quot;
          </p>
        </div>
      </header>
      {/* <!-- Main Content --> */}
      <main className="container mx-auto px-6 py-10">
        {/* <!-- Introduction --> */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Pourquoi rejoindre ce programme ? 🌟
          </h2>
          <p className="text-lg mb-4">
            Tu entends toujours parlé des exploits des autres universités en
            informatique et tu te dis bah ! si je le savais, ou si j&apos;avais
            plus des moyens, j&apos;allais étudié là-bas.
          </p>
          <p className="text-lg mb-4">
            😂😂😂 Soit tranquille futur ingenieur ! Dans toutes les universités
            du pays nous avons presque le même programme national mais la
            différence se situe au niveau de la pratique des étudiants
            eux-mêmes.
          </p>
          <p className="text-lg mb-4">
            La pratique est la mère de la science et de tout apprentissage, donc
            ne craint rien, bientôt aussi il y aura des gens qui perlerons de
            nos (tes) exploits mais si et seulement si tu te décides dès
            maintenant d&apos;apprendre et de te mettre au travail, la
            réputation de l&apos;université c&apos;est à toi de la changée !
          </p>
          <p className="text-lg mb-4">
            J&apos;ai tellement galeré pour apprendre tout ce que je connais
            maintenant car je n&apos;avais personne pour me guider mais vous,
            vous avez de la chance de m&apos;avoir ! J&apos;ai tellement eu des
            personnes qui me découragées allant des professeurs aux ingénieurs
            informaticiens eux-mêmes. Et attents toi à ça mais une chose, la fin
            va justifier les moyens !
          </p>
          <p className="text-lg mb-4">
            Je ne veux pas t&apos;éffrayer mais te préparer psychologiquement
            car tout le monde n&apos;est pas appelé à avoir les mêmes
            compétences mais tu verras qu&apos;avec ce programme tu te
            profesionnaliseras de c&apos;est à quoi tu es capable et tu as été
            appelé.
          </p>
          <p className="text-lg mb-4">
            Ainsi, Ce programme est conçu pour les débutants comme pour les
            curieux. D&apos;abord, en un mois, vous apprendrez des compétences
            pratiques et des astuces qui transformeront votre manière de
            travailler et de coder si vous voulez devenir programmeur,
            bureaucrate, monteur etc. Vous n&apos;avez pas besoin
            d&apos;expérience préalable, juste de la motivation et un clavier !
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Qu&apos;est ce que ce programme vous réserve ? 🌟
          </h2>
          <p className="text-lg mb-4">
            Attend 😳, T&apos;inquiète pas, nous irons molo-molo avec les
            choses. Et nous apprendrons d&apos;abord tous ensemble les bases,
            puis chacun choisira ce qu&apos;il voudra faire pour être le
            meilleur possible.
          </p>
          <p className="text-lg mb-4">
            Chaque logiciel ou technologie aura des objectifs bien spécifique
            afin de n&apos;est pas apprendre pour apprendre !
          </p>
          <p className="text-lg mb-4">
            Déjà dans un mois vous allez vous familiariser avec votre machine en
            ayant connaissance des outils ou logciels de base indispensable en
            informatique.
          </p>
          <p className="text-lg mb-4">
            Attention 🚨🚩! Ce programme ne vient pas pour que tu abandonnes tes
            cours ou que tu les négliges ! Hein ? Mais plutôt pour compléter tes
            cours et surtout pour que tu soit meilleur dans un domaine bien
            précis !
          </p>
          <p className="text-lg mb-4">
            Pourquoi ? Car les cours à la faculté viennent nous donner seulement
            la base et les restes c&apos;est à nous de nous encharger car dans
            aucun cours vous entrerez en profondeur et c&apos;est la raison pour
            laquelle on vous appelle : &quot;Chercheur&quot;.
          </p>
          <p className="text-lg mb-4">
            Une dernière chose avant de passer déjà à quoi tu vas ressembler
            dans un mois, regarde ta machine, et demandes-toi quelle est la
            différence entre ta machine de toi informaticien et la machine de
            n&apos;importe qui d&apos;autre ? Quoi de spécial peut prouver que
            tu fais l&apos;informatique ? 😂😁🤣
          </p>
          <p className="text-lg mb-4">
            Lol ! Comme j&apos;ai eu à le dire, on devient meilleur et on
            maitrise n&apos;importe quoi par la pratique. Hein ? Sérieux chaque
            jour tu auras à faire, mininum 30 minutes sur ton ordi, pourquoi ?
            Bien-sûr pour ton bien ! Car si tu es en BAC1 tu as 2 ans et demi
            d&apos;apprentissage mais si tu es en BAC2 c&apos;est le même timing
            moins une année déjà consommée. Bref tu auras des exercices et de
            devoirs à faire et à déposer !
          </p>
        </section>

        {/* <!-- Objectifs du programme --> */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Alors quels objectifs dans un mois d&apos;abord 🎯 ?
          </h2>
          <p className="text-lg mb-4">
            Ne m&apos;enveut pas stp pour mes blagues ! Alors qui seras-tu dans
            un mois avec ce programme, ainsi après juste 1 mois de ce programme
            tu seras en mésure de faire plusieurs choses que nous allons
            énumérer juste après !
          </p>

          <p className="text-lg my-8">
            Je le repète, c&apos;est juste le premier mois et après tu
            decouvriras les surprises de ton aventure !
          </p>
        </section>

        {/* <!-- Technologies enseignées --> */}

        <section id="hackathons">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Ce que vous apprendrez 🛠️ en 1 mois !
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Vous êtes le meilleur !
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Vous aurez aumoins + de {DATA.hackathons.length} cours ou
                    logiciels. J&apos;ai pris tout mon temps pour bien réflechir
                    à comment les cours doivent se suivre pour que tu te motives
                    à chaque pas. Ainsi voici ce que tu vas apprendre dès le
                    premier mois :
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
            <p className="text-lg my-4">
              Et en bonus vous apprendrez{" "}
              <span className="font-bold">OpenLP</span>, c&apos;est le logiciel
              le plus utilisé dans les églises pour permettre de projeter
              simultanement sur plusieurs écrans les paroles des chansons, les
              versets bibliques, les images, les vidéos et plus encore !
            </p>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            La formation est elle gratuite ? 🤑
          </h2>
          <p className="text-lg mb-4">
            Bien-sûr que non ! eh ! Oui, la bonne réponse ? Non 👌! Pourquoi ?
          </p>
          <p className="text-lg mb-4">
            Dans le passé, plusieurs ont tenté de faire des formations gratuites
            mais malheureusement ont échoué, voilà pourquoi tu n&apos;as jamais
            entendu parlé de ça, car qui parle facilement de ses échecs ? Ainsi
            connais-tu les raisons ? Je te les montre : Beaucoup de formations
            gratuites existent aujourd&apos;hui, mais elles ont souvent des
            limites importantes. Voici pourquoi investir dans cette formation un
            peu payante est une meilleure option pour vous :
          </p>
          <ul className="list-decimal list-inside text-lg space-y-3">
            <li>
              <span className="font-bold">
                Un contenu de qualité supérieure
              </span>{" "}
              <br /> Les formations gratuites sont souvent limitées dans leur
              contenu.
            </li>
            <li>
              <span className="font-bold">
                Un engagement personnel renforcé
              </span>{" "}
              <br />
              Lorsque vous payez pour une formation, vous êtes plus motivé à la
              suivre jusqu&apos;au bout.
            </li>
            <li>
              <span className="font-bold">Un accompagnement personnalisé</span>
              <br /> Les formations gratuites offrent rarement un suivi
              individuel ou des conseils personnalisés.
            </li>
            <li>
              <span className="font-bold">
                Un accès aux outils professionnels
              </span>
              <br />
              👉 Cette formation inclut des démonstrations et des exercices avec
              des outils réels comme TypingMaster, OBS Studio, MS Teams, et bien
              d&apos;autres.
            </li>
          </ul>

          <p className="text-lg mb-4">
            J&apos;espère que vous avez compris ? Imaginez l&apos;efffort et le
            temps pour faire ce site, pour faire des recherches en continues.{" "}
          </p>
          <p className="text-lg mb-4">
            Et vous aurez à manipuler plusieurs équipements d&apos;ici peu, tout
            ça nécessite des moyens non ? Je vous aime bien et votre argent fera
            en sorte que vous suiviez la formation et les choses gratuites
            n&apos;ont pas de valeur, c&apos;est la raison pour laquelle même
            pour aller au ciel il faut un sacrifice et être prêt à tout rénoncer
            (mat 13) et même la dot nous ensigne non !.
          </p>
          <p className="text-lg mb-4">
            Juste pour rire ! La formation aura un coût très passable.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Le paiement ? ✈</h2>
          <p className="text-lg mb-4">
            Mon souhait c&apos;est de permettre à plusieurs d&apos;éléver leur
            niveau pour réaliser leurs futurs projets.
          </p>

          <p className="text-lg mb-4">
            Ainsi pour un équilibre, nous allons commencer par prende juste
            l&apos;inscription qui s&apos;élévera à{" "}
            <span className="font-bold text-yellow-500">15$</span> seulement
            après discussion avec vos chefs d&apos;équipes.
          </p>
          <p className="text-lg mb-4">
            Le prochain paiement sera très minime et se passera après le 1 mois,
            question de te donner le goût d&apos;apprendre et laisser
            l&apos;occasion de voir la qualité de tes nouvelles compétences.
          </p>
          <p className="text-lg mb-4">
            NB : Votre inscription de 15$ se fera via airtel money au numéro
            +243993188399 (nom du compte : louange praise), et après avoir
            effectuer le tranfert de votre argent, faite une capture
            d&apos;écran et envoyer la moi sur whatsapp en privé sur ce même
            numéro ! et je vous confirmerai votre transfère sur whatsapp et par
            mail puis je vous enverrais votre lien avec (mot de passe + votre
            email que vous avez rensignez lors du rempli de votre formulaire).
          </p>
          <p className="text-lg mb-4">
            Et si vous voulez le faire en FC envoyé au taux actuel et
            j&apos;insiste vous pouvez le faire avec frais de retrait ou pas,
            ceci ne dépend que de vous !
          </p>
          <p className="text-lg mb-4">
            Enfin si vous doutiez de Airtel Money, alors vous déposerez votre
            inscription au chef d&apos;équipe qui après nous la fera parvenir et
            nous confirmerons également via whatsapp et email avec les mêmes
            éléments précités !
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            C&apos;est pour quand la dite formation ? ⚔
          </h2>
          <p className="text-lg mb-4">
            Pour le 10 février 2025 car le plus tôt sera le mieux ! Signaler
            déjà aux parents pour cette formation !
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            De quoi avez-vous bésoins pour commencer ? 🎉
          </h2>
          <p className="text-lg mb-4">
            Voici le minimum à avoir avant de commencer :
          </p>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li className="font-bold">1 Ordinateur</li>
            <li className="font-bold">1 Smartphone android</li>
            <li className="font-bold">1 Forfait Internet</li>
            <li className="font-bold">1 Flash disk de 8Gigas minimum</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Enfin comment va se dérouler les différents cours ? 📖📚
          </h2>
          <p className="text-lg mb-4">
            Une question très pertinente non ? car vous allez déjà me dire que
            Ir alors si nous avons une semaine surchargée ? Comment faire ?
          </p>
          <p className="text-lg mb-4">
            Nous avons pensé à ça avant tout, ainsi voici comment les cours vont
            se dérouler sans perturber votre horaire :
          </p>
          <ul className="list-disc list-inside text-lg space-y-3">
            <li>
              <span className="font-bold">En ligne sur MS team</span> <br />
              Presque toutes les réunions et les introductions aux différents
              cours se passeront en ligne. Donc votre horaire n&apos;a rien à
              avoir !
            </li>
            <li>
              <span className="font-bold">Sur ce site</span> <br /> Ce site vous
              guidera pas à pas à comment vous allez suivre les cours.
            </li>
            <li>
              <span className="font-bold">Les tutoriels</span> <br /> Pas bésoin
              de réinventer la roue, nous choissirons les meilleurs tutos en
              ligne avec les meilleurs profs pour rapidement progresser.
              <br /> Alors tous les cours (tutos) seront envoyés sur votre flash
              par le chef d&apos;équipe ! Et pour d&apos;autres cours, vous
              recevrez un lien vers la vidéo en ligne ! Question de préserver
              également votre forfait internet !
            </li>
            <li>
              <span className="font-bold">Dépots des exercices et devoirs</span>{" "}
              <br /> Chaque travail sera déposer auprès du chef d&apos;équipe et
              ainsi le resultat et le classement seront disponibles sur le site.
            </li>
            <li>
              <span className="font-bold">Les challenges</span> <br /> Ce moyen
              nous permettra de nous depasser pour être le meilleur apprenant,
              donc ne soyez pas timide mais battez vous !
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Une motivation pour vous avant de vous inscrire ! 📚
          </h2>
          <p className="text-lg mb-4">
            Si vous voulez apprendre comme un fou avec des vrais objectifs,
            imaginez que sans cette apprentissage, vous allez mourir pauvre !
          </p>
          <p className="text-lg mb-4">
            Ou encore si vous n&apos;apprenez pas, tous les gens que vous aimez
            vont mourir !
          </p>
          <p className="text-lg mb-4">
            Enfin vous pouvez considerer que sans cet apprentissage, vous ne
            serez pas différent de celui qui travaille dans une bureautique.
          </p>
          <p className="text-lg mb-4">
            Ca vous énerve ? alors allons-y !. Cliquez sur le bouton si dessous
            et remplissez très bien le formulaire !
          </p>
          <p className="text-lg mb-4">
            NB : seulement <span className="font-bold text-red-500">50</span>{" "}
            participants seront considérés dans le premier groupe, les restes
            patienterons la création du groupe suivant.
          </p>
        </section>
      </main>
      {/* <!-- Footer --> */}
      <footer className="bg-gray-800 text-white py-6 my-12">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2025@ Ir isaac ILUNGA. Faites le premier pas vers vos rêves
            aujourd&apos;hui.
          </p>
          <Link
            href="/inscription"
            className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 animate-pulse"
          >
            S&apos;inscrire maintenant 😎
          </Link>
        </div>
      </footer>{" "}
    </>
  );
}
