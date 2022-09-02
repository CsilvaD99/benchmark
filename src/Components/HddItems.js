import React from "react";
import { useDispatch } from "react-redux";

export default function HddItems({ HSelect }) {
  const dispatch = useDispatch();
  return (
    <div className="Parts">
      <p>Rank:{HSelect[4]}</p>
      <a
        className="link"
        href={HSelect[7]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {HSelect[2]}-{HSelect[3]}
      </a>
      <p>
        Average BenchMark Score:{HSelect[5]} out of {HSelect[6]} samples.
      </p>
      <button
        className="Button"
        onClick={() => dispatch({ type: "SAVED_ADD", payload: HSelect })}
      >
        +
      </button>
    </div>
  );
}
