import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";
import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div id="about" className="bg-dark text-light d-flex justify-content-center align-items-center p-4 mt-4">
      <div className="container">
        <div className="row g-4 py-4">
          <div className="col-lg-6">
            <header>
              <h1 className="display-4 mb-4">
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
            <p className="lead font-italic mb-4">{Bio.description}</p>
            <div className="d-md-flex gap-4">
              <button
                className="btn btn-outline-info flex-md-grow-1 mb-2"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1nwgfr42Wgj5WM5kA1cKjgsQwn3XazP-Y/view?usp=drivesdk",
                    "_blank"
                  )
                }
              >
                Resume
              </button>
              <button
                className="btn btn-outline-info flex-md-grow-1 mb-2"
                onClick={() => window.open("https://github.com/sudikulal", "_blank")}
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
