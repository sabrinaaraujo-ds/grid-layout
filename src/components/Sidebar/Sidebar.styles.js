import styled from "@emotion/styled";

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 100vh;
  background-color: #0e1117;
  position: relative;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const MenuContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.div`
  transition: 0.3s ease;

  li {
    padding: 20px;
  }

  a {
    color: #fff;
    list-style: none;
    font-size: 25px;
    text-decoration: none;
  }

  &:hover {
    background-color: #5d5f66;
  }
`;
