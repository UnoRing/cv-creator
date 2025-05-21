import { Competence } from '@/types/cv';

interface CompetencesProps {
  competences: Competence[];
}

export const Competences = ({ competences }: CompetencesProps) => {
  return (
    <div className="web-section">
      <h2 className="text-xl font-semibold mb-4">Compétences</h2>
      <div className="web-skills">
        {competences.map((categorie, index) => (
          <div key={index} className="web-skill-category">
            <h3 className="text-lg font-medium mb-3">{categorie.categorie}</h3>
            <div className="space-y-2">
              {categorie.competences.map((competence, i) => (
                <div key={i} className="web-skill-item">
                  <span className="text-gray-700">{competence.nom}</span>
                  <div className="web-skill-dots">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className={`web-skill-dot ${j < competence.niveau ? 'filled' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 