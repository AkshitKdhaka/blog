export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Genius Labs",
    url: "https://geniuslabs.edu",
    logo: "https://blog.geniuslabs.edu/logo.png",
    sameAs: [
      "https://facebook.com/geniuslabs",
      "https://twitter.com/geniuslabs",
      "https://instagram.com/geniuslabs",
      "https://linkedin.com/company/geniuslabs",
      "https://youtube.com/c/geniuslabs",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "info@geniuslabs.edu",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Education Street",
      addressLocality: "Learning City",
      addressRegion: "ED",
      postalCode: "12345",
      addressCountry: "US",
    },
    description:
      "Genius Labs provides innovative educational programs and resources for children to explore STEM, arts, and creative thinking in a fun and engaging environment.",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
}

