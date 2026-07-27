import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import ImageWrapper from '../ui/image/ImageWrapper';
import { footerData } from './FooterData';

/**
 * CampusMapCard Component
 * Displays a campus location preview card with photo thumbnail, address, and Google Maps external link.
 */
const CampusMapCard = () => {
  const { mapCard } = footerData;
  const { title, locationName, image, buttonText, mapsUrl } = mapCard;

  return (
    <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 shadow-lg flex flex-col sm:flex-row items-center gap-6 text-left">
      {/* Photo Thumbnail */}
      <div className="w-full sm:w-44 h-32 shrink-0 rounded-2xl overflow-hidden border border-slate-700 relative">
        <ImageWrapper
          src={image}
          alt={title}
          aspectRatio="auto"
          rounded="none"
          shadow={false}
          className="w-full h-full"
          imgClassName="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
      </div>

      {/* Campus Info & Action */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <MapPin className="w-4 h-4 text-blue-400" aria-hidden="true" />
            <span>Campus Location</span>
          </div>

          <h4 className="text-lg font-bold text-white mb-1">
            {title}
          </h4>

          <p className="text-xs sm:text-sm text-slate-300 mb-4">
            Located at {locationName}, featuring 25 acres of state-of-the-art sports arenas, smart blocks, and lush green lawns.
          </p>
        </div>

        <div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="View Pavna School location on Google Maps in a new tab"
          >
            <span>{buttonText}</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CampusMapCard;
