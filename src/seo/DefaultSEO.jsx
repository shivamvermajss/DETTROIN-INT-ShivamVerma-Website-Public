import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONSTANTS } from './constants';

/**
 * DefaultSEO Component
 * Provides global fallback meta tags using react-helmet-async.
 */
const DefaultSEO = () => {
  return (
    <Helmet
      defaultTitle={SEO_CONSTANTS.defaultTitle}
      titleTemplate={`%s | ${SEO_CONSTANTS.siteName}`}
    >
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={SEO_CONSTANTS.themeColor} />
      <meta name="description" content={SEO_CONSTANTS.defaultDescription} />
      <meta name="keywords" content={SEO_CONSTANTS.defaultKeywords} />
      <meta name="author" content={SEO_CONSTANTS.author} />

      {/* Open Graph Tags */}
      <meta property="og:site_name" content={SEO_CONSTANTS.siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={SEO_CONSTANTS.defaultTitle} />
      <meta property="og:description" content={SEO_CONSTANTS.defaultDescription} />
      <meta property="og:image" content={SEO_CONSTANTS.defaultOgImage} />
      <meta property="og:url" content={SEO_CONSTANTS.siteUrl} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SEO_CONSTANTS.twitterHandle} />
      <meta name="twitter:title" content={SEO_CONSTANTS.defaultTitle} />
      <meta name="twitter:description" content={SEO_CONSTANTS.defaultDescription} />
      <meta name="twitter:image" content={SEO_CONSTANTS.defaultOgImage} />
    </Helmet>
  );
};

export default DefaultSEO;
