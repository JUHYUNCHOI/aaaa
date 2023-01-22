import react, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";
import Observer from "../../utils/observer";

const MainPageContainer = () => {
  const navigate = useNavigate();

  // []안에 있는 값이 바뀔 때만 실행되는게 useEffect.
  useEffect(() => {
    Observer();
  }, []);

  const goToPage1 = () => {
    navigate("/page1");
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
              src="http://blog.jinbo.net/attach/615/200937431.jpg"
            />
            <p>설명이 들어갈 자리입니다.</p>
          </div>
          <div className="hidden">
            <p>설명이 들어갈 자리입니다.</p>
            <img src="http://blog.jinbo.net/attach/615/200937431.jpg" />
          </div>
        </div>
      </div>
      <div className="h-component hidden">
        <div className="flex-row">
          <img src="http://blog.jinbo.net/attach/615/200937431.jpg" />
          <p>설명 들어갈 자리입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default MainPageContainer;

/*
.center
  background-repeat: no-repeat;
  background-size: cover; auto, cover, contain
  background-position: center;

.h-component
padding-bottom: 50px;
*/
