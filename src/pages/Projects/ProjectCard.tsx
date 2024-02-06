import React, { useState } from "react";
import dots from "../../assets/project/dots.png";
import ProjectDetails from "./ProjectDetails";

const ProjectCard = ({ project }: any) => {
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const handleClose = () => setShow(false);

  const viewProject = (project: any) => {
    setShow(true);
    setSelectedData(project);
  };
  return (
    <div className="col-md-6 mt-4">
      <div className="card">
        <div className="row project__header">
          <div className="col-md-12">
            <img src={dots} alt="dots" className="img-fluid mx-3 mt-3" />
            <img
              src={project.image}
              alt={project.name}
              className="img-fluid project__image card-img-top mt-4"
            />
          </div>
        </div>
        <div className="card-body">
          <div className="row align-items-center project__details">
            <div className="col-8">
              <h4 className="mt-4">{project.name}</h4>
              <p>{project.title}</p>
            </div>
            <div className="col-4 text-end">
              <img
                src={project.icon}
                alt={project.name}
                className="img-fluid"
                width={28}
                height={28}
              />
            </div>
            <div className="row mb-2">
              <div className="col-md-12">
                <button
                  className="view__card btn"
                  onClick={() => viewProject(project)}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {show && (
        <ProjectDetails
          show={show}
          onHide={handleClose}
          selectedData={selectedData}
        />
      )}
    </div>
  );
};

export default ProjectCard;
