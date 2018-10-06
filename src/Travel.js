import React from "react";

const Travel = ({ destination, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination} />
    <figcaption>
      <blockquote>{destination}</blockquote>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);

export default Travel;