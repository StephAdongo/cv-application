
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import Controller from './components/Controller';
import FormContainer from './components/FormContainer';
import Preview from './components/Preview';

function App() {
  const sampleData = React.useMemo(() => ({
    personalDetails: {
      fullName: 'Nirob Chowdhury',
      email: 'nirbo.chowdhury@dummy.com',
      phoneNumber: '+880123-456-7891',
      address: 'Shibchar, Madaripur, Bangladesh',
      summary: 'Experienced web developer with a strong background in frontend and backend development.',
      photo: 'default-photo.png',
    },
    education: [
      {
        degree: 'Bachelor of Arts in English Language and Literture',
        school: 'Gopalganj Science and Technology University',
        startDate: '2022',
        endDate: 'Present',
        location: 'Gopalganj, Dhaka',
        visible: true
      },
      {
        degree: 'HSC',
        school: 'Elias Ahmed Chowdhury Degree College',
        startDate: '2017',
        endDate: '2019',
        location: 'Shibchar, Madaripur',
        visible: true
      },
      {
        degree: 'SSC',
        school: 'Shibchar Nanda Kumar Model Institution',
        startDate: '2015',
        endDate: 'Feb 2017',
        location: 'Shibchar',
        visible: true
      }
    ],
    experience: [
      {
        title: 'Sr. Full-Stack Software Developer',
        company: 'Tech Solutions Inc.',
        startDate: 'Present',
        endDate: '2024',
        location: 'Remote',
        description: 'Works on scalable React applications and integrated APIs.',
        visible: true
      },
      {
        title: 'Jr. Software Developer',
        company: 'ABC Tech.',
        startDate: '2022',
        endDate: '2024',
        location: 'Remote',
        description: 'Worked on scalable React applications and integrated APIs.',
        visible: true
      },
      {
        title: 'Freelance Developer',
        company: 'Random',
        startDate: '2019',
        endDate: '2022',
        location: 'Remote',
        description: 'Worked on anything related to programming, software, apps',
        visible: true
      }

    ]
  }), []);

  const [formData, setFormData] = useState(sampleData);

  useEffect(() => {
    handleLoadExample();
  }, [handleLoadExample]);
  

  const previewRef = useRef();
  const handleDownload = () => {
    const element = previewRef.current;
    const opt = {
      margin:       [-0.15, 0, -0.2, 0], // [top, left, bottom, right] in inches
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const handleLoadExample = React.useCallback(() => {
    setFormData(sampleData);
  }, [sampleData]);

  const handleClear = () => {
    setFormData({
      personalDetails: {
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        summary: '',
        photo: null,
      },
      education: [],
      experience: [],
    });
  };

  return (
    <div className="app">
      <div className="controller">
        <Controller 
          handleDownload={handleDownload} 
          handleLoadExample={handleLoadExample}
          handleClear={handleClear}          
        />
      </div>
      <div className="left">
        <FormContainer formData={formData} setFormData={setFormData} />
      </div>
     <div className="right">
      <Preview ref={previewRef} personalDetails={formData.personalDetails} education = {formData.education}  experience = {formData.experience} />
    </div>
    </div>
  );
}

export default App;
