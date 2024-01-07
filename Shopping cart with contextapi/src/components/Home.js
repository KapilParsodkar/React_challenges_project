import React, { useState } from "react";
import faker from "faker";
import SingleProduct from "./SingleProduct";

faker.seed(100);

function Home() {
  const productarray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  const [products] = useState(productarray);
  console.log(productarray);
  return (
    <div>
      {products.map((prod) => (
        <SingleProduct prod={prod} />
      ))}
    </div>
  );
}

export default Home;
