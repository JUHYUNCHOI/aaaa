import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";
import Observer from "../../utils/observer";
import Map from "../../common/Map4";
import autism from "../../res/img/autism.svg";
import interview from "../../res/img/interview.svg";

const MainPageContainer = () => {
  const navigate = useNavigate();

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

  return (
    <div className="container">
      <div className="h-component hidden">
        <div className="center"></div>
      </div>
      <div className="h-component hidden border">
        <div className="flex-column">
          <div className="hidden">
            <img
              onClick={goToPage1}
              src={autism}
            />
            <div className="flex-column paragraph">
              <p>
                Autism Spectrum Disorder is a developmental disorder that
                hinders one’s ability to communicate, learn, behave and interact
                with others. It is a disorder that can be diagnosed at any age.
                Symptoms generally appear in the first two years of the child’s
                life. Click to Learn more
              </p>
              <p>Click to see Thuy's story</p>
            </div>
          </div>
          <div className="hidden">
            <p>Click to see Thury</p>
            <img
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
    </div>
  );
};

export default MainPageContainer;
