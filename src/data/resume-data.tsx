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
    "I have a passion for delivering solutions to various industries, including commerce, insurance, and project management, through the use of technological solutions. I apply my skills to the creation of advanced software solutions. My expertise spans from design to implementation, with a particular focus on solving challenges that businesses may encounter in their daily tasks.",
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
      school: "SUPINFO",
      degree: "Master's in Data Engineering",
      start: "2023",
      end: "2025",
    },
    {
      school: "Université du Havre Normandie",
      degree: "Bachelor's degree in Computer Science",
      start: "2021",
      end: "2022",
    },
    {
      school: "Ecole Polytechnique  Lome",
      degree: "Professional Bachelor's Program in Software Engineering",
      start: "2017",
      end: "2020",
    }
  ],
  work: [
    {
      company: "Malakoff Humanis",
      link: "https://www.malakoffhumanis.com/",
      badges: ["Apprenticeship"],
      title: "Consultant Software ",
      logo: ParabolLogo,
      start: "2023",
      end: "2025",
      description:
        "In my role as a development manager for a web-based software dedicated to activity tracking within a CRM for the sales field, I oversee the continuous improvement of the system and generate analytical reports through SQL data manipulation.",
    },
    {
      company: "Orange France",
      link: "https://www.orange.fr",
      badges: ["Hybrid"],
      title: "Laravel PHP/Developer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
      "As a Lead Developer, I was tasked with maintaining and evolving a project management software. I integrated various automation APIs and successfully led integrations, such as Electronic Signature functionality." ,
    },
    {
      company: "Engenys",
      link: "https://engenys.com/",
      badges: ["Internship"],
      title: "Software Engineer",
      logo: JojoMobileLogo,
      start: "2022",
      end: "2022",
      description:
      "Evolutionary maintenance of a Python web-based CMMS (Computerized Maintenance Management System) application using the Flask micro-framework, along with Jinja and Tailwind CSS technologies, and Docker integration.",
    },
    {
      company: "Clinicaa",
      link: "https://clinicaa-erp.com/",
      badges: [],
      title: "Junior Software Engineer",
      logo: NSNLogo,
      start: "2019",
      end: "2021",
      description: "Developer position within a team dedicated to creating a comprehensive hospital solution, developed entirely from scratch. My role involved designing and coding crucial features, contributing to the construction of a robust system tailored to the specific needs of the healthcare sector. My commitment to this project enhanced my development skills and deepened my understanding of the complex requirements of medical solutions.",
    },
    {
      company: "Miabe Star",
      link: "",
      badges: [],
      title: "Junior Laravel Developper",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description: "Design and development of backend APIs for a mobile application.",
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
        href: ""
      },
    }
    
    
  ],
} as const;
