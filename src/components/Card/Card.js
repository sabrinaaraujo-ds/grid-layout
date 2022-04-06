import React from "react";
import * as S from "./Card.styles";

const Card = ({ name, position, title, description, price, className }) => {
  return (
    <S.CardContainer className={className}>
      <S.CardContent>
        <p>{name}</p>
        <p>{position || price}</p>
      </S.CardContent>
    </S.CardContainer>
  );
};

export default Card;
