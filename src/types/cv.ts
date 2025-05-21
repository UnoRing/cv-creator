export interface Contact {
  email: string;
  telephone: string;
  website?: string;
  linkedin?: string;
  github?: string;
}

export interface Competence {
  categorie: string;
  competences: Array<{
    nom: string;
    niveau: number; // 1-5
  }>;
}

export interface Experience {
  titre: string;
  entreprise: string;
  dateDebut: string;
  dateFin: string;
  duree: string;
  resume: string;
  missions: string[];
  technos: string[];
}

export interface Formation {
  titre: string;
  etablissement: string;
  dateDebut: string;
  dateFin: string;
  resume: string;
  competencesAcquises: string[];
}

export interface Langue {
  nom: string;
  niveau: string;
}

export interface Reference {
  nom: string;
  entreprise: string;
  telephone?: string;
  email?: string;
  poste?: string;
}

export interface CV {
  informationsPersonnelles: {
    nom: string;
    titre: string;
    contact: Contact;
    localisation: string;
  };
  introduction: string;
  competences: Competence[];
  experiences: Experience[];
  formations: Formation[];
  benevolat: Experience[];
  langues: Langue[];
  references: Reference[];
} 