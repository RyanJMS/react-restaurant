import React from "react";
import ProductBox from "../ProductBox/ProductBox";
import pimage1 from "../../assets/s1.png";
import pimage2 from "../../assets/s2.png";

const Products = () => {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum
        temporibus vel unde facere quae ducimus, aperiam beatae ex mollitia,
        quibusdam quisquam fugit minus consectetur dignissimos nam ratione quia
        dolores!
      </p>
      <div className="a-container">
        <ProductBox image={pimage1} title="Big Mary" />
        <ProductBox image={pimage2} title="Big Lucy" />
      </div>
    </div>
  );
};

export default Products;
