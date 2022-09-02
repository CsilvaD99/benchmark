import React from "react";
import HddItems from "./HddItems";
import { useDispatch, useSelector } from "react-redux";
import { SET_HDD } from "../action-types";

export default function Hdd() {
  const HddSelect = useSelector((state) => state?.SET?.HDd[0]);
  const dispatch = useDispatch();
  const GetHdd = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4996380537mshc9f4ff99ee1c989p1017e7jsnae7e29f1ad46",
        "X-RapidAPI-Host": "top-computer-parts.p.rapidapi.com",
      },
    };
    const Hddurl = "https://top-computer-parts.p.rapidapi.com/top/100/hdd";
    const fetchHdd = await fetch(Hddurl, options);
    const HddJson = await fetchHdd.json();
    HddJson.shift();
    const HDDARR = [];
    for (let index = 0; index < HddJson.length; index++) {
      const element = HddJson[index];

      const SplitJsonH = element.split(",");
      let HddObj = Object.assign({}, SplitJsonH);
      HDDARR.push(HddObj);

      if (index === HddJson.length) {
        break;
      }
    }

    dispatch({ type: SET_HDD, payload: HDDARR });
  };
  return (
    <div className="Layout">
      <h1>Hdd</h1>

      {HddSelect?.map((HSelect) => (
        <HddItems HSelect={HSelect} {...HSelect} />
      ))}
      <button className="Button" onClick={() => GetHdd()}>
        Hdd
      </button>
    </div>
  );
}
