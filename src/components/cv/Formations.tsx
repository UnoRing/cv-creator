import { Formation } from '@/types/cv';

interface FormationsProps {
  formations: Formation[];
}

export const Formations = ({ formations }: FormationsProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Formation</h2>
      <div className="space-y-6">
        {formations.map((formation, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{formation.titre}</h3>
                <p className="text-gray-600">{formation.etablissement}</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                {formation.dateDebut} - {formation.dateFin}
              </div>
            </div>
            {formation.resume && (
              <p className="text-gray-700 mb-4">{formation.resume}</p>
            )}
            {formation.competencesAcquises.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Compétences acquises :</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {formation.competencesAcquises.map((competence, i) => (
                    <li key={i}>{competence}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 