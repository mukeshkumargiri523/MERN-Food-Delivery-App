import { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("#qualities");
  // };
  return (
    <>
      <nav className="navbar">
        <div className="logo">KHANA KA DAHBA</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <Link to="menu" className="menuBtn">
            OUR MENU
          </Link>

          {/* <button onClick={handleClick} className="menuBtn">
            OUR MENU
          </button> */}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
