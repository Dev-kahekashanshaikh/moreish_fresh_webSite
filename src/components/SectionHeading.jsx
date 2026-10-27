import React from 'react';

export const SectionHeading = ({
  eyebrow,
  title,
  intro,
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`section-heading-wrap text-${align} ${className}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
};
