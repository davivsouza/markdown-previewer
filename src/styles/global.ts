import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    box-sizing: border-box;
  }

`;

export const Header = styled.header`
  max-width: 50%;
  margin: 80px auto 0;
  text-align:center ;

  h1{
    font-family: Arial;
  }
`;
