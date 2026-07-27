import React from 'react';
import { SEO_CONSTANTS } from './constants';

/**
 * StructuredData Component
 * Renders Schema.org JSON-LD EducationalOrganization metadata for search engine indexing.
 */
const StructuredData = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': SEO_CONSTANTS.siteName,
    'alternateName': 'DPS Aligarh (Formerly)',
    'url': SEO_CONSTANTS.siteUrl,
    'logo': `${SEO_CONSTANTS.siteUrl}/apple-touch-icon.png`,
    'image': SEO_CONSTANTS.defaultOgImage,
    'description': SEO_CONSTANTS.defaultDescription,
    'foundingDate': '1998',
    'telephone': SEO_CONSTANTS.contact.phone,
    'email': SEO_CONSTANTS.contact.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': SEO_CONSTANTS.contact.streetAddress,
      'addressLocality': SEO_CONSTANTS.contact.addressLocality,
      'addressRegion': SEO_CONSTANTS.contact.addressRegion,
      'postalCode': SEO_CONSTANTS.contact.postalCode,
      'addressCountry': SEO_CONSTANTS.contact.addressCountry
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': SEO_CONSTANTS.contact.geo.latitude,
      'longitude': SEO_CONSTANTS.contact.geo.longitude
    },
    'sameAs': SEO_CONSTANTS.socialLinks,
    'priceRange': '₹₹₹'
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaData)}
    </script>
  );
};

export default StructuredData;
