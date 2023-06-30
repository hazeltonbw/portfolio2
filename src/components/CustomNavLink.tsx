import { NavLink } from "react-router-dom";
type Props = {
    to: string;
    innerText: string;
    toggleNav: VoidFunction;
};

const CustomNavLink = (props: Props) => {
    return (
        <NavLink
            to={props.to}
            className={({ isActive }) =>
                `text-4xl md:text-2xl transition-all ease-in-out hover:text-sky-500 dark:hover:text-sky-500
        font-playfair font-semibold hover:underline hover:underline-offset-8
        ${isActive
                    ? "underline underline-offset-8 text-sky-500 hover:!text-sky-700"
                    : ""
                }`
            }
            onClick={props.toggleNav}
        >
            {props.innerText}
        </NavLink>
    );
};

export default CustomNavLink;
