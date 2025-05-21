import { CV } from '@/types/cv';

export const cvDataOnePage: CV = {
  informationsPersonnelles: {
    nom: "James DELLA-PORTA",
    titre: "Développeur FullStack",
    localisation: "Vitré, Bretagne, France",
    contact: {
      email: "dellapjames@gmail.com",
      telephone: "06 12 89 79 74",
      linkedin: "www.linkedin.com/in/j-della-porta",
      website: ""
    }
  },
  introduction: "", // Removed for 1-page version
  competences: [
    {
      categorie: "Langages & Frameworks",
      competences: [
        { nom: "Java/Spring Boot", niveau: 5 },
        { nom: "TypeScript/Angular", niveau: 5 },
        { nom: "Kotlin/Quarkus", niveau: 4 },
        { nom: "JavaScript/React", niveau: 3 },
        { nom: "Python/OpenCV", niveau: 3 }
      ]
    },
    {
      categorie: "Base de données & DevOps",
      competences: [
        { nom: "PostgreSQL/PostGIS", niveau: 5 },
        { nom: "Docker/Git", niveau: 5 },
        { nom: "Hibernate/JPA/JOOQ", niveau: 5 },
        { nom: "InfluxDB/Grafana", niveau: 3 }
      ]
    },
    {
      categorie: "Soft Skills",
      competences: [
        { nom: "Travail en équipe", niveau: 5 },
        { nom: "Autonomie", niveau: 5 },
        { nom: "Créativité", niveau: 5 },
        { nom: "Organisation", niveau: 4 }
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
      resume: "Renforcement de l'équipe de développement d'une application web/mobile de réseau social intra-entreprise.",
      missions: [
        "Développement de la messagerie interne (WebSockets)",
        "Développement du module de facturation (Stripe)",
        "Communication et travail d'équipe en full remote"
      ],
      technos: ["Kotlin", "Typescript", "Quarkus", "Angular", "PostgreSQL"]
    },
    {
      titre: "Chef de projet informatique",
      entreprise: "Solisys-Technology",
      dateDebut: "2020-11",
      dateFin: "2024-01",
      duree: "3 ans 3 mois",
      resume: "Gestion des serveurs, intégration d'ERP, développement d'applis web et industrielles, management de projets.",
      missions: [
        "Administration système et intégration d'ERP",
        "Développement d'applications web et industrielles",
        "Management de projets et d'équipes"
      ],
      technos: ["Java", "Typescript", "Spring Boot", "Angular", "PostgreSQL", "Docker"]
    },
    {
      titre: "Développeur full stack",
      entreprise: "TACTfactory",
      dateDebut: "2018-06",
      dateFin: "2020-05",
      duree: "2 ans",
      resume: "Développement d'applications web à forte logique métier et lead technique. Refonte d'architecture monolithique vers microservices.",
      missions: [
        "Développement d'applications web (normes HACCP)",
        "Refonte d'architecture vers microservices"
      ],
      technos: ["Java", "Typescript", "Spring Boot", "Angular", "PostgreSQL"]
    }
  ],
  formations: [
    {
      titre: "Formation JAVA JEE",
      etablissement: "IMIE - Ecole de la Filière Numérique",
      dateDebut: "2018-02",
      dateFin: "2018-06",
      resume: "Formation professionnalisante Springboot/Angular",
      competencesAcquises: ["Spring Boot", "Angular", "Java"]
    },
    {
      titre: "Master Gestion de projets Energies Nouvelles",
      etablissement: "Nantes Université",
      dateDebut: "2014",
      dateFin: "2016",
      resume: "Master en gestion de projets énergétiques",
      competencesAcquises: ["Gestion de projet"]
    }
  ],
  benevolat: [
    {
      titre: "Festival Au pré du son",
      entreprise: "CHANGEONS(S) EN FESTIVAL",
      dateDebut: "2021-09",
      dateFin: "2024-09",
      duree: "3 ans",
      resume: "Organisation festival musique (2000 festivaliers, 200 bénévoles, 80k€)",
      missions: [],
      technos: ["Organisation", "Gestion de projet", "Communication", "Gestion financière"]
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
    }
  ]
}; 