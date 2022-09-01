import React from "react";
import axios from "axios";

const Draw = () => {
  const fetchJson = async () => {
    await axios
      .get("/api/sample")
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <button onClick={fetchJson}>getJson</button>
    </div>
  );
};

export default Draw;
