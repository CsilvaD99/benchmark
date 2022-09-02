import React from "react";
import { useDispatch } from "react-redux";

export default function SsdItems({ SSelect }) {
  const dispatch = useDispatch();
  return (
    <div className="Parts">
      <p>Rank: {SSelect[4]}</p>
      <a
        className="link"
        href={SSelect[7]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {SSelect[2]}-{SSelect[3]}
      </a>
      <p>
        Score: {SSelect[5]} of {SSelect[3]}
      </p>
      <button
        className="Button"
        onClick={() => dispatch({ type: "SAVED_ADD", payload: SSelect })}
      >
        +
      </button>
    </div>
  );
}
