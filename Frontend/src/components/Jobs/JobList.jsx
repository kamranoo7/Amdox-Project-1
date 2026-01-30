import React from "react";

function JobList({ jobs, onEdit, onDelete }) {
  
  if (!jobs || jobs.length === 0) {
    return (
      <div className="text-center p-5 bg-white rounded-4 shadow-sm">
        <i className="bi bi-folder-x fs-1 text-muted mb-3"></i>
        <p className="text-muted mb-0">No jobs found. Click "Post New Job" to start.</p>
      </div>
    );
  }

  return (
    <div className="row g-3">
      {jobs.map((job) => (
        <div key={job.id} className="col-12">
          <div className="card border-0 shadow-sm rounded-4 p-4 hover-shadow transition-all bg-white">
            <div className="d-flex justify-content-between align-items-center">
              
              {/* Job Info */}
              <div>
                <h5 className="fw-bold text-dark mb-1">{job.title}</h5>
                <p className="small text-muted mb-2">
                  <i className="bi bi-geo-alt-fill me-1"></i> {job.location} 
                  <span className="mx-2">•</span> 
                  <i className="bi bi-cash-stack me-1"></i> {job.salary}
                </p>
                <div className="d-flex gap-2">
                   <span className={`badge bg-light ${job.status === 'Inactive' ? 'text-danger border border-danger rounded-pill px-3' : 'text-primary border border-primary rounded-pill px-3'}`}>{job.status}</span>
                   
                   <span className="badge bg-light text-secondary border border-secondary rounded-pill px-3">{job.jobType||"Full Time"}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-2">
                <button onClick={() => onEdit(job)} className="btn btn-outline-primary rounded-pill px-4 btn-sm fw-bold">
                  Edit
                </button>
                <button onClick={() => onDelete(job.id)} className="btn btn-outline-danger rounded-circle btn-sm" style={{width: "32px", height: "32px"}}>
                  <i className="bi bi-trash-fill"></i>
                </button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobList;