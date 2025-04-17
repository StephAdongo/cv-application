import React from 'react';
import PersonalDetails from './PersonalDetails'; // Example Form Component
import Education from './Education';
import Experience from './Experience';
import '../styles/FormContainer.css';

function FormContainer({ formData, setFormData }) {
  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      personalDetails: {
        ...prevData.personalDetails,
        [name]: value,
      },
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      personalDetails: {
        ...prevData.personalDetails,
        photo: file,
      },
    }));
  };

  const setEducation = (educationData) => {
    setFormData((prevData) => ({
      ...prevData,
      education: educationData,
    }));
  };

  const setExperience = (experienceData) => {
    setFormData((prevData) => ({
      ...prevData,
      experience: experienceData,
    }));
  };

  return (
    <div className="form-container">
      <PersonalDetails
        personalDetails={formData.personalDetails}
        onChange={handlePersonalDetailsChange}
        onPhotoChange={handlePhotoChange}
      />
      <Education
        education={formData.education}
        setEducation={setEducation}
      />
      <Experience 
        experience={formData.experience}
        setExperience={setExperience}
      />
    </div>
  );
}


export default FormContainer;