import React, { useEffect } from "react";
import { skills } from "../data/constants";
import banner from "../assets/bgside.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="skills"
      className="text-bg-dark"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundBlendMode: "soft-light",
        backgroundSize:"cover",
      }}
    >
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="mt-4">
              <strong>Skills</strong>
            </h1>
            <h5 className="pt-2">
              Here are some of my skills on which I have been working for the
              past 2 years.
            </h5>
          </div>
        </div>

        <div className="skill row justify-content-center mt-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="flip-left"
            >
              <div className="border-0 shadow-lg flex-column h-100">
                <div className="p-4">
                  <h2
                    className="font-size-28 font-weight-bold mb-4 text-center"
                    data-aos="zoom-in"
                  >
                    {skill.title}
                  </h2>
                  <div
                    className="d-flex justify-content-center flex-wrap gap-3 mt-4"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    {skill.skills.map((item, idx) => (
                      <div
                        key={idx}
                        className="border border-info border-2 rounded-circle p-3 focus-ring d-flex align-items-center text-white"
                      >
                        <abbr title={item.name}>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="mx-1"
                            style={{ width: "24px", height: "24px" }}
                          />
                        </abbr>
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
  );
};

export default Skills;
