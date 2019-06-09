import React from "react";
import {
  Carousel,
  Slide,
  NextButton,
  PreviousButton,
  Indicators
} from "../Carousel";
import { Bio, teamBios } from "../Bio";
import "./styles.css";

export default () => (
  <Carousel
    loop
    autoplay
    duration={2500}
    slideProps={{
      all: {
        className: "slide",
        hidden: true
      },
      next: { className: "next" },
      previous: {
        className: "previous"
      },
      current: {
        className: "current",
        hidden: false
      }
    }}
  >
    <div className="frame">
      {teamBios.map(({ name, imageSrc }) => (
        <Slide>
          <Bio name={name} imageSrc={imageSrc} />
        </Slide>
      ))}
      <Indicators
        className="indicators"
        duration={1000}
        groupLabel="Quick Links"
        indicatorProps={{
          all: i => ({
            className: "indicator",
            "aria-label": `See ${teamBios[i].name}`
          }),
          active: { className: "active" },
          inactive: { className: "inactive" }
        }}
      />
    </div>
  </Carousel>
);
