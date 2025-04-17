import React, { useState } from 'react';
import { Eye, EyeOff, Plus, Check, X, Trash2, BriefcaseBusiness, ChevronDown, ChevronUp} from 'lucide-react';
import '../styles/Experience.css';

function Experience({ experience, setExperience }) {
  const [expanded, setExpanded] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...experience];
    updated[index][name] = value;
    setExperience(updated);
  };

  const handleSave = () => {
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const updated = [...experience];
    updated.splice(index, 1);
    setExperience(updated);
    setEditingIndex(null);
  };

  const toggleVisibility = (index) => {
    const updated = [...experience];
    updated[index].visible = !updated[index].visible;
    setExperience(updated);
  };

  const addNewExperience = () => {
    setExperience([
      ...experience,
      {
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
        visible: true,
      },
    ]);
    setEditingIndex(experience.length);
  };

  return (
    <div className="experienceSection">
      <div className="experienceHeader" onClick={() => setExpanded(!expanded)}>
        <h1> <BriefcaseBusiness strokeWidth={3} /> Experience</h1>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {expanded && (
        <div className="experienceContent">
            <hr className='hr-border' />
          {experience.map((entry, index) => (
            <div key={index} className="experienceEntry">
              <div className="entryHeader" onClick={() => setEditingIndex(index)}>
                <h3>{entry.title || 'Untitled Designation'}</h3>
                <span
                  className="visibilityToggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleVisibility(index);
                  }}
                >
                  {entry.visible ? <Eye size={18} /> : <EyeOff size={18} />}
                </span>
              </div>

              {editingIndex === index && (
                <div className="experienceForm">
                  <label>Job Title</label>
                  <input
                    name="title"
                    value={entry.title}
                    onChange={(e) => handleChange(index, e)}
                    placeholder='Jr. Developer | CEO | Teacher'
                    required
                  />
                  <label>Company</label>
                  <input
                    name="company"
                    value={entry.company}
                    onChange={(e) => handleChange(index, e)}
                    placeholder='Google | Microsoft | GSTU'
                    required
                  />
                  <div className="date-container">
                    <div className="start-date">
                        <label>Start Date</label>
                        <input
                            // type="date"
                            name="startDate"
                            value={entry.startDate}
                            onChange={(e) => handleChange(index, e)}
                            placeholder='02-04-2023 | 2 April 2023'
                            required
                        />
                    </div>
                    <div className="end-date">
                        <label>End Date</label>
                        <input
                            // type="date"
                            name="endDate"
                            value={entry.endDate}
                            onChange={(e) => handleChange(index, e)}
                            placeholder='10-02-2025 | Present'
                            required
                        />
                    </div>
                    
                  </div>
                  <label>Location</label>
                  <input
                    name="location"
                    value={entry.location}
                    onChange={(e) => handleChange(index, e)}
                    placeholder='Dhaka, Bangladesh | Silicon Valley, USA'
                    
                  />

                    <label htmlFor="summary">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={entry.description}
                        onChange={(e) => handleChange(index, e)}
                        placeholder="What was your main task? | What is main your task?"
                    ></textarea>

                  <div className="formActions">
                    <div className="right-btn">
                      <button className="iconButton dltBtn" onClick={() => handleDelete(index)}><Trash2 className='l-icon' size={16} /> Delete</button>
                   </div>
                   <div className="left-btn">
                        <button className="iconButton saveBtn" onClick={handleSave}><Check className='l-icon' size={16} /> Save </button>
                        <button className="iconButton cancelBtn" onClick={handleCancel}><X className='l-icon' size={16} />Cancel</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="buttonContainer">
          <button onClick={addNewExperience} className="addButton">
            <Plus size={18} /> Experience
          </button>
          </div>
         
        </div>
      )}
    </div>
  );
}

export default Experience;