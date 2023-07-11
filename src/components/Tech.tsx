import React from "react";

type Props = { children: any };

const Tech = (props: Props) => {
  return (
    <li className="flex flex-col items-center justify-center text-center">
      {props.children}
    </li>
  );
};

export default Tech;
