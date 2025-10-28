import React from "react";
import suchitra from "../../assets/suchitra.jpeg";
import "../../styles/AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="about__me" id="about_me">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="fw-bold text-white">Get To Know Me More</h1>
          </div>
        </div>
        <div className="row mt-5 pt-5 d-flex flex-row align-items-center">
          <div className="col-md-4">
            <img src={suchitra} alt="" className="img-fluid w-100" />
          </div>
          <div className="col-md-8 mt-md-0 mt-5">
            <h3 className="dark__green__color fw-bold">
              Application Developer
            </h3>
            <p className="gray__color mt-3">
              Highly proficient and driven{" "}
              <strong className="dark__green__color">
                front-end developer
              </strong>{" "}
              with over{" "}
              <strong className="dark__green__color">five years</strong> of
              experience in designing, building, and deploying{" "}
              <strong className="dark__green__color">
                small to large-scale interactive websites and web applications
              </strong>
              . Leveraging a deep understanding of{" "}
              <strong className="dark__green__color">
                standard web technologies
              </strong>
              , I specialize in creating{" "}
              <strong className="dark__green__color">
                robust and user-friendly digital experiences
              </strong>
              .
            </p>

            <div className="mt-4">
              <h5 className="dark__green__color fw-bold mb-3">
                Core Competencies:
              </h5>

              <div className="mb-3">
                <h6 className="dark__green__color fw-bold mb-2">
                  Advanced Skills:
                </h6>
                <p className="gray__color">
                  Proficient in{" "}
                  <strong className="dark__green__color">ReactJS</strong>,{" "}
                  <strong className="dark__green__color">NextJs</strong>,{" "}
                  <strong className="dark__green__color">Angular</strong>,{" "}
                  <strong className="dark__green__color">TypeScript</strong>,{" "}
                  <strong className="dark__green__color">
                    JavaScript/jQuery
                  </strong>
                  ,{" "}
                  <strong className="dark__green__color">
                    Version Control (Git)
                  </strong>
                  , <strong className="dark__green__color">HTML/CSS</strong>,{" "}
                  <strong className="dark__green__color">
                    Responsive Design
                  </strong>
                  ,{" "}
                  <strong className="dark__green__color">
                    Browser Developer Tools
                  </strong>
                  ,{" "}
                  <strong className="dark__green__color">
                    Web Performance Optimization
                  </strong>
                  , and{" "}
                  <strong className="dark__green__color">
                    Testing/Debugging methodologies
                  </strong>{" "}
                  using tools like{" "}
                  <strong className="dark__green__color">Jest</strong> and{" "}
                  <strong className="dark__green__color">Cypress</strong>.
                </p>
              </div>

              <div className="mb-3">
                <h6 className="dark__green__color fw-bold mb-2">
                  Intermediate Knowledge:
                </h6>
                <p className="gray__color">
                  Competent in{" "}
                  <strong className="dark__green__color">
                    server-side development
                  </strong>{" "}
                  with <strong className="dark__green__color">NodeJs</strong>{" "}
                  and{" "}
                  <strong className="dark__green__color">
                    database management
                  </strong>{" "}
                  using <strong className="dark__green__color">MYSQL</strong>,{" "}
                  <strong className="dark__green__color">MongoDB</strong>, and{" "}
                  <strong className="dark__green__color">Prisma</strong>.
                </p>
              </div>

              <div className="mb-3">
                <h6 className="dark__green__color fw-bold mb-2">
                  Emerging Expertise:
                </h6>
                <p className="gray__color">
                  Exploring the realms of{" "}
                  <strong className="dark__green__color">
                    Machine Learning
                  </strong>
                  ,{" "}
                  <strong className="dark__green__color">Deep Learning</strong>,
                  and{" "}
                  <strong className="dark__green__color">
                    Artificial Intelligence
                  </strong>
                  , and continuously expanding my skill set in these{" "}
                  <strong className="dark__green__color">
                    groundbreaking technologies
                  </strong>
                  .
                </p>
              </div>
            </div>
            <p className="gray__color mt-3">
              I am committed to translating{" "}
              <strong className="dark__green__color">innovative ideas</strong>{" "}
              into{" "}
              <strong className="dark__green__color">
                seamless and intuitive user experiences
              </strong>
              , constantly pushing the boundaries of{" "}
              <strong className="dark__green__color">web development</strong> to
              deliver{" "}
              <strong className="dark__green__color">
                outstanding results
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
