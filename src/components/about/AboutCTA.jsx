import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/buttons/Button';
import { aboutData } from './AboutData';

/**
 * AboutCTA Component
 * Renders the Call-to-Action button smoothly scrolling to Academic Programs.
 */
const AboutCTA = () => {
  const { cta } = aboutData;

  return (
    <div className="mt-6 pt-2 flex flex-wrap items-center gap-4">
      <ScrollLink to="academics" spy={true} smooth={true} offset={-80} duration={500} className="cursor-pointer">
        <Button
          variant="primary"
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
          aria-label="Explore Pavna School Academic Programs"
        >
          {cta.label}
        </Button>
      </ScrollLink>
    </div>
  );
};

export default AboutCTA;
