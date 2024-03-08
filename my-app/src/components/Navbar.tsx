import "./Navbar.css";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const navbarList = [
    { name: "Home", link: "/" },
    { name: "Button", link: "/button" },
    { name: "Button", link: "/buttonhook" },
    { name: "Array", link: "/array" },
    { name: "Todo", link: "/todo" },
  ];
  return (
    // <nav className="navbar">
    //   <ul className="navbar-list">
    //     <li className="navbar-item">
    //       <Link to="/" className="navbar-link">
    //         Home
    //       </Link>
    //     </li>
    //     <li className="navbar-item">
    //       <Link to="/button" className="navbar-link">
    //         Button
    //       </Link>
    //     </li>
    //     <li className="navbar-item">
    //       <Link to="/buttonhook" className="navbar-link">
    //         Button
    //       </Link>
    //     </li>
    //     <li className="navbar-item">
    //       <Link to="/array" className="navbar-link">
    //         Array
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
    <nav className="navbar">
      <ul className="navbar-list">
        {navbarList.map((item, index) => {
          return <NavbarItem key={index} route={item.link} text={item.name} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
