import React, { ReactElement } from "react";
import CSS from "csstype";
import { courseData } from "./data";

interface Props {
  data: courseData;
  highlight: string;
}
const bigText: CSS.Properties = {
  fontSize: "1.25em",
};
const style: CSS.Properties = {
  width: "90%",
  border: "1px solid",
  marginTop: "1%",
  padding: "0.5%",
};
export default function Course({ data, highlight }: Props): ReactElement {
  const highlightText = (text: string, highlight: string) => {
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
      <div style={bigText}>
        <a href={`//${data.code}.stanford.edu`} target="_blank">
          <span>{data.code + ": "}</span>
          <span>{highlightText(data.title, highlight)}</span>
        </a>
      </div>
      <div>{`Difficulty: ${data.difficulty} | Study area: ${data.area}`}</div>
      <div>{highlightText(data.description, highlight)}</div>
    </div>
  );
}
