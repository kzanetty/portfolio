import { Link } from "react-scroll";

export function LinkComponent({ children, to, heightNavbar, style, onClick }) {
  return (
    <>
      <Link
        className={style}
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-heightNavbar}
        duration={1000}
        onClick={onClick}
      >
        {children}
      </Link>
    </>
  );
}
