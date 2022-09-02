import React from "react";
import { useDispatch } from "react-redux";
import { SAVED_ADD } from "../action-types";

export default function CpuItems({ CSelect }) {
  const dispatch = useDispatch();

  return (
    <div className="Parts">
      <p>Rank:{CSelect[4]}</p>
      <a
        className="link"
        href={CSelect[7]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {CSelect[2]}-{CSelect[3]}
      </a>
      <p>
        Score:{CSelect[5]} out of {CSelect[6]} samples.
      </p>
      <button
        className="Button"
        onClick={() => dispatch({ type: SAVED_ADD, payload: CSelect })}
      >
        +
      </button>
    </div>
  );
}
