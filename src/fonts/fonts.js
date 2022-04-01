import { createGlobalStyle } from "styled-components";
import kidsFont from "./NoteKidsSchool-Ea93l.otf";
import contentFont from "./Lobster-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Kids Font;
    font-style: normal;
    src: url(${kidsFont});
  }
  @font-face {
    font-family: Content Font;
    font-style: normal;
    src: url(${contentFont});
  }
`;
