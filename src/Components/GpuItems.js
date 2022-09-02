import React from "react";
import { useDispatch } from "react-redux";

export default function GpuItems({ GSelect }) {
  const dispatch = useDispatch();

  return (
    <div className="Parts">
      <p>Rank:{GSelect[4]}</p>
      <a
        className="link"
        href={GSelect[7]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {GSelect[2]}-{GSelect[3]}
      </a>
      <p>
        Score:{GSelect[5]} out of {GSelect[6]} samples.
      </p>
      <button
        className="Button"
        onClick={() => dispatch({ type: "SAVED_ADD", payload: GSelect })}
      >
        +
      </button>
    </div>
  );
}
