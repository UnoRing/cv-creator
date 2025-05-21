interface IntroductionProps {
  texte: string;
}

export const Introduction = ({ texte }: IntroductionProps) => {
  const paragraphs = texte.split('\n\n');
  
  return (
    <div className="mb-8 bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">À propos</h2>
      <div className="text-gray-700 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}; 