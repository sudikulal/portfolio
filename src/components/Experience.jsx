import React from "react";
import { experiences } from "../data/constants";

function Experience() {
  return (
    <>
    <div id="experience" className="text-bg-dark">
      <div className="container p-4">
        <h1 className="pt-4 text-center">Experience</h1>
        <p className="mt-2 text-center">My Work Experience as a Software Engineer</p>
        <div className="row justify-content-center">
          {experiences.map((experience, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="card h-100 text-bg-secondary">
                <img
                  src={experience.img}
                  className="card-img-top bg-white"
                  alt={experience.company}
                  style={{ maxHeight: "150px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title text-center">{experience.company}</h5>
                    <h6 className="card-subtitle mb-2 text-center">
                      {experience.role}
                    </h6>
                  </div>
                  <div>
                    <p className="card-text">
                      <strong>Date:</strong> {experience.date}
                      <br />
                      <strong>Description:</strong> {experience.desc}
                      <br />
                      <strong>Skills:</strong> {experience.skills.join(", ")}
                    </p>
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
}

export default Experience;
