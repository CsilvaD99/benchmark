import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SsdItems from "./SsdItems";
import { SET_SSD } from "../action-types";

export default function Ssd() {
  const SsdSelect = useSelector((state) => state?.SET?.SSd[0]);
  const dispatch = useDispatch();
  const GetSsd = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4996380537mshc9f4ff99ee1c989p1017e7jsnae7e29f1ad46",
        "X-RapidAPI-Host": "top-computer-parts.p.rapidapi.com",
      },
    };
    const Ssdurl = "https://top-computer-parts.p.rapidapi.com/top/111/ssd";
    const fetchSsd = await fetch(Ssdurl, options);
    const SsdJson = await fetchSsd.json();
    SsdJson.shift();
    const SSDARR = [];
    for (let index = 0; index < SsdJson.length; index++) {
      const element = SsdJson[index];

      const SplitJsonS = element.split(",");
      let SsdObj = Object.assign({}, SplitJsonS);
      SSDARR.push(SsdObj);

      if (index === SsdJson.length) {
        break;
      }
    }

    dispatch({ type: SET_SSD, payload: SSDARR });
  };
  return (
    <div>
      <h1 className="Name">Sdd</h1>
      <div className="Layout">
        {SsdSelect?.map((SSelect) => (
          <SsdItems SSelect={SSelect} {...SSelect} />
        ))}

        <button className="Button" onClick={() => GetSsd()}>
          SSD
        </button>
      </div>
    </div>
  );
}
