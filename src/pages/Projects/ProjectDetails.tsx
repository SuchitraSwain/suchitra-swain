import React from "react";
import { Modal } from "react-bootstrap";
import "../../styles/ProjectDetails.scss";
import { Link } from "react-router-dom";
import ProjectCarousel from "./ProjectCarousel";
import close from "../../assets/cross.png";

const ProjectDetails = (props: {
  show?: any;
  onHide?: any;
  selectedData?: any;
}) => {
  const { show, onHide, selectedData } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      animation={false}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      className="bottom-modal"
    >
      <Modal.Header closeButton={false}>
        <Modal.Title>Project Details</Modal.Title>
        <button type="button" onClick={onHide} className="close__btn">
          <img
            src={close}
            alt="Close"
            style={{ width: "24px", height: "24px" }}
          />
        </button>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex flex-column  justify-content-start align-items-start">
              <h1 className="text-white">{selectedData.name}</h1>
              <p className="gray__secondary__color">
                {selectedData.description}
              </p>

              <p className="gray__secondary__color mt-5">Project URL</p>
              <Link
                to={selectedData.projectLink}
                target="_blank"
                className="dark__green__color"
              >
                {selectedData.projectLink}
              </Link>

              <p className="gray__secondary__color mt-5">Used Stack</p>

              <div className="row stack">
                {selectedData.useStack &&
                  selectedData.useStack.map((stack: any, index: number) => (
                    <div className="col-4" key={index}>
                      <img
                        src={stack.icon}
                        alt={stack.name}
                        className="img-fluid d-block mx-auto"
                        width={36}
                        height={36}
                      />
                      <p className="mt-3 text-white text-center">
                        {stack.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-md-6">
              <ProjectCarousel carousel={selectedData.carousel} />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectDetails;
