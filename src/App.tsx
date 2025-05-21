import { useState } from 'react';
import { generatePdf } from './components/generators/PdfGenerator';
import { OnePageLayout } from './components/layouts/OnePageLayout';
import { TwoPageLayout } from './components/layouts/TwoPageLayout';
import { cvDataOnePage } from './data/1-page-cv';
import { cvData } from './data/2-page-cv';
import './styles/web.css';
import { convertImageToBase64 } from './utils/imageUtils';

export default function App() {
  const [isTwoPage, setIsTwoPage] = useState(false);
  const currentCvData = isTwoPage ? cvData : cvDataOnePage;

  const handlePdfDownload = async () => {
    try {
      // Import images directly
      const logo = await import('@/assets/logo-png.png');
      const profile = await import('@/assets/profile.jpeg');
      
      // Convert using the default property of the imports
      const logoBase64 = await convertImageToBase64(logo.default);
      const profileBase64 = await convertImageToBase64(profile.default);
      
      await generatePdf(currentCvData, logoBase64, profileBase64, isTwoPage);
    } catch (error) {
      console.error('Error handling PDF download:', error);
      alert('Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Format selection */}
      <div className="max-w-5xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end space-x-4 mb-8">
          <button
            onClick={() => setIsTwoPage(!isTwoPage)}
            className="px-4 py-2 rounded-full bg-white hover:bg-gray-50 transition-colors"
          >
            {isTwoPage ? 'Version 1 page' : 'Version 2 pages'}
          </button>
          <button
            onClick={handlePdfDownload}
            className="px-4 py-2 rounded-full bg-white hover:bg-gray-50 transition-colors"
          >
            Télécharger PDF
          </button>
        </div>
      </div>

      {/* CV Layout */}
      {isTwoPage ? (
        <TwoPageLayout cvData={currentCvData} />
      ) : (
        <OnePageLayout cvData={currentCvData} />
      )}
    </div>
  );
} 