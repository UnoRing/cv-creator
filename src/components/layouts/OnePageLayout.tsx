import { CV } from '@/types/cv';
import { Competences } from '../cv/Competences';
import { Experiences } from '../cv/Experiences';
import { Formations } from '../cv/Formations';
import { Header } from '../cv/Header';
import { Langues } from '../cv/Langues';
import { References } from '../cv/References';

interface OnePageLayoutProps {
  cvData: CV;
}

export const OnePageLayout = ({ cvData }: OnePageLayoutProps) => {
  return (
    <div className="one-page-layout">
      <Header
        nom={cvData.informationsPersonnelles.nom}
        titre={cvData.informationsPersonnelles.titre}
        localisation={cvData.informationsPersonnelles.localisation}
        contact={cvData.informationsPersonnelles.contact}
      />

      <div className="grid grid-cols-4 gap-6">
        {/* Left column (1/4 width) */}
        <div className="col-span-1 space-y-6">
          <Competences competences={cvData.competences} />
          <Langues langues={cvData.langues} />
          {cvData.benevolat.length > 0 && (
            <div className="web-section">
              <h2 className="text-lg font-bold mb-4">Bénévolat</h2>
              {cvData.benevolat.map((benev, i) => (
                <div key={i} className="mb-4">
                  <h3 className="font-semibold text-sm">{benev.titre}</h3>
                  <p className="text-sm text-gray-600">{benev.entreprise}</p>
                  <p className="text-xs text-gray-500 mb-2">{benev.duree} ({benev.dateDebut} - {benev.dateFin})</p>
                  <p className="text-sm mb-2">{benev.resume}</p>
                  <div className="flex flex-wrap gap-1">
                    {benev.technos.map((tech, j) => (
                      <span key={j} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right column (3/4 width) */}
        <div className="col-span-3 space-y-6">
          <Experiences experiences={cvData.experiences} />
          <Formations formations={cvData.formations} />
          <References references={cvData.references} />
        </div>
      </div>
    </div>
  );
}; 