import react from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  const changeLanguage = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="header">
      <select id="select_box" onChange={changeLanguage}>
        <option value="en" selected>English</option>
        <option value="vi">Vietnamese</option>
      </select>
      <button onClick={gotoHome}></button>
    </div>
  );
};

export default Header;