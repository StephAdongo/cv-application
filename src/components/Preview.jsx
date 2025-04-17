import React, {forwardRef} from 'react';
import '../styles/Preview.css';

const Preview = forwardRef(({ personalDetails, education, experience }, ref) => {
  return (
    <div className="preview" ref={ref}>
    <div className="resume-preview">
      {/* Header Section */}
      <div className="resume-header">
        {personalDetails.photo && (
          <img
            src={
                typeof personalDetails.photo === 'string'
                  ? personalDetails.photo
                  : URL.createObjectURL(personalDetails.photo)}
            alt="Profile"
            className="profile-photo"
          />
        )}
        <div className="header-info">
          <h1>{personalDetails.fullName || 'Full Name'}</h1>
          <p>{personalDetails.email || 'Email'} | {personalDetails.phoneNumber || 'Phone'} | {personalDetails.address || 'Address'}</p>
        </div>
      </div>

      {/* Summary Section */}
      {personalDetails.summary && (
        <div className="resume-section">
          <h2>Summary</h2>
          <p>{personalDetails.summary}</p>
        </div>
      )}

      {/* Education Section */}
      {education.filter(edu => edu.visible).length > 0 && (
        <div className="resume-section">
          <h2>Education</h2>
          {education.filter(edu => edu.visible).map((edu, index) => (
            <div key={index} className="resume-item">
              <h3>{edu.degree} - <span className='place'>{edu.school}</span></h3>
              <p>{edu.startDate} - {edu.endDate}</p>
              <p>{edu.location}</p>
            </div>
          ))}
        </div>
      )}

      {/* Experience Section */}
      {experience.filter(exp => exp.visible).length > 0 && (
        <div className="resume-section">
          <h2>Experience</h2>
          {experience.filter(exp => exp.visible).map((exp, index) => (
            <div key={index} className="resume-item">
              <h3>{exp.title} - <span className='place'>{exp.company}</span></h3>
              <p>{exp.startDate} - {exp.endDate}</p>
              <p>{exp.location}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
});

export default Preview;