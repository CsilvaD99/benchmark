import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RamItems from "./RamItems";
import { SET_RAM } from "../action-types";
export default function Ram() {
  const RamSelect = useSelector((state) => state?.SET?.RAm[0]);
  const dispatch = useDispatch();
  const GetRam = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4996380537mshc9f4ff99ee1c989p1017e7jsnae7e29f1ad46",
        "X-RapidAPI-Host": "top-computer-parts.p.rapidapi.com",
      },
    };
    const Ramurl = "https://top-computer-parts.p.rapidapi.com/top/110/ram";
    const fetchRam = await fetch(Ramurl, options);
    const RamJson = await fetchRam.json();
    RamJson.shift();
    const RAMARR = [];
    for (let index = 0; index < RamJson.length; index++) {
      const element = RamJson[index];

      const SplitJsonR = element.split(",");
      let RamObj = Object.assign({}, SplitJsonR);
      RAMARR.push(RamObj);

      if (index === RamJson.length) {
        break;
      }
    }

    dispatch({ type: SET_RAM, payload: RAMARR });
  };

  return (
    <div>
      <h1 className="Name">Ram</h1>
      <div className="Layout">
        {RamSelect?.map((RSelect) => (
          <RamItems RSelect={RSelect} {...RSelect} />
        ))}

        <button className="Button" onClick={() => GetRam()}>
          RAM
        </button>
      </div>
    </div>
  );
}
