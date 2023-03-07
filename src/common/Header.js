import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { language } from "../recoil/lang_recoil";
import { useRecoilState } from "recoil";

const Header = (props) => {
  const [lang, setLang] = useRecoilState(language);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  const selectLang = (lang) => () => {
    setLang(lang);
    setIsShow(false);
  }

  const changeLang = () => {
    setIsShow(!isShow);
  }
  // 조건문 ? 명령어1: 명령어2;
  return (
    <div className="header">
      <div id="select_box">
        <button id="selected_lang" onClick={changeLang}>{lang}</button>
        <ul className={isShow ? "listbox show" : "listbox hide"}>
          <li><button className="listbox_item" onClick={selectLang("English")}>English</button></li>
          <li><button className="listbox_item" onClick={selectLang("Vietnames")}>Vietnames</button></li>
        </ul>
      </div>
      {props.showHomeButton ? <button id="go_home_button" onClick={gotoHome}></button> : null}
    </div>
  );
};

export default Header;