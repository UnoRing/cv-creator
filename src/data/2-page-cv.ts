import { CV } from '@/types/cv';

export const cvData: CV = {
  informationsPersonnelles: {
    nom: "James DELLA-PORTA",
    titre: "Développeur FullStack freelance",
    localisation: "Vitré, Bretagne, France",
    contact: {
      email: "james.dellaporta@studio-010.com",
      telephone: "06 12 89 79 74",
      linkedin: "www.linkedin.com/in/j-della-porta",
      website: ""
    }
  },
  introduction: "Après mon Master gestion de projets énergies renouvelables qui ont su m'apporter des compétences de gestion de projet ainsi qu'une méthodologie scientifique, la formation professionnalisante SpringBoot/Angular suivie en 2018 m'a amené à découvrir et à rapidement m'énamourer de l'univers du développement.\n\nAu travers mes 7 années d'expérience j'ai eu l'occasion de faire mes preuves sur une large gamme de facettes techniques, de l'intégration d'outils tierces, au développement d'applis web à fort logique métier en passant par la connexion du réel au numérique et ce sur l'entièreté de la stack technique de la conception archi à l'hébergement en passant par le développement.\n\nJ'ai pu acquérir une bonne vision d'ensemble des facettes techniques du métier de développeur, qui vont de pair avec les qualités humaines nécessaires que j'ai pu démontrer dans les différents cadres de travail dont j'ai eu l'expérience.\n\nBasé à Vitré (35) je suis mobile (en fonction du lieu/projet) ou disponible pour des missions en télétravail (full ou partiel).",
  competences: [
    {
      categorie: "Langages",
      competences: [
        { nom: "Java", niveau: 5 },
        { nom: "TypeScript", niveau: 5 },
        { nom: "Kotlin", niveau: 4 },
        { nom: "JavaScript", niveau: 4 },
        { nom: "Python", niveau: 3 },
        { nom: "VB.NET", niveau: 2 },
        { nom: "PHP", niveau: 2 }
      ]
    },
    {
      categorie: "Frameworks",
      competences: [
        { nom: "Spring Boot", niveau: 5 },
        { nom: "Angular", niveau: 5 },
        { nom: "Quarkus", niveau: 4 },
        { nom: "ReactJS", niveau: 3 },
        { nom: "OpenCV", niveau: 3 },
        { nom: "Symphony", niveau: 2 }
      ]
    },
    {
      categorie: "Base de données",
      competences: [
        { nom: "PostgreSQL", niveau: 5 },
        { nom: "InfluxDB", niveau: 3 },
        { nom: "Hibernate/JPA", niveau: 5 },
        { nom: "JOOQ", niveau: 4 },
        { nom: "Flyway", niveau: 4 },
        { nom: "PostGIS", niveau: 3 }
      ]
    },
    {
      categorie: "DevOps & Outils",
      competences: [
        { nom: "Docker", niveau: 5 },
        { nom: "Git", niveau: 5 },
        { nom: "Proxmox", niveau: 3 },
        { nom: "RabbitMQ", niveau: 3 },
        { nom: "Grafana", niveau: 4 }
      ]
    },
    {
      categorie: "Soft Skills",
      competences: [
        { nom: "Travail en équipe", niveau: 5 },
        { nom: "Autonomie", niveau: 5 },
        { nom: "Créativité", niveau: 5 },
        { nom: "Organisation", niveau: 4 },
        { nom: "Adaptabilité", niveau: 4 }
      ]
    }
  ],
  experiences: [
    {
      titre: "Développeur FullStack Freelance",
      entreprise: "Likeplus",
      dateDebut: "2024-12",
      dateFin: "2025-03",
      duree: "3 mois",
      resume: "Pour cette première expérience en freelance je fus sollicité afin de renforcer l'équipe de développement de cette application web/mobile de réseau sociale intra entreprise. Avec en vue un lancement imminent j'ai pu travailler avec un deadline court sur de multiples sprints intenses afin de finaliser plusieurs briques technologiques capitales.",
      missions: [
        "Développement de la messagerie interne (Web Sockets)",
        "Développement du module critique de la facturation (intégration avec Stripe)",
        "Communication et travail d'équipe en full remote",
        "Mise en place d'un système de suivi des tâches"
      ],
      technos: ["Kotlin", "Typescript", "Quarkus", "Angular", "PostgreSQL", "Flyway"]
    },
    {
      titre: "Chef de projet informatique & informatique industrielle",
      entreprise: "Solisys-Technology",
      dateDebut: "2020-11",
      dateFin: "2024-01",
      duree: "3 ans 3 mois",
      resume: "Crée afin d'amener la société mère (PME d'automatisation industrielle) vers la modernisation technologique, je fus en charge de proposer diverses solutions innovantes dans l'objectif d'améliorer les process internes ainsi que d'accroître la compétitivité à travers leurs différents marchés. J'ai été amené à m'occuper de la gestion des serveurs,de l'intégration d'ERP et d'outils de gestion de projet, du développement d'applications web, de la réalisation de plateformes de démonstration industrielles et du management de projets et d'équipes.",
      missions: [
        "Administration système",
        "Intégration et maintenance d'ERP et outils de gestion de projet",
        "Développement d'applications web et industrielles",
        "Réalisation de plateformes de démonstration industrielles",
        "Management de projets et d'équipes, en charge du respect coûts/délais/qualité"
      ],
      technos: ["Java", "Typescript", "VB.NET", "JavaScript", "Spring Boot", "Angular", "PostgreSQL", "Docker", "Python", "OpenCV", "InfluxDB", "Grafana"]
    },
    {
      titre: "Développeur full stack",
      entreprise: "TACTfactory",
      dateDebut: "2018-06",
      dateFin: "2020-05",
      duree: "2 ans",
      resume: "Développement d'applications web à forte logique métier et lead technique sur plusieurs projets.",
      missions: [
        "Développement d'applications web avec forte logique métier (normes HACCP)",
        "Lead Dev sur projet réseau social",
        "Refonte d'architecture monolithique vers microservices",
        "Management d'une équipe de 5 développeurs juniors"
      ],
      technos: ["Java", "Typescript", "PHP", "Spring Boot", "Angular", "Symphony", "PostgreSQL", "PostGIS"]
    }
  ],
  formations: [
    {
      titre: "Formation JAVA JEE",
      etablissement: "IMIE - Ecole de la Filière Numérique",
      dateDebut: "2018-02",
      dateFin: "2018-06",
      resume: "Formation professionnalisante focalisée sur Springboot et Angular",
      competencesAcquises: ["Spring Boot", "Angular", "Java", "Web Development"]
    },
    {
      titre: "Master Gestion de projets Energies Nouvelles et Renouvelables",
      etablissement: "Nantes Université",
      dateDebut: "2014",
      dateFin: "2016",
      resume: "Master en gestion de projets énergétiques",
      competencesAcquises: ["Gestion de projet", "Analyse scientifique"]
    },
    {
      titre: "Licence Energie",
      etablissement: "Universita di Corsica",
      dateDebut: "2011",
      dateFin: "2014",
      resume: "Licence en génie climatique et management des énergies renouvelables",
      competencesAcquises: ["Gestion de projet", "Analyse scientifique"]
    }
  ],
  benevolat: [
    {
      titre: "Organisation du festival de musique Au pré du son",
      entreprise: "CHANGEONS(S) EN FESTIVAL",
      dateDebut: "2021-09",
      dateFin: "2024-09",
      duree: "3 ans",
      resume: "Organisation d'un festival de musique de 2.000 festivaliers et une équipe de 200 bénévoles pour un un budget de 75k€ au postes de trésorier, secrétaire, responsable bénévoles et accueil artistes.",
      missions: [],
      technos: ["Organisation", "Gestion de projet", "Communication", "Gestion financière"]
    },
    {
      titre: "Animateur de chantiers internationaux",
      entreprise: "Concordia Bretagne",
      dateDebut: "2012-04",
      dateFin: "2012-07",
      duree: "4 mois",
      resume: "Animation de plusieurs chantiers internationaux avec des bénévoles des plus d'une 20aine de pays (Médiation, organisation, conduite de projets)",
      missions: [],
      technos: ["Médiation", "Organisation", "Conduite de projets"]
    }
  ],
  langues: [
    {
      nom: "Anglais",
      niveau: "Bilingue ou langue natale"
    },
    {
      nom: "Français",
      niveau: "Bilingue ou langue natale"
    }
  ],
  references: [
    {
      nom: "Erwan ANGOT",
      poste: "Gérant Solisys-Technology",
      entreprise: "Solisys-Technology",
      telephone: "0768584773",
      email: "erwan.angot@solisys-technology.com"
    },
    {
      nom: "Samuel NJOH",
      poste: "Créateur société SNH",
      entreprise: "Likeplus",
      telephone: "0663247051",
      email: "samuelnjoh@gmail.com"
    }
  ]
}; 