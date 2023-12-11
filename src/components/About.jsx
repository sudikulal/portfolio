import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";
import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";
import banner from "../assets/bg.png";

function About() {
  return (
    <div
      id="about"
      className="bg-dark text-light p-5 mt-4"
      style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundBlendMode:"soft-light"}}
    >
      <div className="container mt-4 p-4">
        <div className="row  py-4">
          <div className="col-lg-6">
            <header>
              <h1 className="mb-4">
                Hi, I am <br /> <strong>{Bio.name}</strong>
              </h1>
            </header>
            <h2 className="text-info mb-4">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className=" mb-4">{Bio.description}</p>
            <div className="d-flex gap-4">
              <button
                className="btn btn-outline-info mb-2"
                onClick={() => window.open(Bio.resume, "_blank")}
              >
                Resume
              </button>
              <button
                className="btn btn-outline-info mb-2"
                onClick={() => window.open(Bio.github, "_blank")}
              >
                Github
              </button>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: "100%", maxWidth: "500px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
