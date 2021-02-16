import React, { ReactElement } from "react";
import { getDifficulty, getStudyArea } from "./data";
interface Props {
  callback: Function;
}
function toCheckbox(arr: string[]) {
  return arr.map((x, i) => (
    <div>
      <input type="checkbox" id={x} />
      <label htmlFor={x}>{x}</label>
    </div>
  ));
}
export default function Search({ callback }: Props): ReactElement {
  const studyAreaCheckbox = toCheckbox(getStudyArea());
  studyAreaCheckbox.splice(8, 1); //Remove the empty check box
  const difficultyCheckbox = toCheckbox(getDifficulty());
  return (
    <div>
      <input type="text" />
      <div>{studyAreaCheckbox}</div>
      <div>{difficultyCheckbox}</div>
    </div>
  );
}
