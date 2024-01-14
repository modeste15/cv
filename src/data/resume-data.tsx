import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Modeste KOUASSI",
  initials: "",
  location: "Angers, France, & 🌏",
  locationLink: "https://maps.app.goo.gl/gjmCCWuzWxo4TF8J6",
  about:
    "Software Engineer, Data Enthusiast.",
  summary:
    "J'ai une passion pour fournir des solutions à diverses industries grâce à l'utilisation des technologies Node.js , PHP , Python . En tant qu'analyste, je me spécialise dans la mise à profit de mes compétences pour fournir des informations précieuses et soutenir les entreprises, en garantissant une intégration transparente des solutions basées sur les données. Fort d'une expertise approfondie en visualisation de données, je suis compétent dans la création de représentations visuelles percutantes pour transformer des informations complexes en insights exploitables.",
  avatarUrl: "https://gravatar.com/avatar/35d41aa5198303bf475f7c7e42a1dfdf?s=400&d=mp&r=x",
  personalWebsiteUrl: "https://medouse.me",
  contact: {
    email: "medouse15@gmail.com",
    tel: "+330752422936",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/modeste15",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/modestekouassi/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/medouse_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SUPINFO, ",
      degree: "Master Ingénierie Data",
      start: "2023",
      end: "2025",
    },
    {
      school: "Université du Havre Normandie",
      degree: "Licence Informatique",
      start: "2021",
      end: "2022",
    },
    {
      school: "Ecole Polytechnique de Lomé",
      degree: "Licence Professionnelle en Genie Logiciel",
      start: "2017",
      end: "2020",
    }
  ],
  work: [
    {
      company: "Malakoff Humanis",
      link: "https://www.malakoffhumanis.com/",
      badges: ["Alternance"],
      title: "Chargé de developpement Informatique",
      logo: ParabolLogo,
      start: "2023",
      end: "2025",
      description:
        "En qualité de responsable des évolutions sur un logiciel web dédié au suivi d'activité d'un CRM pour le métier de commercial, je m'occupe de l'amélioration continue du système et génère des rapports analytiques grâce à la manipulation de données SQL.",
    },
    {
      company: "Orange France",
      link: "https://www.orange.fr",
      badges: ["Hybrid"],
      title: "Consultant Laravel",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "En tant que Lead Développeur , j'ai eu la tache de maintenir et faire evoluer un logiciel de gestion de projet. J'ai integré plusieurs API d'automatisation et mener a bien des integrations comme la Signature électronique.",
    },
    {
      company: "Engenys",
      link: "https://engenys.com/",
      badges: ["Stage"],
      title: "Developpeur Logiciel",
      logo: JojoMobileLogo,
      start: "2022",
      end: "2022",
      description:
        "Maintenance évolutive d'une application GMAO web Python utilisant le micro-framework Flask, ainsi que les technologies Jinja et Tailwind CSS, avec une intégration Docker.",
    },
    {
      company: "Clinicaa",
      link: "https://clinicaa-erp.com/",
      badges: [],
      title: "Developpeur Laravel/VueJs",
      logo: NSNLogo,
      start: "2019",
      end: "2021",
      description: "poste de développeur au sein d'une équipe dédiée à la création d'une solution hospitalière complète, développée entièrement depuis le début. Mon rôle consistait à concevoir et à coder des fonctionnalités cruciales, contribuant ainsi à la construction d'un système robuste et adapté aux besoins spécifiques du secteur hospitalier. Mon engagement dans ce projet a renforcé mes compétences en développement et ma compréhension des exigences complexes des solutions médicales,
    },
    {
      company: "Miabe Star",
      link: "",
      badges: [],
      title: "Developpeur Laravel",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description: "",
    },
  ],
  skills: [
    "JavaScript",
    "PHP",
    "Laravel",
    "Node.js",
    "API",
    "PowerBi",
    "SQL",

  ],
  projects: [
    {
      title: "Wenkel",
      techStack: [
        "Side Project",
        "Laravel",
        "React Native",
        "SQL",
      ],
      description: "Market Place",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://consultly.com/"
      },
    }
    
    
  ],
} as const;
