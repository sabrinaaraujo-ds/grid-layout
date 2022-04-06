import React from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { pricing } from "../../data";
import "./Pricing.styles";

const Pricing = () => {
  return (
    <>
      <Header title="Pricing" />
      <div>
        {pricing.map((item, i) => (
          <Card key={i} name={item.name} price={item.price} />
        ))}
      </div>
    </>
  );
};

export default Pricing;
