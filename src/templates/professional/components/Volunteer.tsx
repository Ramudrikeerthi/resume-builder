// components/Volunteer.tsx
import React from 'react';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

interface VolunteerItem {
  id: string;
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  isVolunteeringNow: boolean;
  highlights: string[];
}

interface VolunteerProps {
  volunteer: VolunteerItem[];
}

const Volunteer: React.FC<VolunteerProps> = ({ volunteer }) => {
  return (
    <div className="flex flex-col gap-4">
      {volunteer.map((item) => (
        <div key={item.id} className="flex flex-col gap-1">
          <div className="flex justify-between">
            <h3 className="font-medium">{item.organization}</h3>
            <span className="text-sm">
              {item.startDate} - {item.isVolunteeringNow ? 'Present' : item.endDate}
            </span>
          </div>
          <p className="text-sm font-medium">{item.position}</p>
          <div className="text-sm">
            <HTMLRenderer htmlString={item.summary} />
          </div>
          {item.highlights?.length > 0 && (
            <ul className="list-disc ml-4 text-sm">
              {item.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Volunteer;
