import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import Section from '../../components/ui/section/Section';
import Heading from '../../components/ui/typography/Heading';
import Button from '../../components/ui/buttons/Button';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <PageWrapper 
      title="404 - Page Not Found | Pavna International School"
      description="The requested page could not be found."
    >
      <Section variant="light" padding="lg" className="min-h-[70vh] flex items-center justify-center text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <span className="text-6xl font-black text-[#123458] block">404</span>
          
          <Heading variant="h1" className="text-slate-900">
            Page Not Found
          </Heading>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Link to="/">
              <Button variant="primary" size="lg" icon={Home} iconPosition="left">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default NotFoundPage;
