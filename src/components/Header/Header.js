import React from "react";
import * as S from "./Header.styles";

const Header = ({ title }) => {
  return (
    <S.HeaderWrapper>
      <h2>{title}</h2>
    </S.HeaderWrapper>
  );
};

export default Header;
