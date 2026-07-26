import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ title = "Pavna International School", description = "Pavna International School Aligarh" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEOHead;
