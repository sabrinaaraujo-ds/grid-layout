import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Sidebar.styles";

const Logo = "../../images/logo.png";

const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.Logo>
        <img src={Logo} alt="logo" />
      </S.Logo>
      <S.MenuContainer>
        <ul>
          <S.MenuItem>
            <Link to="/pricing">
              <li>Pricing</li>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/profile">
              <li>Profile</li>
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/testimonials">
              <li>Testimonials</li>
            </Link>
          </S.MenuItem>
        </ul>
      </S.MenuContainer>
    </S.Sidebar>
  );
};

export default Sidebar;
