import { css } from "styled-components/native";

export type PaddingCss<T = object> = {
  padding?:
    | boolean
    | number
    | "side"
    | string
    | { left?: number; top?: number; right?: number; bottom?: number };
} & T;

export const paddingCss = css<PaddingCss>`
  ${(p) =>
    typeof p.padding === "boolean"
      ? `padding: ${p.theme.containerMargin}px;`
      : typeof p.padding === "number"
      ? `padding: ${p.padding}px;`
      : p.padding === "side"
      ? `padding-left: ${p.theme.containerMargin}px;
         padding-right: ${p.theme.containerMargin}px;`
      : typeof p.padding === "string"
      ? `padding: ${p.padding};`
      : p.padding
      ? `padding-left: ${p.padding.left || 0}px;
         padding-top: ${p.padding.top || 0}px;
         padding-right: ${p.padding.right || 0}px;
         padding-bottom: ${p.padding.bottom || 0}px;`
      : ""}
`;
