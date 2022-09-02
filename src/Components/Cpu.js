import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CpuItems from "./CpuItems";
import { SET_CPU } from "../action-types";

export default function Cpu() {
  const CpuSelect = useSelector((state) => state?.SET?.CPu[0]);
  const dispatch = useDispatch();
  const GetCpu = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4996380537mshc9f4ff99ee1c989p1017e7jsnae7e29f1ad46",
        "X-RapidAPI-Host": "top-computer-parts.p.rapidapi.com",
      },
    };
    const CpUurl = "https://top-computer-parts.p.rapidapi.com/top/132/cpu";
    const fetchCpu = await fetch(CpUurl, options);
    const CpuJson = await fetchCpu.json();
    CpuJson.shift();
    const CPUARR = [];
    for (let index = 0; index < CpuJson.length; index++) {
      const element = CpuJson[index];

      const SplitJson = element.split(",");
      let CpuObj = Object.assign({}, SplitJson);
      CPUARR.push(CpuObj);

      if (index === CpuJson.length) {
        break;
      }
    }

    dispatch({ type: SET_CPU, payload: CPUARR });
  };
  return (
    <div>
      <h1 className="Name">Cpu</h1>

      <div className="Layout">
        {CpuSelect?.map((CSelect) => (
          <CpuItems CSelect={CSelect} {...CSelect} />
        ))}

        <button className="Button" onClick={() => GetCpu()}>
          CPU
        </button>
      </div>
    </div>
  );
}
