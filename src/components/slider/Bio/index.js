import React from "react";
import bertSrc from "./bert.jpg";
import hepzibahSrc from "./hepzibah.jpg";
import tayanSrc from "./tayan.png";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a scelerisque nisi. Proin et ipsum at massa vulputate congue nec ac arcu. Pellentesque pellentesque volutpat odio at eleifend. Aenean ultricies et lectus non varius. Duis gravida massa eros, at dapibus nulla maximus at. Morbi at auctor orci, at rutrum dui. Sed hendrerit elit ante.";

export const Bio = ({ name = "Bob", blurb = lorem, imageSrc = tayanSrc }) => (
  <div style={{ maxWidth: "min-content", display: "inline-block" }}>
    <img src={imageSrc} alt={`${name}`} />
    <h3>{name}</h3>
    <p>{blurb}</p>
  </div>
);

export const teamBios = [
  { name: "Tayan", imageSrc: tayanSrc },
  { name: "Hepzibah", imageSrc: hepzibahSrc },
  { name: "Bert", imageSrc: bertSrc },
];
