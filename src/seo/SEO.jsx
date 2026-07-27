import React from 'react';
import { Helmet } from 'react-helmet-async';
import StructuredData from './StructuredData';
import { SEO_CONSTANTS } from './constants';

/**
 * SEO Component
 * Reusable page-level SEO component injecting custom title, meta descriptions, canonical URLs, OG tags, and JSON-LD structured data.
 */
const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  noIndex = false
}) => {
  const pageTitle = title || SEO_CONSTANTS.defaultTitle;
  const pageDescription = description || SEO_CONSTANTS.defaultDescription;
  const pageKeywords = keywords || SEO_CONSTANTS.defaultKeywords;
  const pageImage = ogImage || SEO_CONSTANTS.defaultOgImage;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : SEO_CONSTANTS.siteUrl);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href={currentUrl} />

        {/* Robots Indexing Directive */}
        {noIndex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        )}

        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:type" content={ogType} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

      {/* Schema.org Structured Data */}
      <StructuredData />
    </>
  );
};

export default SEO;
