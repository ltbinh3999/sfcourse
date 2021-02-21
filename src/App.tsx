import React, { useState } from "react";
import Display from "./Display";
import { loadCourseData, courseData } from "./data";
import Search from "./Search";
import CSS from "csstype";

const style: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function App() {
  const searchCallback = (filterObj: any) => {
    setFilter(filterObj);
  };
  const createFilter = (x: courseData) => {
    const { text, difficulty, studyArea } = filter;
    const isText = x.description.includes(text) || x.title.includes(text);
    const isDifficulty =
      difficulty.length === 0 ? true : difficulty.includes(x.difficulty);
    const isStudyArea =
      studyArea.length === 0 ? true : studyArea.includes(x.area);
    return isText && isDifficulty && isStudyArea;
  };
  const [filter, setFilter] = useState({
    text: "",
    difficulty: [""],
    studyArea: [""],
  });
  const data = loadCourseData();
  return (
    <div style={style}>
      {JSON.stringify(filter)}
      <Search callback={searchCallback} />
      <Display courseListData={data.filter(createFilter)} />
    </div>
  );
}

export default App;
