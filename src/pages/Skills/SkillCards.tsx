import React from "react";
import Card from "../../components/common/Card/Card";
import "./SkillCards.scss";

interface Skill {
  icon: string;
  name: string;
}

interface SkillCardsProps {
  skills: Skill[];
}

const SkillCards: React.FC<SkillCardsProps> = ({ skills }) => {
  return (
    <div className="row justify-content-center">
      {skills.map((skill, index) => (
        <div
          className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4"
          key={index}
        >
          <Card className="skill-card h-100">
            <div className="skill-card__content">
              <img
                src={skill.icon}
                alt="Skill icon"
                className="skill-card__icon"
                width={32}
                height={32}
              />
              <p className="skill-card__name">{skill.name}</p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;
