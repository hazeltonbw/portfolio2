type Props = { children: Array<JSX.Element> };
const Tech = (props: Props) => {
  return (
    <li className="flex flex-col items-center justify-start gap-y-1 text-center text-white">
      {props.children}
    </li>
  );
};

export default Tech;
