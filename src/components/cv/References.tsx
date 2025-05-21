import { Reference } from '@/types/cv';

interface ReferencesProps {
  references: Reference[];
}

export const References = ({ references }: ReferencesProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Références</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((ref, index) => (
            <div key={index} className="space-y-1">
              <h3 className="font-medium text-gray-900">{ref.nom}</h3>
              <p className="text-sm text-gray-600">
                {ref.poste && `${ref.poste} - `}{ref.entreprise}
              </p>
              {ref.email && (
                <a 
                  href={`mailto:${ref.email}`}
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                  <span>📧</span>
                  <span className="ml-2">{ref.email}</span>
                </a>
              )}
              {ref.telephone && (
                <a 
                  href={`tel:${ref.telephone}`}
                  className="flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                  <span>📱</span>
                  <span className="ml-2">{ref.telephone}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 