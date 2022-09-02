import React from "react";
import { useDispatch } from "react-redux";

export default function RamItems({ RSelect }) {
  const dispatch = useDispatch();
  return (
    <div className="Parts">
      <h3>Rank: {RSelect[4]}</h3>
      <a
        className="link"
        href={RSelect[7]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {RSelect[2]}-{RSelect[3]}
      </a>
      <p>
        Score: {RSelect[5]} of {RSelect[6]} samples.
      </p>
      <button
        className="Button"
        onClick={() => dispatch({ type: "SAVED_ADD", payload: RSelect })}
      >
        +
      </button>
    </div>
  );
}
