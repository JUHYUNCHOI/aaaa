import react, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Observer from "../../utils/observer";
import { getProducts } from "../../lib/products";
import item1 from "../../res/img/item1.jpeg";
import item2 from "../../res/img/item2.jpeg";
import item3 from "../../res/img/item3.png";
import item4 from "../../res/img/item4.jpeg";
import item5 from "../../res/img/item5.jpeg";

const Page3 = () => {
  const [products] = useState(() => {
    return getProducts();
  })

  const images = {
    "item1": item1,
    "item2": item2,
    "item3": item3,
    "item4": item4,
    "item5": item5
  };

  useEffect(() => {
    Observer();
    window.scrollTo(0, 0);
  }, []);

  // products = [
  //   {
  //     name: "Item1",
  //     img: "item1.jpeg",
  //     link: "www.naver.com",
  //     price: 2000
  //   }, {
  //     name: "Item2",
  //     img: "item2.jpeg",
  //     link: "www.naver.com",
  //     price: 2000
  //   }, {
  //     name: "Item3",
  //     img: "item3.jpeg",
  //     link: "www.naver.com",
  //     price: 2000
  //   }
  // ]
  console.log(111, products)
  return (
    <div className="container">
      <Header showHomeButton={true} />
      <div className="h-component hidden">
        <div className="center">
        </div>
      </div>
      <div className="h-component p">
        {
          products.map(item => {
            return (
              <div className="product-container">
                <a href={item.link} target="_blank" rel="noopener noreferrer">  <img src={images[item.img]}></img>   </a>
                <div>{item.name}</div>
                <div>{item.price}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Page3;