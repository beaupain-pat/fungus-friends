import "styled-components";
import { GenericStyle } from "./generic";

declare module "styled-components/native" {
  export interface DefaultTheme extends GenericStyle {
    backgroundColor: string;
    mainColor: string;
    card: string;
    fontColor: {
      base: string;
      white: string;
    };
    borderRadius: {
      base: number;
      small: number;
    };
  }
}
