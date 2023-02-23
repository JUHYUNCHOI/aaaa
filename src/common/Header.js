import react, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { language } from "../recoil/languageRecoil";

const Header = (props) => {
  const [selectedLanaugage, setSelectedLanguage] = useRecoilState(language);
  const [isShow, setIsShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("language")) {
      setSelectedLanguage("English");
      sessionStorage.setItem("language", "English");
    } else {
      setSelectedLanguage(sessionStorage.getItem("language"));
    }


  }, []);

  const gotoHome = () => {
    navigate("/");
  };

  const changeLanguage = (e) => {
    console.log(e.target.value);
  };

  const showList = () => {
    setIsShow(!isShow);
  }

  const onSelectLanguage = (selected) => () => {
    setSelectedLanguage(selected)
    setIsShow(false);

    sessionStorage.setItem("language", selected);
  };

  return (
    <div className="header">
      <div id="select_box">
        <button id="selected_lang" onClick={showList}>{selectedLanaugage}</button>
        <ul className={isShow ? "listbox show_list" : "list_box hide_list"}>
          <li><button className="listbox_item" onClick={onSelectLanguage("English")}>English</button></li>
          <li><button className="listbox_item" onClick={onSelectLanguage("Vietnames")}>Vietnamese</button></li>
        </ul>
      </div>
      {props.showHomeButton ? <button id="go_home_button" onClick={gotoHome}></button> : null}
    </div>
  );
};

export default Header;