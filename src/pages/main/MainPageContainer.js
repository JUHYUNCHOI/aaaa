import react, { useEffect } from "react";
import "../../styles/index.css";
import Observer from "../../utils/observer";

const MainPageContainer = () => {
  // []안에 있는 값이 바뀔 때만 실행되는게 useEffect.
  useEffect(() => {
    Observer();
  }, []);

  return (
    <div className="container">
      <div className="hidden">
        <div className="center">
          <span>Autrism Support Network</span>
        </div>
      </div>
      <div className="hidden vertical">
        <div>
          <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fthumb2.gettyimageskorea.com%2Fimage_preview%2F700%2F201709%2FEYM%2F752194037.jpg&type=sc960_832" />
          <p>설명이 들어갈 자리입니다.</p>
        </div>
        <div>
          <p>설명이 들어갈 자리입니다.</p>
          <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fthumb2.gettyimageskorea.com%2Fimage_preview%2F700%2F201709%2FEYM%2F752194037.jpg&type=sc960_832" />
        </div>
      </div>
      <div className="hidden">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default MainPageContainer;
