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
    "Developpement Informatique et Manipulation de Données ",
  summary:
    "Passionné par le développement logiciel, je suis actuellement Chargé de développement en alternance chez Malakoff Humanis, où je reçois les besoins des équipes commerciales et les implémente dans un logiciel dédié au suivi d’activité. En parallèle, je mène de nombreux projets en ingénierie data et analyse de données . Fort d’une expérience variée, j’ai occupé un poste  de développeur chez Orange France, où j’ai mené des projets d’intégration d’API et automatisé des processus clés, tels que la signature électronique. Je maîtrise les bonnes pratiques de développement et suis habitué à travailler en méthodologie agile. Mon expertise couvre une variété de technologies, allant de la gestion des bases de données SQL à l’intégration de solutions web complexes ainsi que la gestions de projet Informatique.",
  avatarUrl: "https://avatars.githubusercontent.com/u/49912886?s=400&u=b3e9e8682bcceb42ccc332b97cca075fb8036947&v=4",
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
      }
    ],
  },
  education: [
    {
      school: "SUPINFO",
      degree: "Master Data Engineering",
      start: "2023",
      end: "2025",
    },
    {
      school: "Université du Havre Normandie",
      degree: "Licence Informatique ",
      start: "2021",
      end: "2022",
    },
    {
      school: "Ecole Polytechnique  Lome",
      degree: "Parcours Licence Professionnelle Genie Logiciel ",
      start: "2017",
      end: "2020",
    }
  ],
  work: [
    {
      company: "Malakoff Humanis",
      link: "https://www.malakoffhumanis.com/",
      badges: ["Alternance"],
      title: "Chargé de developpement Informatique ",
      logo: ParabolLogo,
      start: "2023",
      end: "2025",
      description:
        "Dans mon rôle de chargé de développement pour un logiciel web dédié au suivi d’activité au sein d’un CRM orienté vers le domaine commercial, je recueille les besoins métiers et mets en œuvre des solutions pour améliorer continuellement le système. J’élabore également des rapports analytiques en effectuant des manipulations avancées des données via SQL, afin de soutenir la prise de décision et optimiser la performance.",
    },
    {
      company: "Orange France",
      link: "https://www.orange.fr",
      title: "Developpeur Laravel ",
      badges: [],
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
      "En tant qu’Analyste Développeur, j’étais chargé de maintenir et de faire évoluer un logiciel de gestion de projet. J’ai intégré diverses API d’automatisation et mené avec succès des intégrations, telles que la fonctionnalité de signature électronique ou une intégration des API de l’INSEE. J’ai également travaillé sur du DevOps et utilisé des outils d’analyse tels que SonarQube." ,
    },
    {
      company: "Engenys",
      link: "https://engenys.com/",
      badges: ["Stage"],
      title: "Software Engineer",
      logo: JojoMobileLogo,
      start: "2022",
      end: "2022",
      description:
      "Maintenance évolutive d’une application GMAO (Gestion de Maintenance Assistée par Ordinateur) web basée sur Python, utilisant le micro-framework Flask, ainsi que les technologies Jinja et Tailwind CSS, et l’intégration de Docker.",
    },
    {
      company: "Clinicaa",
      link: "https://clinicaa-erp.com/",
      badges: [],
      title: "Junior Software Engineer",
      logo: NSNLogo,
      start: "2019",
      end: "2021",
      description: "Poste de développeur au sein d’une équipe dédiée à la création d’une solution hospitalière complète, développée entièrement à partir de zéro. Mon rôle consistait à concevoir et coder des fonctionnalités cruciales, contribuant à la construction d’un système robuste, adapté aux besoins spécifiques du secteur de la santé. Mon engagement dans ce projet a renforcé mes compétences en développement et approfondi ma compréhension des exigences complexes des solutions médicales.",
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
      title: "API pour Gestion de Bibliothèque",
      techStack: [
        "School Project",
        "FASTAPI",
        "ORACLE",
        "GITHUB WORKFLOWS"
      ],
      description: "Api avec FastApi et une base de données Oracle",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: ""
      },
    }, 
    {
      title: "Streaming with Kafka",
      techStack: [
        "Kafka ",
        "Python",
        "PySpark",
        "ML",
        "Postgres"
      ],
      description: "Récupération API mastodon en temps réeelle (Chaque 5s) pour l'analyse de sentiments des postes",
      logo: ConsultlyLogo,
      link: {
        label: "Présentation ICI",
        href: "https://modeste.my.canva.site/pyspark"
      },
    }, 
    {
      title: "DATAVIZ with Tableau",
      techStack: [
        "School Project",
        "Tableau",
        "CSV",
      ],
      description: "Visualisation des données sur la recherche scientifique",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: ""
      },
    }, 
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
        href: ""
      },
    }
    
    
  ],
} as const;
