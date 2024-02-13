import React, { useState } from "react";
import { projectCard } from "../../utils/ProjectCard";
import "../../styles/Project.scss";
import dots from "../../assets/project/dots.png";
import { Link } from "react-router-dom";
import ProjectDetails from "../Projects/ProjectDetails";

const Project = () => {
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState([]);

  const handleClose = () => setShow(false);

  const viewProject = (project: any) => {
    setShow(true);
    setSelectedData(project);
  };

  return (
    <section className="feature__project" id="feature__project">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="fw-bold text-white">Featured Project</h1>
          </div>
        </div>
        <div className="row pt-5">
          {projectCard.slice(0, 4).map((project, index) => (
            <div className="col-md-6 mt-4" key={index}>
              <div className="card">
                <div className="row project__header">
                  <div className="col-md-12">
                    <img
                      src={dots}
                      alt="dots"
                      className="img-fluid mx-3 mt-3"
                    />
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
            </div>
          ))}
        </div>

        <div className="row mt-5 pt-md-5">
          <div className="col-md-12 d-flex justify-content-center">
            <Link to="/projects" className="text-decoration-none">
              <button className="btn view__btn">View All Projects</button>
            </Link>
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
    </section>
  );
};

export default Project;
