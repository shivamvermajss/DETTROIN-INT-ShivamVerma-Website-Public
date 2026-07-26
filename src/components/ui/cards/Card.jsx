import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`p-6 bg-white rounded-2xl border border-slate-200 ${className}`}>
      {children || "Card Placeholder"}
    </div>
  );
};

export default Card;
