import React from "react";
import { useDispatch } from "react-redux";
import { DELETE } from "../action-types";

export default function SavedItems({ Sved }) {
  const dispatch = useDispatch();
  return (
    <div className="Parts">
      <h4>{Sved[0]}</h4>
      <p>Rank:{Sved[4]}</p>
      <a
        className="link"
        href={Sved[7]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {Sved[2]}-{Sved[3]}
      </a>
      <p>
        Average BenchMark Score:{Sved[5]} out of {Sved[6]} samples.
      </p>
      <button
        className="Button"
        onClick={() => dispatch({ type: DELETE, payload: Sved })}
      >
        Delete
      </button>
    </div>
  );
}
