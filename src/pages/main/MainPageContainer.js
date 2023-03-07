import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";
import Observer from "../../utils/observer";
import Map from "../../common/Map4";
import autism from "../../res/img/autism.svg";
import interview from "../../res/img/interview.svg";
import shop from "../../res/img/shop.svg";
import Header from "../../common/Header";
import { useRecoilState } from "recoil";
import { language } from "../../recoil/lang_recoil";
import { Main_Label } from "../../common/lang"

const MainPageContainer = () => {
  const navigate = useNavigate();
  const [lang] = useRecoilState(language);

  // []안에 있는 값이 바뀔 때만 실행되는게 useEffect.
  useEffect(() => {
    Observer();
    window.scrollTo(0, 0);
  }, []);

  const goToPage1 = () => {
    navigate("/page1");
  };

  const goToPage2 = () => {
    navigate("/page2");
  };

  const goToPage3 = () => {
    navigate("/page3");
  };

  const LABEL = lang === "English" ? Main_Label.EN : Main_Label.VI;

  return (
    <div className="container">
      <Header />
      <div className="h-component hidden">
        <div className="center"></div>
      </div>
      <div className="h-component hidden border">
        <div className="flex-column">
          <div className="hidden">
            <img
              className="main-img"
              onClick={goToPage1}
              src={autism}
            />
            <div className="flex-column paragraph">
              <p>
                {LABEL.ASD_SHORT_INFO}
              </p>
              <p>{LABEL.ASD_CLICK}</p>
            </div>
          </div>
          <div className="hidden">
            <p>Click to see Thury</p>
            <img
              className="main-img"
              onClick={goToPage2}
              src={interview}
            />
          </div>
        </div>
      </div>
      <div className="h-component hidden">
        <div className="flex-row">
          <Map />
          <p>설명 들어갈 자리입니다.</p>
        </div>
      </div>
      <div className="h-component hidden">
        <div className="flex-column">
          <img src={shop} onClick={goToPage3}></img>
          <img></img>
        </div>
      </div>
    </div>
  );
};

export default MainPageContainer;
