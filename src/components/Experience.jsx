import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences, education } from "../data/constants";
import { MdWork } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";
import banner from "../assets/bgside.png";

function Experience() {
  return (
    <div
      id="experience"
      className="text-bg-dark pt-5"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundBlendMode: "soft-light",
        backgroundSize: "cover",
      }}
    >
      <h1 className="mt-4 text-center">
        <strong>Experience</strong>
      </h1>
      <h5 className="pt-2 text-center">
        My Work Experience as a Software Engineer
      </h5>
      <div
        className="container p-4 mt-4"
        style={{ overflowY: "auto", height: "500px" }}
      >
        <VerticalTimeline className="custom-line">
          {education.map((data, i) => (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#343a40", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={data.date}
              iconStyle={{
                background: "#0563bb",
                color: "#fff",
              }}
              icon={<IoIosSchool />}
            >
              <h3 className="vertical-timeline-element-title h5 fw-bold">
                {data.college}
              </h3>
              <h4 className="vertical-timeline-element-subtitle h6 fw-normal">
                {data.degree}
              </h4>
              <p className="fs-6">{data.desc}</p>
            </VerticalTimelineElement>
          ))}
          {experiences.map((data, i) => (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#343a40", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={data.date}
              dateClassName="timeline-date"
              iconStyle={{
                background: "#0563bb",
                color: "#fff",
              }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title h5 fw-bold">
                {data.company}
              </h3>
              <h4 className="vertical-timeline-element-subtitle h6 fw-normal">
                {data.role}
              </h4>
              <p className="fs-6">{data.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
