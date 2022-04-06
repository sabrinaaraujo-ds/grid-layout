import styled from "@emotion/styled";
import { grid } from "../../components/Grid/Grid";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 90px;
  align-items: center;
`;

export const TestimonialsContent = styled.div`
  ${grid()}
  grid-row-gap: 2rem;
  .card {
    background-color: tomato;
    grid-column: span 6;
  }
`;
