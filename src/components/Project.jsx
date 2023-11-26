import React from "react";
import { projects } from "../data/constants";

function Project() {
  return (
    <>
      <div id="project" className="py-5 text-bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h1 className="font-weight-bold mb-4">Projects</h1>
              <p className="font-size-18">
                Here are some of my projects i worked on
              </p>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            {projects.map((project, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 text-bg-secondary">
                  <img
                    src={project.image}
                    className="card-img-top bg-white"
                    alt={project.title}
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title text-center">
                        {project.title}
                      </h5>
                      <h6 className="card-subtitle mb-2 text-center">
                        {project.date}
                      </h6>
                    </div>
                    <div>
                      <p className="card-text">
                        <strong>Github:</strong> {project.github}
                        <br />
                        <strong>Description:</strong> {project.description}
                        <br />
                        <strong>Tag:</strong> {project.tags.join(", ")}
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

export default Project;
