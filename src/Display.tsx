import React, { ReactElement } from "react";
import Course from "./Course";
import { courseData } from "./data";

interface Props {
  courseListData: courseData[];
  highlight: string;
}

export default function Display({
  courseListData,
  highlight,
}: Props): ReactElement {
  const courseList = courseListData.map((x, i) => (
    <Course data={x} key={i} highlight={highlight} />
  ));
  return <React.Fragment>{courseList}</React.Fragment>;
}
