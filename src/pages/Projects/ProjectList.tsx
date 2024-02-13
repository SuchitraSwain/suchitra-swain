import React, { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import CategoryTabs from "./CategoryTabs";
import { projectCard } from "../../utils/ProjectCard";
import "../../styles/Project.scss";

const ProjectList = () => {
  const [selectedCategory, setSelectedCategory] = useState("reactjs");

  const filteredProjects = useMemo(
    () =>
      projectCard.filter(
        (project: { selected: string }) => project.selected === selectedCategory
      ),
    [selectedCategory]
  );

  return (
    <section className="feature__project" id="feature__project">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold text-white">Featured Project</h1>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end justify-content-start">
            <CategoryTabs
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>

        <div className="row pt-5">
          {filteredProjects.map((project: any, index: any) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
