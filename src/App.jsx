
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import Controller from './components/Controller';
import FormContainer from './components/FormContainer';
import Preview from './components/Preview';

function App() {
  const sampleData = React.useMemo(() => ({
    personalDetails: {
      fullName: 'Stephanie Jones',
      email: 'stephjones@gmail.com',
      phoneNumber: '+254-7123-4567-8',
      address: 'Eastleigh, Nairobi',
      summary: 'Experienced web developer with a strong background in frontend and backend development.',
      photo: 'default-photo.png',
    },
    education: [
      {
        degree: 'Bachelor in Computer Science',
        school: 'Kabarak University',
        startDate: '2022',
        endDate: 'Present',
        location: 'Kabarak, Nakuru',
        visible: true
      },
      {
        degree: 'Data Science and Machine Learning',
        school: 'Jomo Kenyatta University',
        startDate: ' August 2023',
        endDate: 'December 2023',
        location: 'Juja, Kiambu',
        visible: true
      },
      {
        degree: 'ICDL',
        school: 'Nairobi Institute of Business Studies',
        startDate: 'June 2021',
        endDate: 'December 2021',
        location: 'Nairobi',
        visible: true
      }
    ],
    experience: [
      {
        title: ' Snr. Full-Stack Software Developer',
        company: 'Oracle LTD.',
        startDate: 'Present',
        endDate: '2025',
        location: 'Remote',
        description: 'Works on scalable React applications and integrated APIs.',
        visible: true
      },
      {
        title: 'Jr. Software Developer',
        company: 'ABC Tech.',
        startDate: '2024',
        endDate: '2024',
        location: 'Remote',
        description: 'Worked on scalable React applications and integrated APIs.',
        visible: true
      },
      {
        title: 'Freelance Developer',
        company: 'Random',
        startDate: '2023',
        endDate: '2024',
        location: 'Remote',
        description: 'Worked on anything related to programming, software, apps',
        visible: true
      }

    ]
  }), []);

  const [formData, setFormData] = useState(sampleData);
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


  const previewRef = useRef();
  

  const handleLoadExample = React.useCallback(() => {
    setFormData(sampleData);
  }, [sampleData]);

  useEffect(() => {
    handleLoadExample();
  }, [handleLoadExample]);

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
