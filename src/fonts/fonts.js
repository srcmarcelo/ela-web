import { createGlobalStyle } from "styled-components";
import MelodyFont from "./CatchyMelodyRegular.ttf";
import ClassroomFont from "./ClassroomPersonalUse-7Bv34.ttf";
import LightFont from "./YouthTouchDemoRegular-4VwY.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Melody Font;
    font-style: normal;
    src: url(${MelodyFont});
  }
  @font-face {
    font-family: Classroom Font;
    font-style: normal;
    src: url(${ClassroomFont});
  }
  @font-face {
    font-family: Light Font;
    font-style: normal;
    src: url(${LightFont});
  }
`;
