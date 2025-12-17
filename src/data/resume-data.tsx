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
  Orange,
  Mh,

} from "@/images/logos";



import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Modeste KOUASSI",
  initials: "",
  location: "France, & 🌏 | Disponibilité Immédiate",
  locationLink: "https://maps.app.goo.gl/gjmCCWuzWxo4TF8J6",
  about:
    "Ingénierie Logicielle & Données | Gestion de Projets IT",
  summary:
    "Passionné par le développement logiciel et la valorisation des données, j’ai exercé en tant que Chargé de développement(PMO) chez Malakoff Humanis, où j’analysais les besoins des équipes commerciales et exploitais des données multi-sources issues de CRM et de logiciels RH, mises en œuvre au travers de chaînes ETL, afin de les traduire en solutions concrètes au sein d’un logiciel de suivi d’activité et reporting BI. En parallèle lors de ma formation, j’ai mené plusieurs projets en ingénierie data et analyse de données. Aussi Fort d’une expérience chez Orange France, j’ai conduit des projets d’intégration d’API et automatisé des processus clés, notamment autour de l'automatisation RPA et de la signature électronique. Habitué aux bonnes pratiques de développement et aux méthodologies agiles, je dispose d’une expertise couvrant la gestion de bases de données SQL, les ETLs, l’intégration de solutions web complexes et la gestion de projets informatiques, de l’expression du besoin jusqu’à la livraison.",
  avatarUrl: "https://avatars.githubusercontent.com/u/49912886?s=400&u=b3e9e8682bcceb42ccc332b97cca075fb8036947&v=4",
  personalWebsiteUrl: "https://modeste.app",
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
      school: "Ecole Polytechnique Lome",
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
      title: "PMO - Chargé de developpement Informatique ",
      logo: Mh,
      start: "Septembre 2023",
      end: "Novembre 2025",
      description:
        "CRM - PowerBi - ETL - PHP - SQL - SqlServer - ADFS - BigData - Reporting - ChartJS - Bitbucket - ITIL",
    },
    {
      company: "Orange France",
      link: "https://www.orange.fr",
      title: "Analyste développeur ",
      badges: ['Prestation via ESN'],
      logo: Orange,
      start: "Juillet 2022",
      end: "Juillet 2023",
      description:
      "Gitlab CI/CD - Symfony - Laravel - SonarQube - API REST - RPA - Automatisation de processus - Signature électronique - Intégration/Externalisation d'API - Postman - Swagger - SQL - SCRUM ",
    },
    {
      company: "Engenys",
      link: "https://engenys.com/",
      badges: ["Stage"],
      title: "Software Engineer",
      logo: JojoMobileLogo,
      start: "Mai 2022",
      end: "Juin 2022",
      description:
      "Maintenance évolutive d’une application GMAO (Gestion de Maintenance Assistée par Ordinateur) web basée sur Python, utilisant le micro-framework Flask, ainsi que les technologies Jinja et Tailwind CSS, et l’intégration de Docker.",
    },
    {
      company: "Clinicaa",
      link: "https://clinicaa-erp.com/",
      badges: ['CDD'],
      title: "Analyste Développeur",
      logo: NSNLogo,
      start: "Juin 2020",
      end: "Juillet 2021",
      description: "Poste de développeur au sein d’une équipe dédiée à la création d’une solution hospitalière complète, développée entièrement à partir de zéro. Mon rôle consistait à concevoir et coder des fonctionnalités cruciales, contribuant à la construction d’un système robuste, adapté aux besoins spécifiques du secteur de la santé. Mon engagement dans ce projet a renforcé mes compétences en développement et approfondi ma compréhension des exigences complexes des solutions médicales.",
    },

  ],
  skills: [
    "JavaScript",
    "PHP",
    "Laravel",
    "API",
    "PowerBi",
    "SQL",
    "PostgreSQL",
    "ETL",
    "Python",
    "FastAPI",
    "Data Analysis",
    "Tableau",
    "Git",
    "Docker",
    "Agile Methodologies",
    "ChartJS",
    "ITIL",
    "Agile / Scrum"

  ],
  projects: [
    {
      title: "Refondre des plateformes de pilotage (Cockpit commercial)",
      techStack: [
        "Reporting",
        "Excel",
        "Visualisation de données",
        "Agile / Cycle V",
        "DSI"
      ],
      description: "Mémoire de fin d'étude",
      logo: ConsultlyLogo,
      link: {
        label: "Consulter le mémoire",
        href: "https://drive.google.com/file/d/1Se1g57QpnKwVv6_tqOQ8OokDUAj4lJGB/view?usp=sharing"
      },
    }, 
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
