import React, { useState } from "react";
import Sidebar from "../components/SeekerSidebar";
import Header from "../components/Header";
import Seeker from "../components/Profile/Seeker";

// Experience Component
const Experience = () => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: experiences.length + 1,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleChange = (id, field, value) => {
    setExperiences(
      experiences.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp,
      ),
    );
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
      <h5 className="fw-bold mb-4 text-dark">Work Experience</h5>

      {experiences.map((exp, index) => (
        <div key={exp.id} className="mb-4 p-3 border rounded-3 bg-light">
          <h6 className="fw-bold text-dark mb-3">Experience #{index + 1}</h6>

          {/* Company Name */}
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              Company Name 
            </label>
            <input
              type="text"
              value={exp.company}
              onChange={(e) => handleChange(exp.id, "company", e.target.value)}
              className="form-control bg-white border-0 shadow-none"
              placeholder="Company name"
            />
          </div>

          {/* Job Position */}
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              Job Position 
            </label>
            <input
              type="text"
              value={exp.position}
              onChange={(e) => handleChange(exp.id, "position", e.target.value)}
              className="form-control bg-white border-0 shadow-none"
              placeholder="Your job title"
            />
          </div>

          {/* Dates */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label small fw-bold text-secondary">
                Start Date 
              </label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) =>
                  handleChange(exp.id, "startDate", e.target.value)
                }
                className="form-control bg-white border-0 shadow-none"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label small fw-bold text-secondary">
                End Date
              </label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) =>
                  handleChange(exp.id, "endDate", e.target.value)
                }
                className="form-control bg-white border-0 shadow-none"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              Job Description
            </label>
            <textarea
              value={exp.description}
              onChange={(e) =>
                handleChange(exp.id, "description", e.target.value)
              }
              className="form-control bg-white border-0 shadow-none"
              rows="4"
              placeholder="Key responsibilities and achievements"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddExperience}
        className="btn btn-outline-primary rounded-pill py-2 fw-bold mt-3"
      >
        Add More Experience
      </button>
    </div>
  );
};  

// Skills Component
const Skills = () => {
  const [skills, setSkills] = useState([
    { id: 1, skill: "", proficiency: "Intermediate" },
  ]);

  const handleAddSkill = () => {
    setSkills([
      ...skills,
      { id: skills.length + 1, skill: "", proficiency: "Intermediate" },
    ]);
  };

  const handleChange = (id, field, value) => {
    setSkills(
      skills.map((skl) => (skl.id === id ? { ...skl, [field]: value } : skl)),
    );
  };

  const handleRemove = (id) => {
    setSkills(skills.filter((skl) => skl.id !== id));
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
      <h5 className="fw-bold mb-4 text-dark">Skills & Expertise</h5>

      {skills.map((skill, index) => (
        <div
          key={skill.id}
          className="mb-3 p-3 border rounded-3 bg-light d-flex gap-3"
        >
          {/* Skill Name */}
          <div className="flex-grow-1">
            <label className="form-label small fw-bold text-secondary">
              Skill Name 
            </label>
            <input
              type="text"
              value={skill.skill}
              onChange={(e) => handleChange(skill.id, "skill", e.target.value)}
              className="form-control bg-white border-0 shadow-none"
              placeholder="Enter skill (e.g., React, Python)"
            />
          </div>

          {/* Proficiency Level */}
          <div className="flex-grow-1">
            <label className="form-label small fw-bold text-secondary">
              Proficiency
            </label>
            <select
              value={skill.proficiency}
              onChange={(e) =>
                handleChange(skill.id, "proficiency", e.target.value)
              }
              className="form-select bg-white border-0 shadow-none"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div className="d-flex align-items-end">
            <button
              type="button"
              onClick={() => handleRemove(skill.id)}
              className="btn btn-sm btn-danger rounded-pill"
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddSkill}
        className="btn btn-outline-primary rounded-pill py-2 fw-bold mt-3"
      >
        Add Skill
      </button>
    </div>
  );
};

// Education Component
const Education = () => {
  const [education, setEducation] = useState([
    { id: 1, school: "", degree: "", field: "", startYear: "", endYear: "" },
  ]);

  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        id: education.length + x1,
        school: "",
        degree: "",
        field: "",
        startYear: "",
        endYear: "",
      },
    ]);
  };

  const handleChange = (id, field, value) => {
    setEducation(
      education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu,
      ),
    );
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
      <h5 className="fw-bold mb-4 text-dark">
        
        Education
      </h5>

      {education.map((edu, index) => (
        <div key={edu.id} className="mb-4 p-3 border rounded-3 bg-light">
          <h6 className="fw-bold text-dark mb-3">Education #{index + 1}</h6>

          <div className="mb-3">
            <label className="form-label small fw-bold text-secondary">
              School/University 
            </label>
            <input
              type="text"
              value={edu.school}
              onChange={(e) => handleChange(edu.id, "school", e.target.value)}
              className="form-control bg-white border-0 shadow-none"
              placeholder="School/University name"
            />
          </div>

          <div className="row">
            
            <div className="col-md-6 mb-3">
              <label className="form-label small fw-bold text-secondary">
                Degree 
              </label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleChange(edu.id, "degree", e.target.value)}
                className="form-control bg-white border-0 shadow-none"
                placeholder="Bachelor's, Master's, etc."
              />
            </div>

            
            <div className="col-md-6 mb-3">
              <label className="form-label small fw-bold text-secondary">
                Field of Study 
              </label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => handleChange(edu.id, "field", e.target.value)}
                className="form-control bg-white border-0 shadow-none"
                placeholder="Field of study"
              />
            </div>
          </div>

          <div className="row">
            
            <div className="col-md-6 mb-3">
              <label className="form-label small fw-bold text-secondary">
                Start Year
              </label>
              <input
                type="number"
                value={edu.startYear}
                onChange={(e) =>
                  handleChange(edu.id, "startYear", e.target.value)
                }
                className="form-control bg-white border-0 shadow-none"
                placeholder="2020"
              />
            </div>

            
            <div className="col-md-6 mb-3">
              <label className="form-label small fw-bold text-secondary">
                End Year
              </label>
              <input
                type="number"
                value={edu.endYear}
                onChange={(e) =>
                  handleChange(edu.id, "endYear", e.target.value)
                }
                className="form-control bg-white border-0 shadow-none"
                placeholder="2024"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddEducation}
        className="btn btn-outline-primary rounded-pill py-2 fw-bold mt-3"
      >
        Add Education
      </button>
    </div>
  );
};

function Profile() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSaveProfile = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div
      className="d-flex min-vh-100"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #dbeafe 100%)",
      }}
    >
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content Area */}
      <div
        className="flex-grow-1"
        style={{
          marginLeft: isCollapsed ? "85px" : "260px",
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Header */}
        <Header title="Profile" />

        {/* Success Message */}
        {saveSuccess && (
          <div
            className="alert alert-success mx-4 mt-3 rounded-4 border-0 shadow-sm"
            role="alert"
          >
            <i className="bi bi-check-circle me-2"></i>
            Profile saved successfully!
          </div>
        )}

        {/* Main Grid Layout */}
        <div className="p-4 p-lg-5">
          <div className="row g-4">
            {/* LEFT COLUMN: Main Profile Sections */}
            <div className="col-lg-8">
              {/* About Me Section */}
              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
                <h5 className="fw-bold mb-3 text-dark">
        
                  About Me
                </h5>
                <textarea
                  className="form-control bg-light border-0 shadow-none rounded-3"
                  rows="5"
                  placeholder="Write a brief professional summary about yourself."
                ></textarea>
              </div>

              {/* Experience Section */}
              <Experience />

              {/* Education Section */}
              <Education />
            </div>

            {/* RIGHT COLUMN: Personal & Contact Info */}
            <div className="col-lg-4">
              {/* Personal & Contact Details Component */}
              <Seeker />

              {/* Skills Section */}
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
