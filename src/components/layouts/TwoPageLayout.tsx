import { CV } from '@/types/cv';
import { Competences } from '../cv/Competences';
import { Experiences } from '../cv/Experiences';
import { Formations } from '../cv/Formations';
import { Header } from '../cv/Header';
import { Introduction } from '../cv/Introduction';
import { Langues } from '../cv/Langues';
import { References } from '../cv/References';

interface TwoPageLayoutProps {
  cvData: CV;
}

export const TwoPageLayout = ({ cvData }: TwoPageLayoutProps) => {
  return (
    <div className="web-layout">
      <Header
        nom={cvData.informationsPersonnelles.nom}
        titre={cvData.informationsPersonnelles.titre}
        localisation={cvData.informationsPersonnelles.localisation}
        contact={cvData.informationsPersonnelles.contact}
      />

      <div className="web-grid">
        {/* Left column */}
        <div className="space-y-6">
          <Competences competences={cvData.competences} />
          <Langues langues={cvData.langues} />
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <Introduction texte={cvData.introduction} />
          <Experiences experiences={cvData.experiences} />
          <Formations formations={cvData.formations} />
          {cvData.benevolat.length > 0 && (
            <Experiences 
              experiences={cvData.benevolat} 
              titre="Bénévolat"
            />
          )}
          <References references={cvData.references} />
        </div>
      </div>
    </div>
  );
}; 