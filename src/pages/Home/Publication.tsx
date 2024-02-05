import React from "react";
import "../../styles/Publication.scss";
import publication from "../../assets/publication.png";

const Publication = () => {
  return (
    <section className="publication__section" id="publication">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-white fw-bold text-center">My Publication</h1>
          </div>
        </div>
        <div className="row mt-5 pt-5 d-flex flex-row align-items-center">
          <div className="col-md-8">
            <h3 className="text-white">
              Design and Development of Brownout Control Strategy Using
              End-Point Load Control
            </h3>
            <p className="gray__secondary__color mt-3 mb-5">
              e-Energy '20: Proceedings of the Eleventh ACM International
              Conference on Future Energy SystemsJune 2020 Pages 293–298
            </p>
            <a
              href="https://dl.acm.org/doi/abs/10.1145/3396851.3397738"
              className="dark__green__color"
              target="_blank"
            >
              https://dl.acm.org/doi/abs/10.1145/3396851.3397738
            </a>

            <p className="gray__secondary__color mt-3 mb-5">
              Imbalances in electricity supply and demand are a significant
              problem in developing countries resulting in rolling
              blackouts/load shedding. Due to the inconvenience caused by
              blackouts, several brownout (partial blackout) strategies have
              been proposed. In this paper, we resort to keeping the electricity
              demand of a household within a specified threshold. Our approach
              combines two distinct methods of end-point load (appliance)
              control: priority-based techniques and combinatorial
              optimization-based techniques to create a hybrid approach that
              gives users flexibility in configuring their preferences
              on-the-fly. We have quantified the user preferences using the
              Analytical Hierarchy Process, which is useful for solving such
              Multi-Criteria Decision-Making problems.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src={publication}
              alt="publication"
              className="img-fluid w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publication;
