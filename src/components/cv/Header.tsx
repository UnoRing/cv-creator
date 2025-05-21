import logo from '@/assets/logo-png.png';
import profile from '@/assets/profile.jpeg';
import { Contact } from '@/types/cv';

interface HeaderProps {
  nom: string;
  titre: string;
  localisation: string;
  contact: Contact;
}

export const Header = ({ nom, titre, localisation, contact }: HeaderProps) => {
  return (
    <div className="web-header">
      {/* Top banner with logo */}
      <div className="web-header-banner">
        <img src={logo} alt="Studio010" className="h-12" />
      </div>
      
      <div className="web-header-content">
        {/* Profile picture */}
        <img 
          src={profile} 
          alt="" 
          className="web-profile-image"
        />

        {/* Contact info */}
        <div className="flex-grow">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">{nom}</h1>
          <h2 className="text-xl text-gray-700 mb-2">{titre}</h2>
          <p className="text-gray-600 mb-3">{localisation}</p>
          
          <div className="web-contact-info">
            {contact.email && (
              <a 
                href={`mailto:${contact.email}`}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <span>📧</span>
                <span className="ml-2">{contact.email}</span>
              </a>
            )}
            {contact.telephone && (
              <a 
                href={`tel:${contact.telephone}`}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <span>📱</span>
                <span className="ml-2">{contact.telephone}</span>
              </a>
            )}
            {contact.linkedin && (
              <a 
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <span>💼</span>
                <span className="ml-2">LinkedIn</span>
              </a>
            )}
            {contact.website && (
              <a 
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <span>🌐</span>
                <span className="ml-2">{contact.website}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 