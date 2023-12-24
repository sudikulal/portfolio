import React from "react";
import { projects } from "../data/constants";
import { FaGithub } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";
import banner from "../assets/bgside.png";

function Project() {
  return (
    <div
      id="project"
      className=" text-bg-dark"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundBlendMode: "soft-light",
        backgroundSize: "cover",
      }}
    >
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="mt-4"><strong>Projects</strong></h1>
            <h5 className="font-size-18">
              Here are some of the personal projects I worked on.
            </h5>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6  col-lg-4 mb-4">
              <div className="card h-100 text-bg-dark">
                <img
                  src={project.image}
                  className="card-img-top bg-white"
                  alt={project.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title text-center">
                      <strong>{project.title}</strong>
                    </h5>
                    <p className="card-subtitle mb-2 text-center">
                      <small>{project.category}</small>
                    </p>
                  </div>
                  <div>
                    {project.tags.map((tag, id) => (
                      <span
                        className="badge border border-2 border-primary-subtle rounded-2 mx-1"
                        key={id}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="card-text mb-2">{project.description}</p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light mt-2"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light mt-2 px-4"
                    >
                      <LuLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
