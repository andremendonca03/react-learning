import React from "react";
import { GlobalContext } from "./GlobalStorage";

const Header = () => {
  const global = React.useContext(GlobalContext);
  const location = global.useLocation();
  const search = new URLSearchParams(location.search)
  console.log(search.get("color"));

  return (
    <nav>
      <global.Link to="/">Home</global.Link>{"  "}
      <global.Link to="/contact">Contact</global.Link>
    </nav>
  );
};

export default Header;
