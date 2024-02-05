import React from "react";
import { skillList } from "../../utils/Skills";
import "../../styles/Skills.scss";

const Skills = () => {
  return (
    <section className="skills__section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="fw-bold text-white">My Skills</h1>
          </div>
        </div>
        <div className="row mt-5 pt-5 d-flex flex-row align-items-center">
          <div className="col-md-12">
            <div className="row">
              {skillList.map((skill, index) => (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mt-4 custom"
                  key={index}
                >
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 d-flex align-items-center">
                          <img
                            src={skill.icon}
                            alt="icons"
                            className="img-fluid me-3"
                            width={32}
                            height={32}
                          />
                          <p className="text-white mb-0">{skill.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
