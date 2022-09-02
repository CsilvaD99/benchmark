import React from "react";
import { useSelector, useDispatch } from "react-redux";
import GpuItems from "./GpuItems";
import { SET_GPU } from "../action-types";

export default function Gpu() {
  const GpuSelect = useSelector((state) => state?.SET.GPu[0]);
  const dispatch = useDispatch();
  const GetGpu = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4996380537mshc9f4ff99ee1c989p1017e7jsnae7e29f1ad46",
        "X-RapidAPI-Host": "top-computer-parts.p.rapidapi.com",
      },
    };
    const GpUurl = "https://top-computer-parts.p.rapidapi.com/top/119/gpu";
    const fetchGpu = await fetch(GpUurl, options);
    const GpuJson = await fetchGpu.json();
    GpuJson.shift();
    const GPUARR = [];
    for (let index = 0; index < GpuJson.length; index++) {
      const element = GpuJson[index];

      const SplitJsonG = element.split(",");
      let GpuObj = Object.assign({}, SplitJsonG);
      GPUARR.push(GpuObj);

      if (index === GpuJson.length) {
        break;
      }
    }

    dispatch({ type: SET_GPU, payload: GPUARR });
  };
  return (
    <div>
      <h1 className="Name">Gpu</h1>
      <div className="Layout">
        {GpuSelect?.map((GSelect) => (
          <GpuItems GSelect={GSelect} {...GSelect} />
        ))}

        <button className="Button" onClick={() => GetGpu()}>
          GPU
        </button>
      </div>
    </div>
  );
}
