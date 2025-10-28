import React from "react";
import { githubRepositories, GitHubRepository } from "../../utils/GitHubRepositories";
import "../../styles/GitHubContributions.scss";

const GitHubContributions = () => {
  return (
    <section className="github__contributions__section" id="github_contributions">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="fw-bold text-white">Open Source Contributions</h1>
            <p className="mt-3 gray__secondary__color">
              Contributing to open source projects and building the future of
              decentralized technology
            </p>
          </div>
        </div>
        <div className="row mt-5">
          {githubRepositories.map((repo: GitHubRepository, index: number) => (
            <div key={index} className="col-lg-6 col-md-12 mb-4">
              <div className="github__card">
                <div className="github__card__header">
                  <div className="github__card__title">
                    <h3>{repo.name}</h3>
                    <span className="github__card__status">Public</span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github__card__link"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="github__card__body">
                  <p className="github__card__description">
                    {repo.description}
                  </p>
                  <div className="github__card__meta">
                    <div className="github__card__language">
                      <span
                        className="language__dot"
                        style={{ backgroundColor: repo.languageColor }}
                      ></span>
                      <span>{repo.language}</span>
                    </div>
                    <div className="github__card__stats">
                      <span className="github__card__stat">
                        <i className="fas fa-star"></i>
                        {repo.stars}
                      </span>
                      <span className="github__card__stat">
                        <i className="fas fa-code-branch"></i>
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                  <div className="github__card__topics">
                    {repo.topics.map((topic: string, topicIndex: number) => (
                      <span key={topicIndex} className="github__card__topic">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="github__card__footer">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github__card__button"
                    >
                      <i className="fab fa-github"></i>
                      View Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
