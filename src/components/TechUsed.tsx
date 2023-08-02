import { IconContext } from 'react-icons';
type Props = {
  children: any;
  iconSize: string;
};

const TechUsed = (props: Props) => {
  return (
    <ul
      className={`my-4 grid grid-cols-3 gap-x-1 gap-y-8 rounded-xl bg-sky-900 p-4 text-white sm:grid-cols-4 md:gap-x-0 ${
        props.iconSize === '64' ? 'lg:grid-cols-6' : 'lg:grid-cols-4'
      }`}
    >
      <IconContext.Provider value={{ size: props.iconSize }}>
        {props.children}
      </IconContext.Provider>
    </ul>
  );
};

export default TechUsed;
