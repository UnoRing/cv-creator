import { CV } from '@/types/cv';
import { Document, Font, Image, Link, Page, pdf, StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 16,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#F7D44C',
    borderBottomStyle: 'solid',
    paddingBottom: 4,
  },
  headerLeft: {
    // flex: 1,
  },
  headerContent: {
    flexDirection: 'row',
    gap: 15,
  },
  headerInfo: {
    // flex: 1,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 0,
    borderWidth: 5,
    borderStyle: 'solid',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  title: {
    fontSize: 16,
    marginBottom: 2,
    color: '#4B5563',
  },
  location: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 5,
  },
  contactInfo: {
    flexDirection: 'column',
    gap: 5,
    marginTop: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 10,
    color: '#4B5563',
  },
  contactLink: {
    color: '#2563EB',
    textDecoration: 'underline',
  },
  mainContent: {
    flexDirection: 'column',
  },
  section: {
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 15,
  },
  skillCategory: {
    width: '18%',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#374151',
  },
  text: {
    fontSize: 10,
    marginBottom: 3,
    color: '#4B5563',
    lineHeight: 1.3,
  },
  experienceItem: {
    marginBottom: 20,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  experienceTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#111827',
  },
  experienceCompany: {
    fontSize: 11,
    color: '#4B5563',
  },
  experienceDate: {
    fontSize: 10,
    color: '#6B7280',
  },
  skillLevel: {
    flexDirection: 'row',
    gap: 1,
    marginTop: 1,
  },
  skillDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#D1D5DB',
    marginRight: 1,
  },
  skillDotFilled: {
    backgroundColor: '#2563EB',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 5,
  },
  tag: {
    backgroundColor: '#F3F4F6',
    padding: '3 6',
    borderRadius: 4,
    fontSize: 9,
    color: '#374151',
  },
  fullWidthColumn: {
    width: '100%',
  },
  languagesSection: {
    marginTop: 15,
  },
  languageItem: {
    marginBottom: 5,
  },
});

// Register fonts if needed
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/helveticaneue/v70/1Ptsg8zYS_SKggPNyC0IT4ttDfA.ttf' },
    { 
      src: 'https://fonts.gstatic.com/s/helveticaneue/v70/1Ptsg8zYS_SKggPNyC0IT4ttDfB.ttf',
      fontWeight: 'bold' 
    },
  ],
});

export const generatePdf = async (cv: CV, logoBase64: string, profileBase64: string, isTwoPage: boolean = false) => {
  const PdfDocument = () => (
    <Document>
      {isTwoPage ? (
        // Two-page layout
        <>
          {/* First Page */}
          <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <View style={styles.headerContent}>
                  <View style={{
                    width: 66,
                    height: 66,
                    borderRadius: 33,
                    backgroundColor: '#F7D44C',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 3,
                  }}>
                    <Image src={profileBase64} style={{ width: 60, height: 60, borderRadius: 30 }} />
                  </View>
                  <View style={styles.headerInfo}>
                    <Text style={styles.name}>{cv.informationsPersonnelles.nom}</Text>
                    <Text style={styles.title}>{cv.informationsPersonnelles.titre}</Text>
                    <Text style={styles.location}>{cv.informationsPersonnelles.localisation}</Text>
                    <View style={styles.contactInfo}>
                      {cv.informationsPersonnelles.contact.email && (
                        <Text style={styles.contactItem}>📧 {cv.informationsPersonnelles.contact.email}</Text>
                      )}
                      {cv.informationsPersonnelles.contact.telephone && (
                        <Text style={styles.contactItem}>📱 {cv.informationsPersonnelles.contact.telephone}</Text>
                      )}
                      {cv.informationsPersonnelles.contact.linkedin && (
                        <Link 
                          style={styles.contactItem}
                          src={`https://${cv.informationsPersonnelles.contact.linkedin}`}
                        >
                          <Text style={styles.contactLink}>
                            💼 {cv.informationsPersonnelles.contact.linkedin}
                          </Text>
                        </Link>
                      )}
                      {cv.informationsPersonnelles.contact.website && (
                        <Text style={styles.contactItem}>🌐 {cv.informationsPersonnelles.contact.website}</Text>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* Main Content */}
            <View style={styles.mainContent}>
              {/* Introduction */}
              <View style={{...styles.section, marginBottom: 15}}>
                <Text style={styles.text}>{cv.introduction}</Text>
              </View>

              {/* Skills and Languages in one section */}
              <View style={{...styles.section, marginBottom: 15}}>
                <Text style={{...styles.sectionTitle, marginBottom: 8}}>Compétences</Text>
                <View style={styles.skillsGrid}>
                  {cv.competences.map((cat, i) => (
                    <View key={i} style={styles.skillCategory}>
                      <Text style={styles.categoryTitle}>{cat.categorie}</Text>
                      {cat.competences.map((comp, j) => (
                        <View key={j} style={{ marginBottom: 2 }}>
                          <Text style={{...styles.text, marginBottom: 1}}>{comp.nom}</Text>
                          <View style={styles.skillLevel}>
                            {[...Array(5)].map((_, k) => (
                              <View
                                key={k}
                                style={{
                                  ...styles.skillDot,
                                  ...(k < comp.niveau ? styles.skillDotFilled : {})
                                }}
                              />
                            ))}
                          </View>
                        </View>
                      ))}
                    </View>
                  ))}
                </View>

                <View style={styles.languagesSection}>
                  <Text style={{...styles.categoryTitle, marginBottom: 8}}>Langues</Text>
                  {cv.langues.map((langue, i) => (
                    <View key={i} style={styles.languageItem}>
                      <Text style={styles.text}>
                        {langue.nom}
                      </Text>
                      <Text style={{...styles.text, color: '#6B7280'}}>
                        {langue.niveau}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </Page>

          {/* Second Page - All Experiences */}
          <Page size="A4" style={styles.page}>
            <View style={styles.fullWidthColumn}>
              <Text style={{...styles.sectionTitle, marginBottom: 30}}>Expériences Professionnelles</Text>
              {cv.experiences.map((exp, i) => (
                <View key={i} style={styles.experienceItem}>
                  <View style={styles.experienceHeader}>
                    <View>
                      <Text style={styles.experienceTitle}>{exp.titre}</Text>
                      <Text style={styles.experienceCompany}>{exp.entreprise}</Text>
                    </View>
                    <Text style={styles.experienceDate}>
                      ({exp.duree}) {exp.dateDebut} - {exp.dateFin}
                    </Text>
                  </View>
                  {exp.resume && <Text style={{...styles.text, marginTop: 2}}>{exp.resume}</Text>}
                  {exp.missions.map((mission, j) => (
                    <Text key={j} style={styles.text}>• {mission}</Text>
                  ))}
                  <View style={{...styles.tagContainer, marginTop: 3}}>
                    {exp.technos.map((techno, j) => (
                      <Text key={j} style={styles.tag}>{techno}</Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </Page>

          {/* Third Page - Formation, Bénévolat, and References */}
          <Page size="A4" style={styles.page}>
            <View style={styles.fullWidthColumn}>
              {/* Formation */}
              <View style={{...styles.section, marginBottom: 15}}>
                <Text style={{...styles.sectionTitle, marginBottom: 8}}>Formation</Text>
                {cv.formations.map((formation, i) => (
                  <View key={i} style={styles.experienceItem}>
                    <View style={styles.experienceHeader}>
                      <View>
                        <Text style={styles.experienceTitle}>{formation.titre}</Text>
                        <Text style={styles.experienceCompany}>{formation.etablissement}</Text>
                      </View>
                      <Text style={styles.experienceDate}>
                        {formation.dateDebut} - {formation.dateFin}
                      </Text>
                    </View>
                    {formation.resume && <Text style={{...styles.text, marginTop: 2}}>{formation.resume}</Text>}
                    {formation.competencesAcquises && (
                      <View style={{...styles.tagContainer, marginTop: 3}}>
                        {formation.competencesAcquises.map((comp, j) => (
                          <Text key={j} style={styles.tag}>{comp}</Text>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>

              {/* Bénévolat if exists */}
              {cv.benevolat.length > 0 && (
                <View style={{...styles.section, marginBottom: 15}}>
                  <Text style={{...styles.sectionTitle, marginBottom: 8}}>Bénévolat</Text>
                  {cv.benevolat.map((benev, i) => (
                    <View key={i} style={styles.experienceItem}>
                      <View style={styles.experienceHeader}>
                        <View>
                          <Text style={styles.experienceTitle}>{benev.titre}</Text>
                          <Text style={styles.experienceCompany}>{benev.entreprise}</Text>
                        </View>
                        <Text style={styles.experienceDate}>
                          {benev.dateDebut} - {benev.dateFin}
                        </Text>
                      </View>
                      {benev.resume && <Text style={{...styles.text, marginTop: 2}}>{benev.resume}</Text>}
                      {benev.missions && benev.missions.map((mission, j) => (
                        <Text key={j} style={styles.text}>• {mission}</Text>
                      ))}
                      {benev.technos && (
                        <View style={{...styles.tagContainer, marginTop: 3}}>
                          {benev.technos.map((techno, j) => (
                            <Text key={j} style={styles.tag}>{techno}</Text>
                          ))}
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}

              {/* References */}
              {cv.references && cv.references.length > 0 && (
                <View style={{...styles.section, marginBottom: 15}}>
                  <Text style={{...styles.sectionTitle, marginBottom: 8}}>Références</Text>
                  {cv.references.map((ref, i) => (
                    <View key={i} style={styles.experienceItem}>
                      <Text style={styles.experienceTitle}>{ref.nom}</Text>
                      <Text style={styles.experienceCompany}>{ref.poste} - {ref.entreprise}</Text>
                      <View style={{flexDirection: 'row', gap: 15, marginTop: 3}}>
                        {ref.telephone && <Text style={styles.text}>📱 {ref.telephone}</Text>}
                        {ref.email && <Text style={styles.text}>📧 {ref.email}</Text>}
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </Page>
        </>
      ) : (
        // One-page layout
        <Page size="A4" style={styles.page}>
          {/* Header */}
          <View style={{ ...styles.header, flexDirection: 'row', alignItems: 'flex-start' }}>
            {/* Left: Profile picture */}
            <View style={{ width: '20%', alignItems: 'center', justifyContent: 'center' }}>
              <View style={{
                width: 65,
                height: 65,
                borderRadius: 25,
                backgroundColor: '#F7D44C',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 3,
              }}>
                <Image src={profileBase64} style={{ width: 60, height: 60, borderRadius: 30 }} />
              </View>
            </View>
            {/* Middle: Name, title, location */}
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 10, paddingRight: 10 }}>
              <Text style={styles.name}>{cv.informationsPersonnelles.nom}</Text>
              <Text style={styles.title}>{cv.informationsPersonnelles.titre}</Text>
              <Text style={styles.location}>{cv.informationsPersonnelles.localisation}</Text>
            </View>
            {/* Right: Contact info */}
            <View style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
              {cv.informationsPersonnelles.contact.email && (
                <Text style={styles.contactItem}>📧 {cv.informationsPersonnelles.contact.email}</Text>
              )}
              {cv.informationsPersonnelles.contact.telephone && (
                <Text style={styles.contactItem}>📱 {cv.informationsPersonnelles.contact.telephone}</Text>
              )}
              {cv.informationsPersonnelles.contact.linkedin && (
                <Link 
                  style={styles.contactItem}
                  src={`https://${cv.informationsPersonnelles.contact.linkedin}`}
                >
                  <Text style={styles.contactLink}>
                    💼 {cv.informationsPersonnelles.contact.linkedin}
                  </Text>
                </Link>
              )}
            </View>
          </View>

          {/* Main Content - Two columns */}
          <View style={{...styles.mainContent, flexDirection: 'row', gap: 10}}>
            {/* Left column (1/4 width) */}
            <View style={{width: '20%'}}>
              {/* Skills */}
              <View style={{...styles.section, marginBottom: 15}}>
                <Text style={{...styles.sectionTitle, marginBottom: 8}}>Compétences</Text>
                {cv.competences.map((cat, i) => (
                  <View key={i} style={{marginBottom: 10}}>
                    <Text style={styles.categoryTitle}>{cat.categorie}</Text>
                    {cat.competences.map((comp, j) => (
                      <View key={j} style={{marginBottom: 2}}>
                        <Text style={{...styles.text, marginBottom: 1}}>{comp.nom}</Text>
                        <View style={styles.skillLevel}>
                          {[...Array(5)].map((_, k) => (
                            <View
                              key={k}
                              style={{
                                ...styles.skillDot,
                                ...(k < comp.niveau ? styles.skillDotFilled : {})
                              }}
                            />
                          ))}
                        </View>
                      </View>
                    ))}
                  </View>
                ))}

                {/* Languages */}
                <View style={{marginTop: 15}}>
                  <Text style={{...styles.categoryTitle, marginBottom: 8}}>Langues</Text>
                  {cv.langues.map((langue, i) => (
                    <View key={i} style={styles.languageItem}>
                      <Text style={styles.text}>{langue.nom}</Text>
                      <Text style={{...styles.text, color: '#6B7280'}}>{langue.niveau}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            {/* Right column (3/4 width) */}
            <View style={{width: '80%'}}>
              {/* Experiences */}
              <View style={{...styles.section, marginBottom: 6}}>
                <Text style={{...styles.sectionTitle, marginBottom: 8}}>Expériences Professionnelles</Text>
                {cv.experiences.map((exp, i) => (
                  <View key={i} style={{...styles.experienceItem, marginBottom: 6}}>
                    <View style={styles.experienceHeader}>
                      <View>
                        <Text style={styles.experienceTitle}>{exp.titre}</Text>
                        <Text style={styles.experienceCompany}>{exp.entreprise}</Text>
                      </View>
                      <Text style={styles.experienceDate}>
                        ({exp.duree}) {exp.dateDebut} - {exp.dateFin}
                      </Text>
                    </View>
                    {exp.resume && <Text style={{...styles.text, marginTop: 2}}>{exp.resume}</Text>}
                    {exp.missions.map((mission, j) => (
                      <Text key={j} style={styles.text}>• {mission}</Text>
                    ))}
                    <View style={{...styles.tagContainer, marginTop: 3}}>
                      {exp.technos.map((techno, j) => (
                        <Text key={j} style={styles.tag}>{techno}</Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>

              {/* Formation */}
              <View style={{...styles.section, marginBottom: 6}}>
                <Text style={{...styles.sectionTitle, marginBottom: 8}}>Formation</Text>
                {cv.formations.map((formation, i) => (
                  <View key={i} style={{...styles.experienceItem, marginBottom: 2}}>
                    <View style={styles.experienceHeader}>
                      <View>
                        <Text style={styles.experienceTitle}>{formation.titre}</Text>
                        <Text style={styles.experienceCompany}>{formation.etablissement}</Text>
                      </View>
                      <Text style={styles.experienceDate}>
                        {formation.dateDebut} - {formation.dateFin}
                      </Text>
                    </View>
                    {formation.resume && <Text style={{...styles.text, marginTop: 2}}>{formation.resume}</Text>}
                  </View>
                ))}
              </View>

              {/* Benevolat condensed */}
              {cv.benevolat && cv.benevolat.length > 0 && (
                <View style={{...styles.section, marginBottom: 6}}>
                  <Text style={{...styles.sectionTitle, marginBottom: 8}}>Bénévolat</Text>
                  {cv.benevolat.map((benev, i) => (
                    <View key={i} style={{marginBottom: 6}}>
                      <Text style={styles.categoryTitle}>{benev.titre}</Text>
                      <Text style={styles.text}>{benev.entreprise}</Text>
                      <Text style={{...styles.text, color: '#6B7280'}}>{benev.duree} ({benev.dateDebut} - {benev.dateFin})</Text>
                      <Text style={styles.text}>{benev.resume}</Text>
                      <View style={{...styles.tagContainer, marginTop: 3}}>
                        {benev.technos && benev.technos.map((tech, j) => (
                          <Text key={j} style={styles.tag}>{tech}</Text>
                        ))}
                      </View>
                    </View>
                  ))}
                </View>
              )}

              {/* References */}
              {cv.references && cv.references.length > 0 && (
                <View style={{...styles.section, marginBottom: 0}}>
                  <Text style={{...styles.sectionTitle, marginBottom: 6}}>Références</Text>
                  {cv.references.map((ref, i) => (
                    <View key={i} style={{...styles.experienceItem, marginBottom: 0}}>
                      <Text style={styles.experienceTitle}>{ref.nom}</Text>
                      <Text style={styles.experienceCompany}>{ref.poste} - {ref.entreprise}</Text>
                      <View style={{flexDirection: 'row', gap: 15, marginTop: 3}}>
                        {ref.telephone && <Text style={styles.text}>📱 {ref.telephone}</Text>}
                        {ref.email && <Text style={styles.text}>📧 {ref.email}</Text>}
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        </Page>
      )}
    </Document>
  );

  try {
    const blob = await pdf(<PdfDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}; 