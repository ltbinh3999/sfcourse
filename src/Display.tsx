import React, { ReactElement } from "react";
import Course from "./Course";
import { courseData } from "./data";

interface Props {
  courseListData: courseData[];
}

export default function Display({ courseListData }: Props): ReactElement {
  const courseList = courseListData.map((x, i) => <Course data={x} key={i} />);
  return <React.Fragment>{courseList}</React.Fragment>;
}
