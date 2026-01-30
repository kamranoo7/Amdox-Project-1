import React, { useState, useEffect } from "react";
import Sidebar from "../components/SeekerSidebar";
import Header from "../components/Header";
import Seeker from "../components/Profile/Seeker";

// --- Sub-Components (Experience, Education, Skills) ---
const Experience = ({ experiences, onChange, onAdd, onRemove }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
      <h5 className="fw-bold mb-4 text-dark">Work Experience</h5>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4 p-3 border rounded-3 bg-light position-relative">
          <div className="d-flex justify-content-between align-items-center mb-3">
             <h6 className="fw-bold text-dark mb-0">Experience #{index + 1}</h6>
            <button onClick={() => onRemove(index)} className="btn btn-sm btn-outline-danger border-0">
                <i className="bi bi-trash-fill fs-5"></i>
            </button>
          </div>
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">Company Name</label>
            <input type="text" value={exp.company} onChange={(e) => onChange(index, "company", e.target.value)} className="form-control bg-white border-0 shadow-none" placeholder="Company name" />
          </div>
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">Job Position</label>
            <input type="text" value={exp.position} onChange={(e) => onChange(index, "position", e.target.value)} className="form-control bg-white border-0 shadow-none" placeholder="Your job title" />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label small fw-bold text-secondary">Start Date</label>
              <input type="month" value={exp.startDate} onChange={(e) => onChange(index, "startDate", e.target.value)} className="form-control bg-white border-0 shadow-none" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label small fw-bold text-secondary">End Date</label>
              <input type="month" value={exp.endDate} onChange={(e) => onChange(index, "endDate", e.target.value)} className="form-control bg-white border-0 shadow-none" />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">Job Description</label>
            <textarea value={exp.description} onChange={(e) => onChange(index, "description", e.target.value)} className="form-control bg-white border-0 shadow-none" rows="4" placeholder="Responsibilities..." />
          </div>
        </div>
      ))}
      <button type="button" onClick={onAdd} className="btn btn-outline-primary rounded-pill py-2 fw-bold mt-3"> + Add More Experience </button>
    </div>
  );
};

const Education = ({ education, onChange, onAdd, onRemove }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
      <h5 className="fw-bold mb-4 text-dark">Education</h5>
      {education.map((edu, index) => (
        <div key={index} className="mb-4 p-3 border rounded-3 bg-light position-relative">
          <div className="d-flex justify-content-between align-items-center mb-3">
             <h6 className="fw-bold text-dark mb-0">Education #{index + 1}</h6>
            <button onClick={() => onRemove(index)} className="btn btn-sm btn-outline-danger border-0">
                <i className="bi bi-trash-fill fs-5"></i>
            </button>
          </div>
          <div className="mb-3">
             <label className="form-label small fw-bold text-secondary">School/University</label>
            <input type="text" value={edu.school} onChange={(e) => onChange(index, "school", e.target.value)} className="form-control bg-white border-0 shadow-none" placeholder="School Name" />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
               <label className="form-label small fw-bold text-secondary">Degree</label>
              <input type="text" value={edu.degree} onChange={(e) => onChange(index, "degree", e.target.value)} className="form-control bg-white border-0 shadow-none" placeholder="Degree" />
            </div>
            <div className="col-md-6 mb-3">
               <label className="form-label small fw-bold text-secondary">Field of Study</label>
              <input type="text" value={edu.field} onChange={(e) => onChange(index, "field", e.target.value)} className="form-control bg-white border-0 shadow-none" placeholder="Field" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
               <label className="form-label small fw-bold text-secondary">Start Year</label>
              <input type="number" value={edu.startYear} onChange={(e) => onChange(index, "startYear", e.target.value)} className="form-control bg-white border-0 shadow-none" placeholder="2020" />
            </div>
            <div className="col-md-6 mb-3">
               <label className="form-label small fw-bold text-secondary">End Year</label>
              <input type="number" value={edu.endYear} onChange={(e) => onChange(index, "endYear", e.target.value)} className="form-control bg-white border-0 shadow-none" placeholder="2024" />
            </div>
          </div>
        </div>
      ))}
      <button type="button" onClick={onAdd} className="btn btn-outline-primary rounded-pill py-2 fw-bold mt-3"> + Add Education </button>
    </div>
  );
};

const Skills = ({ skills, onChange, onAdd, onRemove }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
      <h5 className="fw-bold mb-4 text-dark">Skills & Expertise</h5>
      {skills.map((skill, index) => (
        <div key={index} className="mb-3 p-3 border rounded-3 bg-light d-flex gap-3 align-items-center">
          <div className="flex-grow-1">
             <label className="form-label small fw-bold text-secondary">Skill Name</label>
            <input type="text" value={skill.skill} onChange={(e) => onChange(index, "skill", e.target.value)} className="form-control bg-white border-0 shadow-none" placeholder="Ex: React" />
          </div>
          <div className="flex-grow-1">
             <label className="form-label small fw-bold text-secondary">Proficiency</label>
            <select value={skill.proficiency} onChange={(e) => onChange(index, "proficiency", e.target.value)} className="form-select bg-white border-0 shadow-none">
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div className="d-flex align-items-end pt-4">
            <button type="button" onClick={() => onRemove(index)} className="btn btn-sm btn-danger rounded-circle" style={{ width: "32px", height: "32px" }}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      ))}
      <button type="button" onClick={onAdd} className="btn btn-outline-primary rounded-pill py-2 fw-bold mt-3"> + Add Skill </button>
    </div>
  );
};

function Profile() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    headline: "",
    location: "",
    email: "",
    phone: "",
    portfolio: "",
    github: "",
    linkedin: ""
  });

  const [aboutMe, setAboutMe] = useState("");
  const [experienceList, setExperienceList] = useState([{ company: "", position: "", startDate: "", endDate: "", description: "" }]);
  const [educationList, setEducationList] = useState([{ school: "", degree: "", field: "", startYear: "", endYear: "" }]);
  const [skillsList, setSkillsList] = useState([{ skill: "", proficiency: "Intermediate" }]);

  const [isLoading, setIsLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState({ type: "", text: "" });

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  const handleExpChange = (index, field, value) => { const list = [...experienceList]; list[index][field] = value; setExperienceList(list); };
  const addExp = () => { setExperienceList([...experienceList, { company: "", position: "", startDate: "", endDate: "", description: "" }]); };
  const removeExp = (index) => { const list = [...experienceList]; list.splice(index, 1); setExperienceList(list); };

  const handleEduChange = (index, field, value) => { const list = [...educationList]; list[index][field] = value; setEducationList(list); };
  const addEdu = () => { setEducationList([...educationList, { school: "", degree: "", field: "", startYear: "", endYear: "" }]); };
  const removeEdu = (index) => { const list = [...educationList]; list.splice(index, 1); setEducationList(list); };

  const handleSkillChange = (index, field, value) => { const list = [...skillsList]; list[index][field] = value; setSkillsList(list); };
  const addSkill = () => { setSkillsList([...skillsList, { skill: "", proficiency: "Intermediate" }]); };
  const removeSkill = (index) => { const list = [...skillsList]; list.splice(index, 1); setSkillsList(list); };


  // --- 👇 SAVE LOGIC (Triggered by Form) ---
  const handleSaveProfile = () => {
        
    setIsLoading(true);
    setSaveMessage({ type: "", text: "" });

    // Simulate Save
    setTimeout(() => {
        setIsLoading(false);
        // Show Success Alert
        alert("✅ Profile updated successfully!");
        setSaveMessage({ type: "success", text: "Profile updated successfully!" });
        setTimeout(() => setSaveMessage({ type: "", text: "" }), 3000);
    }, 1500); 
  };

  return (
    <div className="d-flex min-vh-100" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%)" }}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div className="flex-grow-1" style={{ marginLeft: isCollapsed ? "85px" : "260px", transition: "margin-left 0.3s ease" }}>
        <Header title="Profile" />

        {saveMessage.text && (
          <div className={`alert alert-${saveMessage.type} mx-4 mt-3 rounded-4 border-0 shadow-sm`}>
            {saveMessage.type === "success" && <i className="bi bi-check-circle me-2"></i>}
            {saveMessage.text}
          </div>
        )}

        <div className="p-4 p-lg-5">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
                <h5 className="fw-bold mb-3 text-dark">About Me</h5>
                <textarea
                  className="form-control bg-light border-0 shadow-none rounded-3"
                  rows="5"
                  value={aboutMe}
                  onChange={(e) => setAboutMe(e.target.value)}
                  placeholder="Write a brief professional summary about yourself."
                ></textarea>
              </div>

              <Experience 
                experiences={experienceList} 
                onChange={handleExpChange} 
                onAdd={addExp} 
                onRemove={removeExp} 
              />

              <Education 
                education={educationList} 
                onChange={handleEduChange} 
                onAdd={addEdu} 
                onRemove={removeEdu} 
              />
            </div>

            <div className="col-lg-4">
              
              {/* Pass the save handler to Seeker */}
              <Seeker 
                details={personalDetails} 
                onChange={handlePersonalChange} 
                onSave={handleSaveProfile} 
              /> 

              <Skills 
                skills={skillsList} 
                onChange={handleSkillChange} 
                onAdd={addSkill} 
                onRemove={removeSkill} 
              />

              <div className="d-grid mt-4">
                
                <button 
                    form="profile-form" 
                    type="submit" 
                    className="btn btn-primary btn-lg rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center"
                    disabled={isLoading}
                >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                        Saving...
                      </>
                    ) : (
                      "Save Full Profile"
                    )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;