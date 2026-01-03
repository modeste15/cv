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
    "Passionné par le développement, je possède de solides compétences en développement web, incluant l’intégration et l’automatisation d’API, le DevOps, les solutions cloud et l’analyse de données. J’ai débuté par le développement de plusieurs side projects web et mobile, avant d’évoluer vers un poste d’analyste développeur sur une solution hospitalière (Clinicaa). J’ai ensuite travaillé chez Orange sur un logiciel métier de gestion de projet, ce qui m’a permis de consolider plus de trois ans d’expérience en développement. J’ai poursuivi mon parcours par un master en informatique en alternance en tant que chargé de développement informatique chez Malakoff Humanis, où j’ai contribué à l’analyse des besoins métiers et au développement de deux applications web de pilotage commercial. J’apprécie concevoir des solutions utiles et orientées métier, avec une approche rigoureuse et un excellent sens du relationnel.",
  avatarUrl: "https://avatars.githubusercontent.com/u/49912886?s=400&u=b3e9e8682bcceb42ccc332b97cca075fb8036947&v=4",
  personalWebsiteUrl: "",
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
      actions : [
        "Modules clés : Data Engineering, Cloud Computing (Azure), Big Data, Machine Learning, Data Visualization, DevOps pour Data Science, Gestion de Projets IT.",
        "Projets réalisés : Développement d'une API de gestion de bibliothèque avec FastAPI et Oracle, Visualisation de données scientifiques avec Tableau, Analyse de sentiments en temps réel avec Kafka et PySpark."
      ],
    },
    {
      school: "Université du Havre Normandie",
      degree: "Licence Informatique ",
      start: "2021",
      end: "2022",
      actions : [
        "Modules clés : Data Engineering, Cloud Computing (Azure), Big Data, Machine Learning, Data Visualization, DevOps pour Data Science, Gestion de Projets IT.",
        "Projets réalisés : Développement d'une API de gestion de bibliothèque avec FastAPI et Oracle, Visualisation de données scientifiques avec Tableau, Analyse de sentiments en temps réel avec Kafka et PySpark."
      ],
    },
    {
      school: "Ecole Polytechnique Lome",
      degree: "Parcours Licence Professionnelle Genie Logiciel ",
      start: "2017",
      end: "2020",
      actions : [
        "Modules clés : Data Engineering, Cloud Computing (Azure), Big Data, Machine Learning, Data Visualization, DevOps pour Data Science, Gestion de Projets IT.",
        "Projets réalisés : Développement d'une API de gestion de bibliothèque avec FastAPI et Oracle, Visualisation de données scientifiques avec Tableau, Analyse de sentiments en temps réel avec Kafka et PySpark."
      ],
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
      actions : [
        "Développement et maintenance de deux applications web de pilotage commercial utilisant Laravel et React, intégrant des API tierces pour automatiser la collecte et la visualisation des données.",
        "Collaboration avec les équipes métiers pour analyser les besoins, concevoir des solutions techniques adaptées et assurer la qualité du code via des revues et des tests automatisés.",
        "Mise en place de pipelines CI/CD avec GitLab pour automatiser les déploiements, améliorant ainsi l'efficacité du processus de livraison logicielle.",
        "Utilisation de Power BI pour créer des tableaux de bord interactifs, facilitant la prise de décision basée sur les données pour les équipes commerciales."
      ],
      description:"",
      skills: [
        "PHP",
        "Laravel",
        "React",
        "PowerBi",
        "SQL",
        "GitLab CI/CD",
        "API REST",
        "Agile / Scrum"
      ],
    },
    {
      company: "Orange France",
      link: "https://www.orange.fr",
      title: "Analyste développeur ",
      badges: ['Prestation via ESN'],
      logo: Orange,
      start: "Juillet 2022",
      end: "Juillet 2023",
      actions : [
        "Développement et maintenance de deux applications web de pilotage commercial utilisant Laravel et React, intégrant des API tierces pour automatiser la collecte et la visualisation des données.",
        "Collaboration avec les équipes métiers pour analyser les besoins, concevoir des solutions techniques adaptées et assurer la qualité du code via des revues et des tests automatisés.",
        "Mise en place de pipelines CI/CD avec GitLab pour automatiser les déploiements, améliorant ainsi l'efficacité du processus de livraison logicielle.",
        "Utilisation de Power BI pour créer des tableaux de bord interactifs, facilitant la prise de décision basée sur les données pour les équipes commerciales."
      ],
      description:
      "Gitlab CI/CD - Symfony - Laravel - SonarQube - API REST - RPA - Automatisation de processus - Signature électronique - Intégration/Externalisation d'API - Postman - Swagger - SQL - SCRUM ",
      skills: [
        "PHP",
        "Laravel",
        "React",
        "PowerBi",
        "SQL",
        "GitLab CI/CD",
        "API REST",
        "Agile / Scrum"
      ],
    },
    {
      company: "Engenys",
      link: "https://engenys.com/",
      badges: ["Stage"],
      title: "Software Engineer",
      logo: JojoMobileLogo,
      start: "Mai 2022",
      end: "Juin 2022",
      actions : [
        "Développement et maintenance de deux applications web de pilotage commercial utilisant Laravel et React, intégrant des API tierces pour automatiser la collecte et la visualisation des données.",
        "Collaboration avec les équipes métiers pour analyser les besoins, concevoir des solutions techniques adaptées et assurer la qualité du code via des revues et des tests automatisés.",
        "Mise en place de pipelines CI/CD avec GitLab pour automatiser les déploiements, améliorant ainsi l'efficacité du processus de livraison logicielle.",
        "Utilisation de Power BI pour créer des tableaux de bord interactifs, facilitant la prise de décision basée sur les données pour les équipes commerciales."
      ],
      description:
      "Maintenance évolutive d’une application GMAO (Gestion de Maintenance Assistée par Ordinateur) web basée sur Python, utilisant le micro-framework Flask, ainsi que les technologies Jinja et Tailwind CSS, et l’intégration de Docker.",
      skills: [
        "PHP",
        "Laravel",
        "React",
        "PowerBi",
        "SQL",
        "GitLab CI/CD",
        "API REST",
        "Agile / Scrum"
      ],
    },
    {
      company: "Clinicaa",
      link: "https://clinicaa-erp.com/",
      badges: ['CDD'],
      title: "Analyste Développeur",
      logo: NSNLogo,
      start: "Juin 2020",
      end: "Juillet 2021",
      actions : [
        "Développement et maintenance de deux applications web de pilotage commercial utilisant Laravel et React, intégrant des API tierces pour automatiser la collecte et la visualisation des données.",
        "Collaboration avec les équipes métiers pour analyser les besoins, concevoir des solutions techniques adaptées et assurer la qualité du code via des revues et des tests automatisés.",
        "Mise en place de pipelines CI/CD avec GitLab pour automatiser les déploiements, améliorant ainsi l'efficacité du processus de livraison logicielle.",
        "Utilisation de Power BI pour créer des tableaux de bord interactifs, facilitant la prise de décision basée sur les données pour les équipes commerciales."
      ],
      description: "Poste de développeur au sein d’une équipe dédiée à la création d’une solution hospitalière complète, développée entièrement à partir de zéro. Mon rôle consistait à concevoir et coder des fonctionnalités cruciales, contribuant à la construction d’un système robuste, adapté aux besoins spécifiques du secteur de la santé. Mon engagement dans ce projet a renforcé mes compétences en développement et approfondi ma compréhension des exigences complexes des solutions médicales.",
      skills: [
        "PHP",
        "Laravel",
        "React",
        "PowerBi",
        "SQL",
        "GitLab CI/CD",
        "API REST",
        "Agile / Scrum"
      ],
    },

  ],

  projects: [
    {
      title: "Formation Master",
      techStack: [

      ],
      description: "Module de formation Master",
      logo: ConsultlyLogo,
      link: {
        label: "Consulter les modules",
        href: "https://drive.google.com/file/d/1Ye2xOtAXhsyW2I1IKj6WQwfUOF_772Xk/view?usp=sharing"
      },
    }, 
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
      title: "Microsoft Certified: Azure Fundamentals",
      techStack: [

      ],
      description: "",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://www.credly.com/badges/f318ae52-e61d-46c0-942a-183b10a0881c"
      },
    }, 
    {
      title: "Microsoft Certified: Power Platform Fundamentals",
      techStack: [

      ],
      description: "",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "https://www.credly.com/badges/95905c97-02aa-485a-917a-3f726906e93b/linked_in_profile"
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
