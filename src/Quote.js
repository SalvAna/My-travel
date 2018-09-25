import React from "react";

const Quote = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={country} />
    <figcaption>
      <blockquote>{destination}</blockquote>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);

export default Quote;