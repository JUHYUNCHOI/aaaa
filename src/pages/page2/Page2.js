import react, { useEffect } from 'react';
import Observer from "../../utils/observer";
import Header from "../../common/Header";

const Page2 = () => {
  // []안에 있는 값이 바뀔 때만 실행되는게 useEffect.
  useEffect(() => {
    Observer();
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="container">
      <Header showHomeButton={true} />
      <div className="h-component hidden">
        <div className="center">
        </div>
      </div>
      <div className="h-component flex-column">

      </div>
    </div>
  );
}

export default Page2;
