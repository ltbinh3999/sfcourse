import React, { ReactElement } from "react";
import CSS from "csstype";
import { courseData } from "./data";

interface Props {
  data: courseData;
}
const style: CSS.Properties = {
  maxWidth: "80%",
  border: "1px solid",
  marginBottom: "1%",
};
export default function Course({ data }: Props): ReactElement {
  return (
    <div style={style}>
      <div>{data.code + ": " + data.title}</div>
      <span>{`Difficulty: ${data.difficulty} | Study area: ${data.area}`}</span>
      <div>{data.description}</div>
    </div>
  );
}
