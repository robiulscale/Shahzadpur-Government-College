import React from 'react';

interface CollegeLogoProps {
  className?: string;
  size?: number;
}

export const CollegeLogo: React.FC<CollegeLogoProps> = ({ className = '', size = 56 }) => {
  return (
    <img
      src="/college-logo.png"
      alt="শাহজাদপুর সরকারি কলেজ প্রতীক - Shahzadpur Government College Crest"
      width={size}
      height={size}
      className={`shrink-0 object-contain rounded-full shadow-xs ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      loading="eager"
    />
  );
};
