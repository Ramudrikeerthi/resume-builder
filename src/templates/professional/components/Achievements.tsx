import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import React from 'react';

interface AchievementsProps {
  achievements: string;
}

const Achievements = ({ achievements }: AchievementsProps) => {
  return (
    <div>
      <HTMLRenderer htmlString={achievements} />
    </div>
  );
};

export default Achievements;
