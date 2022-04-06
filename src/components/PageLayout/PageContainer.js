import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import * as S from "./PageContainer.styles";

const PageLayout = ({ children }) => {
  return (
    <S.Layout>
      <Sidebar />
      <S.LayoutContent>{children}</S.LayoutContent>
    </S.Layout>
  );
};

export default PageLayout;
