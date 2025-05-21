import { Langue } from '@/types/cv';

interface LanguesProps {
  langues: Langue[];
}

export const Langues = ({ langues }: LanguesProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Langues</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-3">
          {langues.map((langue, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{langue.nom}</span>
              <span className="text-gray-600">{langue.niveau}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 