import React from 'react';
import { useResume } from '../../context/ResumeContext';
import FormNavigation from './FormNavigation';

const ActivitiesForm = () => {
  const { resumeData, updateResumeData, errors } = useResume();
  const { activities } = resumeData;
  const formErrors = errors.activities || {};

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateResumeData('activities', {
      ...activities,
      [name]: value,
    });
  };

  const renderFieldError = (fieldName: string) =>
    formErrors[fieldName] ? (
      <p className="text-red-500 text-sm mt-1">{formErrors[fieldName]}</p>
    ) : null;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1">Involvements*</label>
        <textarea
          name="involvements"
          value={activities.involvements || ''}
          onChange={handleTextChange}
          className="w-full p-2 border rounded h-32"
          placeholder="Enter each involvement on a new line..."
          required
        />
        {renderFieldError('involvements')}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Achievements*</label>
        <textarea
          name="achievements"
          value={activities.achievements || ''}
          onChange={handleTextChange}
          className="w-full p-2 border rounded h-32"
          placeholder="Enter each achievement on a new line..."
          required
        />
        {renderFieldError('achievements')}
      </div>
      <FormNavigation />
    </div>
  );
};

export default ActivitiesForm;
