import { CSSProperties } from "styled-components";
import { css } from "styled-components/native";

export type FlexCss<T = object> = {
  flx?: boolean | CSSProperties["flex"];
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  shrink?: CSSProperties["flexShrink"];
  wrap?: CSSProperties["flexWrap"];
} & T;

export const flexCss = css<FlexCss>`
  flex: ${(p) =>
    p.flx === undefined ? "none" : typeof p.flx === "boolean" ? 1 : p.flx};
  ${(p) => (p.gap ? `gap: ${p.gap}px;` : "")}
  ${(p) => (p.justify ? `justify-content: ${p.justify};` : "")}
  ${(p) => (p.align ? `align-items: ${p.align};` : "")}
  ${(p) => (p.direction ? `flex-direction: ${p.direction};` : "")}
  ${(p) => (p.gap ? `gap: ${p.gap}px;` : "")}
  ${(p) => (p.shrink ? `flex-shrink: ${p.shrink}` : "")}
  ${(p) => (p.wrap ? `flex-wrap: ${p.wrap}` : "")}
`;
