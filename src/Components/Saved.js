import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SavedItems from "./SavedItems";

export default function Saved() {
  const SSelector = useSelector((state) => state?.SVD.SAved);
  return (
    <div className="Layout">
      {SSelector?.map((Sved) => (
        <SavedItems Sved={Sved} {...Sved} />
      ))}
    </div>
  );
}
