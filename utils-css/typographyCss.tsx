import { CSSProperties } from "styled-components";
import { css } from "styled-components/native";

export type TypographyCss<T = object> = {
  textTransform?: CSSProperties["textTransform"];
} & T;

export const typographyCss = css<TypographyCss>`
  ${(p) => (typeof p.textTransform ? `textTransform: ${p.textTransform};` : "")}
`;
