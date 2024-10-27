import { DefaultTheme } from "styled-components/native";
import { generic } from "./generic";

export const defaultTheme: DefaultTheme = {
  ...generic,
  backgroundColor: "#1b3e3a",
  card: "#04302d",
  mainColor: "#99fe45",
  fontColor: {
    base: "#919191",
    white: "#ffffff",
  },
  borderRadius: {
    base: 12,
    small: 8,
  },
};
