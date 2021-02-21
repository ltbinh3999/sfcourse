import React, { ReactElement, useState, useEffect } from "react";
import { getDifficulty, getStudyArea } from "./data";
interface Props {
  callback: Function;
}
//TODO: Fix any type hack to proper type.
//TODO: Create filter function and pass back to parent component.
function constructFilters(e: any) {}

export default function Search({ callback }: Props): ReactElement {
  const toCheckbox = (arr: string[], setState: any, state: any) => {
    const onChange = (e: any) => {
      const tmp = [...state];
      const index = parseInt(e.target.getAttribute("name"), 10);
      tmp[index] = !tmp[index];
      setState(tmp);
    };

    return arr.map((x, i) => (
      <div key={i}>
        <input type="checkbox" id={x} name={i.toString()} onChange={onChange} />
        <label htmlFor={x}>{x}</label>
      </div>
    ));
  };

  const [studyArea, setStudyArea] = useState(
    Array(getStudyArea().length).fill(false)
  );
  const studyAreaCheckbox = toCheckbox(getStudyArea(), setStudyArea, studyArea);
  studyAreaCheckbox.splice(8, 1); //Remove the empty check box

  const [difficulty, setDifficulty] = useState(
    Array(getDifficulty().length).fill(false)
  );

  const difficultyCheckbox = toCheckbox(
    getDifficulty(),
    setDifficulty,
    difficulty
  );

  const [text, setText] = useState("");
  // Use JSON.stringify to make sure that callback is only fired when the content of array is changed.
  useEffect(() => {
    const filterObj = {
      text,
      studyArea: getStudyArea().filter((x, i) => studyArea[i]),
      difficulty: getDifficulty().filter((x, i) => difficulty[i]),
    };
    callback(filterObj);
  }, [JSON.stringify(studyArea), JSON.stringify(difficulty), text]);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>{studyAreaCheckbox}</div>
      <div>{difficultyCheckbox}</div>
    </div>
  );
}
