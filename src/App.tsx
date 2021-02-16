import React from "react";
import Display from "./Display";
import { loadCourseData } from "./data";
import Search from "./Search";
import CSS from "csstype";

function searchCallback() {
  return 0;
}

const style: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function App() {
  const data = loadCourseData();
  return (
    <div style={style}>
      <Search callback={searchCallback} />
      <Display courseListData={data} />
    </div>
  );
}

export default App;
