import React from 'react';
import LeaderCard from './LeaderCard';
import { leadershipData } from './LeadershipData';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * ChairmanCard Component
 * Displays Chairman profile card using LeaderCard component.
 */
const ChairmanCard = () => {
  const { chairman } = leadershipData;

  return (
    <LeaderCard leader={chairman} variants={cardVariants} />
  );
};

export default ChairmanCard;
