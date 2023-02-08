import React from "react";
import { Link } from "react-router-dom";
//import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/Search/Search";
import LogoPic from "../../assets/icons/Logo.Pic.svg";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        background: "black",
        height: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "80%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <SearchBar />
      </div>
    </div>
  );
}
