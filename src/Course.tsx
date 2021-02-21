import React, { ReactElement } from "react";
import CSS from "csstype";
import { courseData } from "./data";

interface Props {
  data: courseData;
  highlight: string;
}
const style: CSS.Properties = {
  maxWidth: "80%",
  border: "1px solid",
  marginBottom: "1%",
};
export default function Course({ data, highlight }: Props): ReactElement {
  //handle case
  const highlightText = (text: string, highlight: string) => {
    //console.log(text);
    if (highlight.length === 0) {
      return text;
    } else {
      const sep = new RegExp(
        `[${highlight[0].toLowerCase()}${highlight[0].toUpperCase()}]${highlight.slice(
          1
        )}`
      );
      const parts = text.split(sep);
      const domParts = parts.map((x, i) =>
        i === 0 ? (
          <span>{x}</span>
        ) : (
          <React.Fragment>
            <b>{highlight.toUpperCase()}</b>
            <span>{x}</span>
          </React.Fragment>
        )
      );
      return domParts;
    }
  };
  return (
    <div style={style}>
      <div>
        <span>{data.code + ": "}</span>
        <span>{highlightText(data.title, highlight)}</span>
      </div>
      <div>{`Difficulty: ${data.difficulty} | Study area: ${data.area}`}</div>
      <div>{highlightText(data.description, highlight)}</div>
    </div>
  );
}
