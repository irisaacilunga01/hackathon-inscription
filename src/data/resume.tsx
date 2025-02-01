import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hackathon Inscription",
  initials: "DV",
  url: "https://github.com/irisaacilunga01",
  location: "Likasi",
  locationLink: "https://www.google.com/maps/place/likasi",
  description:
    "Ingénieur concepteur, développeur logiciel et IT devenu également entrepreneur. J'adore créer des solutions innovantes, être à la une de la technologie et aider les autres à atteindre leurs objectifs. Je suis très actif sur WhatsApp et sur Github.",
  summary:
    "A la fin de l'année 2022 , j'ai décidé de quitter mon poste de gérant dans une grande bureautique pour me consacrer pleinement au développement logiciel et à la mise à l'échelle de mes propres projets. Ceci m'a ouvert plusieurs opportunités comme : [être coodirecteur de plusieurs dirigés et de développer des applications web🌍, desktop💻 et mobile📱 en rapport avec leurs memoires](https:/), [je suis actuellement IT à l'entreprise AC Engineering SARL](/), [de former plusieurs personnalités sur l'outil informatique](/), enfin [consultant en informatique et formateur 5 ✨](/). J'ai pris du plaisir à réaliser [plusieurs projets](/) pour résoudre le problème de la population comme l'indique notre mission. Et ma mission actuelle : [c'est toi 👊](/)",
  avatarUrl: "/me1.jpg",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Python",
    "Mysql",
    "Postgres",
    "Github",
    "Git",
    "Electron.js",
    "React Native",
    "Java",
    "C++",
    "C#",
    "Prisma ORM",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "isaacilungaofficial@gmail.com",
    tel: "+243993188399",
    social: {
      Whatsapp: {
        name: "Whatsapp",
        url: "https://wa.me/243993188399",
        icon: Icons.whatsapp,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/irisaacilunga01?tab=repositories",
        icon: Icons.github,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:isaacilungaofficial@gmail.com?subject=Bonjour&body=Je%20souhaite%20vous%20contacter",
        icon: Icons.email,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@isaacilungaofficial1395",
        icon: Icons.youtube,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Mairie de Likasi",
      badges: [],
      href: "#",
      location: "Likasi",
      title: "Informaticien consultant",
      logoUrl: "/mairie.png",
      start: "octobre 2024",
      end: "à nos jours",
      description:
        "Informaticien consultant au secrétariat général de la mairie de Likasi, dans le but d'améliorer leur vitesse de traitement de l'information et support d'aide. Egalement aide à la maintenance logiciel et matériel sans oublié les propositions pour être à la une de la technologie",
    },
    {
      company: "AC Engineering",
      href: "#",
      badges: [],
      location: "Likasi-Kolwezi",
      title: "Information Technologie (IT)",
      logoUrl: "/ac.jpeg",
      start: "Décembre 2023",
      end: "à nos jours",
      description:
        "Informaticien générale chargé du traitement de toutes sortes d'information et travaillant dans le bureau d'étude pour étudier les opportunités offertes par le marché actuel. Et chargé de la maintenance de tout équipement informatique au sein de l'entreprise.",
    },

    {
      company: "Bureautique MK",
      href: "#",
      badges: [],
      location: "Santa Clara, CA",
      title: "Gérant principal",
      logoUrl: "/mk.jpeg",
      start: "Juillet 2022",
      end: "Juillet 2023",
      description:
        "J'ai travaillé entant que gérant de la grande bureautique et aussi comme étant un formateur de l'outil informatique et de la suite office dont : MS Word, MS Project, MS Excel, MS PowerPoint, MS Publisher...",
    },
    {
      company: "Ecodim Christ Rédempteur 1",
      href: "#",
      badges: [],
      location: "Likasi",
      title: "Informaticien principal",
      logoUrl: "/ecodim.jpg",
      start: "Décembre 2019",
      end: "à nos jours",
      description:
        "Informaticien principal chargé de l'équipe informatique au sein de l'école du dimanche dans l'objectif de simplifié les tâches répétitives et d'apporter des innovations technologiques à cette dernière.",
    },
    {
      company: "Bureautique en générale",
      href: "#",
      badges: [],
      location: "Likasi, CA",
      title: "Bureaucrate & Encodeur",
      logoUrl: "/cyber.jpeg",
      start: "Octobre 2019",
      end: "Févier 2022",
      description:
        "Bureaucrate et encodeur apprenti chargé de la saisie, l'impression, de la recherche, également DJ tout en étant trop jeûne. Et c'était la clé de mon ascension. J'ai eu à travailler dans le compte des plusieurs bureautiques de la place et ceci m'a donné le goût à l'informatique.",
    },
  ],
  education: [
    {
      school: "Isci Likasi",
      href: "#",
      degree: "G1, G2, et G3 info de gestion , L1 et L2 ISI",
      logoUrl: "/isci.jpeg",
      start: "2020",
      end: "2025",
    },
    {
      school: "ITI SNCC",
      href: "#",
      degree: "1er - 6ème, Diplôme d'état en éléctronique générale",
      logoUrl: "/cfp.png",
      start: "2013",
      end: "2020",
    },
    {
      school: "EP SNCC",
      href: "#",
      degree: "1ère-6ème, Certificat de fin d'études primaires",
      logoUrl: "/sncc.jpeg",
      start: "2007",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "My School",
      href: "#",
      dates: "Aout 2024 - à nos jours",
      active: true,
      description:
        "Application mobile et desktop innovante et revolutionnaire pour faciliter le partage, le traitement des différentes sortes d'information allant des communiqués, inscriptions, paiements etc... dans les écoles primaires et sécondaires.",
      technologies: [
        "Electron.js",
        "ReactJs",
        "React-Router-Dom",
        "Typescript",
        "MySql",
        "Sequelize",
        "TailwindCSS",
        "Radix UI",
        "Shadcn UI",
        "Magic UI",
      ],

      image: "/project1.png",
    },
    {
      title: "Gestion abonnés SNEL",
      href: "#",
      dates: "Janvier 2024 - Aout 2024",
      active: true,
      description:
        "Application desktop pour l'obtention du diplôme de licence servant à l'informatisation du procesus de gestion des paiements des abonnées à la SNEL Likasi.",
      technologies: [
        "ELectron.js",
        "React.js",
        "Prisma",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],

      image: "/project2.png",
    },
    {
      title: "Guest House OKAPI",
      href: "#",
      dates: "Janvier 2024 - Aout 2024",
      active: true,
      description:
        "Un site Web de reservation en ligne permettant aux clients du Guest de reserver leurs chambres et services depuis n'importe où et à n'importe quand !.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Vercel@postgre",
        "TailwindCSS",
        "Shadcn UI",
      ],
      image: "/project3.png",
    },
  ],
  hackathons: [
    {
      title: "TypingMaster",
      dates: "Février-Mars 2025",
      location: "Ms Team, En face à face",
      description:
        "Améliorez votre vitesse et précision au clavier. Soyez comme dans un film déjà ça fera une grande différence.",
      image: "/typingmaster.jpeg",
      mlh: "/typingmaster.jpeg",
      links: [
        {
          title: "Télécharger",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
    {
      title: "OBS Studio",
      dates: "Février-Mars 2025",
      location: "Ms Team, En face à face",
      description:
        "Enregistrez vos écrans et créez des tutoriels vidéo. Soyez capable d'enregitrer vos vidéos comme les youtubeurs ou tickokeurs les font.",
      image: "/OBS.png",
      mlh: "/OBS.png",
      links: [
        {
          title: "Télécharger",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
    {
      title: "Movavi",
      dates: "Février-Mars 2025",
      location: "Ms Team, En face à face",
      description:
        "Montez des vidéos dynamiques pour vos projets.Chaque exercice et devoir sera très bien expliqué et déposer sous-forme de vidéo, éditer vos vidéos pour ne laisser que les parties importantes.",
      image: "/movavi.png",
      mlh: "/movavi.png",
      links: [
        {
          title: "Télécharger",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
    {
      title: "MS Teams",
      dates: "Février-Mars 2025",
      location: "Ms Team, En face à face",
      description:
        "Collaborez en temps réel avec des outils professionnels. Cet outil nous permettra de faire des rencontres et des reunions en ligne d'une manière profesionnelle et chacun aura la possibilité de partager son écran et  d'avoir de l'aide en cas de problème.",
      image: "/mst.png",
      mlh: "/mst.png",
      links: [
        {
          title: "Télécharger",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
    {
      title: "Email",
      dates: "Février-Mars 2025",
      location: "par Email",
      description:
        "Maîtrisez les emails pour communiquer efficacement. C'est la manière profesionnelle de communiquer dans les entreprises et entres elles. Pour d'autres tâches nous vous demanderons de les envoyer par email.",
      image: "/email.png",
      mlh: "/email.png",
      links: [
        {
          title: "Télécharger",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
    {
      title: "Astuces",
      dates: "Février-Mars 2025",
      location: "par Email",
      description:
        "Apprenez à rechercher et utiliser les meilleures ressources en ligne. Et à parsonnaliser votre PC comme un professionnelle en informatique. Aussi question d'orgueil quoi ?",
      image: "/web.jpeg",
      mlh: "/web.jpeg",
      links: [
        {
          title: "Télécharger",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
  ],
} as const;
