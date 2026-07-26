import React from 'react';

const Heading = ({ level = 1, children, className = '' }) => {
  const Tag = `h${level}`;
  return <Tag className={`font-bold ${className}`}>{children || "Heading Placeholder"}</Tag>;
};

export default Heading;
