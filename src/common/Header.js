import react from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <button onClick={gotoHome}></button>
    </div>
  );
};

export default Header;