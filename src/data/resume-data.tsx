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



import { GitHubIcon, LinkedInIcon, XIcon, BlogIcon } from "@/components/icons";

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
      },
      {
        name: "BLOG",
        url: "https://modeste15.github.io/",
        icon: BlogIcon,
      }
    ],
  },
  education: [
    {
      school: "SUPINFO",
      degree: "Master Management des Systèmes d'Informations",
      start: "2023",
      end: "2025",
      actions : [
        "Modules clés : Data Engineering, Cloud Computing (Azure), Big Data, Talend, Data Visualization, DevOps pour Data Science, Gestion de Projets IT (ITIL, Agile).",
        "Projets réalisés : Développement d'une API de gestion de bibliothèque avec FastAPI et Oracle, Visualisation de données scientifiques avec Tableau, Analyse de sentiments en temps réel avec Kafka et PySpark."
      ],
    },
    {
      school: "Université du Havre Normandie",
      degree: "Licence Informatique ",
      start: "2021",
      end: "2022",
      actions : [
        "Modules clés : Developpement Logiciel, Algorithmique Avancée, Structures de Données, Bases de Données, Réseaux Informatiques, Systèmes d'Exploitation."
      ],
    },
    {
      school: "Ecole Polytechnique Lome",
      degree: "Parcours Licence Professionnelle Genie Logiciel ",
      start: "2017",
      end: "2020",
      actions : [
        "Modules clés : Modélication UML, Analyse et Conception Orientée Objet, Développement Web (PHP, JavaScript), Bases de Données (MySQL), Gestion de Projets Informatiques.",
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
        "Développement et maintenance de deux applications web de pilotage commercial (+1000 acteurs) PHP/JS/SQL",
        "Reporting Commercial ",
        "Gestion de projets Cycle V",
        "Mise en place authentification unique SSO",
        "Migration BlueGreen PHP5 vers PHP8 avec résolution de la dette technique",
        "Administration serveur LINUX",
        "Collaboration avec les équipes métiers pour analyser les besoins, concevoir des solutions techniques adaptées et assurer la qualité du code via des revues et des tests automatisés.",
      ],
      description:"",

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
        "Developpement PHP/Laravel d'un logiciel métier de gestion de projet internes.",
        "Developpement PHP/Synfony d'une application metier de gestion d'incidents",
        "Mise en place d'automatisations via des API tierces (INSSE, RPA, DIGISIGN)",
        "Mise en place de pipelines CI/CD avec GitLab/SonarQube",
        "Test Unitaire et d'intégration",
        "Méthode de projet Agile/Scrum",
      ],
      description: "",
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
        "Développement et maintenance d'une application Flask de Gestion de Maintenance Assisté par Ordinateur (GMAO) pour le secteur IOT.",
      ],
      description: "",
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
        "développement Backend PHP/Laravel d'une solution ERP hospitalière .",
        "Développement Frontend Vue.js d'interfaces utilisateur",
        "Déploiement Cloud HDS",
        "Installation de la solution chez les clients",
      ],
      description: "",

    },
    {
      company: "SportFM",
      link: "https://www.sportfm.com",
      title: "Developpeur web",
      badges: ['freelance'],
      logo: Orange,
      start: "2020",
      end: "2021",
      actions : [
        "Freelance développement d'un site avec diffusion en direct de la radio",

      ],
      description: "",
    },
        {
      company: "MiabeSTAR",
      link: "",
      title: "Developpeur web & Mobile",
      badges: ['freelance'],
      logo: Orange,
      start: "2019",
      end: "2020",
      actions : [
        "API backent Laravel pour une plateforme de remuneration des createurs de contenus",
        "Application mobile React Native ",
        "Integration d'API de paiement "

      ],
      description: "",
    },

  ],
    skills: [
        "PHP",
        "Laravel",
        "JavaScript",
        "TypeScript",
        "Vue.js",
        "HTML",
        "CSS",
        "TailwindCSS",
        "Python",
        "FastAPI",
        "Flask",
        "Azure",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "DevOps",
        "RESTful APIs",
        "MySQL",
        "PostgreSQL",
        "NoSQL",
        "PowerBi",
        "SQL",
        "GitLab CI/CD",
        "API REST",
        "Agile / Scrum"
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
