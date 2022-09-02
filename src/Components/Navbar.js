import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Link className="link" to="/Cpu">
        CPU
      </Link>
      <Link className="link" to="/Gpu">
        GPU
      </Link>
      <Link className="link" to="/Ram">
        RAM
      </Link>
      <Link className="link" to="/Ssd">
        SDD
      </Link>
      <Link className="link" to="/Hdd">
        HDD
      </Link>
      <Link className="link" to="/Saved">
        SAVED
      </Link>
    </div>
  );
}
