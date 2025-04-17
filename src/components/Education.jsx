import React, {useState } from 'react';
import { Eye, EyeOff, Plus, Check, X, Trash2, GraduationCap, ChevronDown, ChevronUp} from 'lucide-react';
import '../styles/Education.css';

function Education({education, setEducation}) {
    const [expanded, setExpanded] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (index,e) => {
        const { name, value } = e.target;
        const updated = [...education];
        updated[index][name] = value;
         setEducation(updated);
    };

    const handleSave = () => {
        setEditingIndex(null);
    };

    const handleCancel = () => {
        setEditingIndex(null);
    };

    const handleDelete = (index) => {
        const updated = [...education];
        updated.splice(index, 1);
        setEducation(updated);
        setEditingIndex(null);
    };

    const toggleVisibility = (index) => {
        const updated = [...education];
        updated[index].visible = !updated[index].visible;
        setEducation(updated);
    };

    const addNewEducation = () => {
        setEducation([
            ...education,
            {
                degree: '',
                school: '',
                startDate: '',
                endDate: '',
                location: '',
                description: '',
                visible: true,
            },
        ]);
        setEditingIndex(education.length);
};

return (
    <div className="educationSection">
    <div className="educationHeader" onClick={() => setExpanded(!expanded)}>
      <h1> <GraduationCap strokeWidth={3} /> Education</h1>
      {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </div>

    {expanded && (
      <div className="educationContent">
          <hr className='hr-border' />
        {education.map((entry, index) => (
          <div key={index} className="educationEntry">
            <div className="entryHeader" onClick={() => setEditingIndex(index)}>
              <h3>{entry.degree || 'Untitled Degree'}</h3>
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
              <div className="educationForm">
                <label>Degree</label>
                <input
                    name="degree"
                    value={entry.degree}
                    onChange={(e) => handleChange(index, e)}
                    placeholder='Degree | Field of Study'
                    required
                  />
                  <label>School</label>
                  <input
                    name="school"
                    value={entry.school}
                    onChange={(e) => handleChange(index, e)}
                    placeholder='School | College | University'
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
                         placeholder='10-02-2025 | 10 Feb 2025'
                         required
                     />
                 </div>
                 
               </div>
               <label>Location</label>
               <input
                 name="location"
                 value={entry.location}
                 onChange={(e) => handleChange(index, e)}
                 placeholder='Dhaka, Bangladesh | Berlin, Germany'
                 
               />
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
          <button onClick={addNewEducation} className="addButton">
            <Plus size={18} /> Education
          </button>
          </div>
         
        </div>
      )}
    </div>
  );
}

export default Education;

 


