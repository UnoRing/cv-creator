import { Experience as ExperienceType } from '@/types/cv';

interface ExperienceProps {
  experiences: ExperienceType[];
  titre?: string;
}

export const Experiences = ({ experiences, titre = "Expériences Professionnelles" }: ExperienceProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{titre}</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{experience.titre}</h3>
                <p className="text-gray-600">{experience.entreprise}</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <div>{experience.dateDebut} - {experience.dateFin}</div>
                <div>{experience.duree}</div>
              </div>
            </div>
            {experience.resume && (
              <p className="text-gray-700 mb-4">{experience.resume}</p>
            )}
            {experience.missions.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Missions :</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {experience.missions.map((mission, i) => (
                    <li key={i}>{mission}</li>
                  ))}
                </ul>
              </div>
            )}
            {experience.technos.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {experience.technos.map((techno, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                    {techno}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 