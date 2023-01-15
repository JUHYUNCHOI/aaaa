import react, { useEffect } from 'react';
import Observer from "../../utils/observer";

const Page2 = () => {
  // []안에 있는 값이 바뀔 때만 실행되는게 useEffect.
  useEffect(() => {
    Observer();
  }, []);


  return (
    <div className="container">
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
