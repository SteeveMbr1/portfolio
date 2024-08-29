import { WithContext, Organization } from "schema-dts";

function JsonLd() {
    const jsonLd: WithContext<Organization> = {
        "@context": "https://schema.org",
        "@type": "Organization",
    
        name: "Steeve MOMBRUN - Portfolio",
        telephone: "+33 (0)6 65 75 10 77",
        url: "https://portfolio-steeve-mombrun.vercel.app/",
        description: "Portfolio de Steeve MOMBRUN, développeur web à Lyon",
        image: "",
        address: {
            "@type": "PostalAddress",
            streetAddress: "1 rue de la République",
            addressLocality: "Lyon",
            addressCountry: "FR",
            addressRegion: "Auvergne-Rhône-Alpes",
            postalCode: "69000",
        }
    };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  )
}

export default JsonLd