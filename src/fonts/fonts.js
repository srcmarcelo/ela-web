import { createGlobalStyle } from "styled-components";
import kidsFont from "./NoteKidsSchool-Ea93l.otf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Kids Font;
    font-style: normal;
    src: url(${kidsFont});
  }
`;
