import React from "react";
import { Modal } from "react-bootstrap";
import "../../styles/ProjectDetails.scss";
import close from "../../assets/cross.png";
import ProjectCarousel from "./ProjectCarousel";

interface StackItem {
  icon: string;
  name: string;
}

interface StackDisplayProps {
  useStack: StackItem[];
}

const StackDisplay: React.FC<StackDisplayProps> = ({ useStack }) => (
  <>
    {useStack?.map(({ icon, name }, index) => (
      <div className="text-center me-3" key={index}>
        <div className="stack__images d-block mx-auto">
          <img src={icon} alt={name} className="img-fluid" />
        </div>
        <p className="mt-3 text-white text-center">{name}</p>
      </div>
    ))}
  </>
);

const ProjectDetails = ({ show, onHide, selectedData }: any) => (
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
          <div className="col-md-6">
            <h3 className="text-white">{selectedData?.name}</h3>
            <p className="gray__secondary__color">
              {selectedData?.description}
            </p>
            {selectedData?.projectLink && (
              <>
                <p className="gray__secondary__color mt-3 mb-0">Project URL</p>
                <a
                  href={selectedData.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark__green__color"
                >
                  {selectedData.projectLink}
                </a>
              </>
            )}
            {selectedData?.github && (
              <>
                <p className="gray__secondary__color mt-3 mb-0">Github URL</p>
                <a
                  href={selectedData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark__green__color"
                >
                  {selectedData.github}
                </a>
              </>
            )}
            <div className="row stack justify-content-start mt-5">
              <p className="gray__secondary__color">Used Stack</p>
              <div className="col-md-12 d-flex">
                <StackDisplay useStack={selectedData?.useStack} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {/* Assuming ProjectCarousel is a component you've created */}
            {/* Ensure it handles `null` or `undefined` gracefully */}
            <ProjectCarousel carousel={selectedData?.carousel} />
          </div>
        </div>
      </div>
    </Modal.Body>
  </Modal>
);

export default ProjectDetails;
