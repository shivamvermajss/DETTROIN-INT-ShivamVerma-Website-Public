import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/buttons/Button';
import { aboutData } from './AboutData';

/**
 * AboutCTA Component
 * Renders the Call-to-Action button navigating users to the main About page.
 */
const AboutCTA = () => {
  const { cta } = aboutData;

  return (
    <div className="mt-8 pt-4 flex flex-wrap items-center gap-4">
      <Link to={cta.path} className="focus:outline-none">
        <Button
          variant="primary"
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
          aria-label="Learn more about Pavna International School"
        >
          {cta.label}
        </Button>
      </Link>
    </div>
  );
};

export default AboutCTA;
