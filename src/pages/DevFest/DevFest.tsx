import React from "react";
import "../../styles/DevFest.scss";
import devFest from "../../assets/devFest.jpeg";
import devFest1 from "../../assets/devFest1.jpeg";
import devFest2 from "../../assets/devFest2.jpeg";
import devFest3 from "../../assets/devFest3.jpeg";
import devFest4 from "../../assets/devFest4.jpeg";

const DevFest = () => {
  return (
    <section className="devfest__section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="devfest__header">
              <h1 className="text-white text-center mb-4">
                🌟 A Milestone Moment in My Journey – From Berlin to Bhubaneswar! 🌟
              </h1>
              <p className="text-white text-center lead">
                Life has a beautiful way of connecting moments, and this one felt truly special.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <div className="devfest__content">
              <p className="text-white">
                After attending inspiring Google events in Berlin, stepping onto the stage as a speaker for my first Google DevFest 2025 in Bhubaneswar was more than just an opportunity — it was a milestone I will always cherish. ✨
              </p>
              <p className="text-white">
                Being able to share knowledge, conduct a workshop, and connect with passionate developers, students, and fellow speakers reminded me why I love being part of this community. The energy, curiosity, and conversations made the experience unforgettable.
              </p>
              <p className="text-white">
                A heartfelt thank you to <strong>Basanta Moharana</strong> and <strong>GDG & GDG Cloud Bhubaneswar</strong> for giving me the opportunity to speak and run a workshop at DevFest. Your trust truly made this moment possible. 🙏
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <div className="devfest__key-takeaways">
              <h2 className="text-white mb-4">📌 KEY TAKEAWAYS FROM MY SESSIONS</h2>
              <div className="takeaway-item">
                <p className="text-white">
                  ✅ <strong>Chrome DevTools + AI Console & AI Assistant</strong> – How developers can supercharge debugging, productivity, and workflow with AI-enhanced DevTools.
                </p>
              </div>
              <div className="takeaway-item">
                <p className="text-white">
                  🧪 <strong>Hands-on Codelabs with MCP (Model Context Protocol)</strong> – Practical exploration of how MCP empowers AI agents, enhances developer efficiency, and opens new integration possibilities across tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <div className="devfest__images">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="devfest__image-wrapper">
                    <img
                      src={devFest}
                      alt="DevFest 2025 Bhubaneswar"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="devfest__image-wrapper">
                    <img
                      src={devFest1}
                      alt="DevFest 2025 Bhubaneswar"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="devfest__image-wrapper">
                    <img
                      src={devFest2}
                      alt="DevFest 2025 Bhubaneswar"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="devfest__image-wrapper">
                    <img
                      src={devFest3}
                      alt="DevFest 2025 Bhubaneswar"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="devfest__image-wrapper">
                    <img
                      src={devFest4}
                      alt="DevFest 2025 Bhubaneswar"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <div className="devfest__footer">
              <p className="text-white">
                This journey reaffirmed something for me — growth happens when we dare, show up, and share.
              </p>
              <p className="text-white">
                I'm excited to continue learning, speaking, and contributing to this incredible developer community. 🚀
              </p>
              <p className="text-white text-center mt-4">
                <strong>Here's to many more opportunities to inspire and be inspired! 🌍💛</strong>
              </p>
              <div className="devfest__tags mt-4">
                <span className="tag">Google</span>
                <span className="tag">GDG & GDG Cloud Bhubaneswar</span>
                <span className="tag">Google Developer Experts</span>
                <span className="tag">Google Developers Group</span>
                <span className="tag">GDG Berlin</span>
                <span className="tag">Devfest Berlin</span>
              </div>
              <div className="devfest__link mt-4 text-center">
                <a
                  href="https://suchitra-devfest-2025-bhubaneswar.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="devfest__external-link"
                >
                  View DevFest Event Page →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevFest;

