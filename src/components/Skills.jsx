import React from "react";
import { skills } from "../data/constants";

const Skills = () => {
  return (
    <>
      <div id="skills" className="text-bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="font-weight-bold mb-4">Skills</h1>
              <p className="font-size-18">
                Here are some of my skills on which I have been working for the
                past 2 years.
              </p>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            {skills.map((skill, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card border-0 shadow bg-secondary flex-column h-100">
                  <div className="card-body p-4">
                    <h2 className="font-size-28 font-weight-bold mb-4 text-center">
                      {skill.title}
                    </h2>
                    <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
                      {skill.skills.map((item, idx) => (
                        <div
                          key={idx}
                          className="border rounded p-3 d-flex align-items-center"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="mr-2"
                            style={{ width: "24px", height: "24px" }}
                          />
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
