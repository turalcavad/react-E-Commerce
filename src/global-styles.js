import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html, body {
	font-family: "Urbanist", sans-serif;
}
a, button, img, input, span, h4 {
    transition: all 0.3s ease 0s;
}
img{
  user-select: none;
}
input{
    border: none;
    outline: none;
}
`;
