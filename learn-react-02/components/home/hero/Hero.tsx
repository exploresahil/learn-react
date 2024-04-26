"use client";
import { useEffect, useState } from "react";
import "./style.scss";

const Hero = () => {
  const [count, setCount] = useState<number>(0);

  //console.log("state->", state);

  return (
    <section id="hero">
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </section>
  );
};

export default Hero;
