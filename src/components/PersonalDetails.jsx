import React, {useState} from 'react';
import {ChevronDown, ChevronUp, Camera, User} from 'lucide-react';
import '../styles/PersonalDetails.css';

function PersonalDetails({ personalDetails, onChange, onPhotoChange }) {
  const [expanded, setExpanded] = useState(true);
  
  return (
    <div className="personalDetails">
    <div className="personalHeader" onClick={() => setExpanded(!expanded)}>
      <h1>  <User strokeWidth={3} /> Personal Details</h1>
      {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </div>

    {expanded && (
      <form className="personalContent">
          <hr className='hr-border' />
      <div className="name-img">
        <div className="name-container">
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            name="fullName"
            value={personalDetails.fullName}
            onChange={onChange}
            placeholder="Nirob Chowdhury"
            required
          />
        </div>
        <div className="img-container">
        <label htmlFor="photo">Photo</label>
        <label htmlFor="photo" id='extra-label' className="custom-file-upload">
          <Camera size={18} style={{ marginRight: "6px" }} />
          Upload
        </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={onPhotoChange}
            accept="image/*"
          />
        </div>
      </div>
      

      <div className="contact-container">
        <div className="email-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalDetails.email}
            onChange={onChange}
            placeholder="your.name@gmail.com"
            required
          />
        </div>
        <div className="phn-container">
        <label htmlFor="phone-number">Phone</label>
        <input
          type="tel"
          id="phone-number"
          name="phoneNumber"
          value={personalDetails.phoneNumber}
          onChange={onChange}
          placeholder="+8801714902490"
          required
        />
      </div>
      </div>
      

      <label htmlFor="address">Address</label>
      <input
        id="address"
        name="address"
        value={personalDetails.address}
        onChange={onChange}
        placeholder="Madaripur, Bangladesh | New York, USA"
        required
      />

      <label htmlFor="summary">Summary</label>
      <textarea
        id="summary"
        name="summary"
        value={personalDetails.summary}
        onChange={onChange}
        placeholder="What makes you different? | Career objective"
      ></textarea>
    </form>
    )}
    </div>
  );
}

export default PersonalDetails;