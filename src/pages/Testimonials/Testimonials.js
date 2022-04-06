import React, { useState } from "react";
import { info } from "../../data";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import * as S from "./Testimonials.styles";

const Testimonials = () => {
  const [data, setData] = useState(info);
  return (
    <>
      <Header title="Testimonials" />
      <S.TestimonialsContent>
        {data.map((item, i) => (
          <Card
            className="card"
            key={i}
            name={item.name}
            position={item.position}
          />
        ))}
      </S.TestimonialsContent>
    </>
  );
};

export default Testimonials;
