import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences, education } from "../data/constants";
import { MdWork } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";

function Experience() {
  return (
    <div id="experience" className="text-bg-dark pt-5">
      <h1 className="pt-4 text-center">Experience</h1>
      <p className="mt-2 text-center">
        My Work Experience as a Software Engineer
      </p>
      <div
        className="container p-4"
        data-aos="fade-up"
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
