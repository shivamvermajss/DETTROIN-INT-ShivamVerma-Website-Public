import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '../ui/buttons/Button';

/**
 * FooterNewsletter Component
 * Newsletter subscription card with email regex validation, loading, success, and error UI states.
 */
const FooterNewsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // Simulate short network delay for UI response
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setErrorMessage('');
    }, 800);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-lg text-left">
      <div className="max-w-xl">
        <h3 className="text-xl font-bold text-white mb-2">
          Stay Updated
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm mb-5 leading-relaxed">
          Subscribe to receive official school news, event announcements, and admission updates directly to your inbox.
        </p>

        {status === 'success' ? (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>Thank you! You have successfully subscribed to Pavna School updates.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email Address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email address..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={Send}
              iconPosition="right"
              isLoading={status === 'loading'}
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </Button>
          </form>
        )}

        {status === 'error' && (
          <div className="mt-2.5 flex items-center gap-1.5 text-rose-400 text-xs font-semibold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FooterNewsletter;
