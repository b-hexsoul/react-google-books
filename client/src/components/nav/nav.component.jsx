import "./nav.styles.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="links">
        <Link to="/">Search</Link>
        <Link to="/saved">Saved</Link>
      </div>
    </div>
  );
};

export default Nav;
