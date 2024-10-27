import { CSSProperties } from "styled-components";
import { css } from "styled-components/native";

export type BgOpacityCss<T = object> = {
  background?: string & {};
  opacity?: CSSProperties["opacity"];
} & T;

export const bgOpacityCss = css<BgOpacityCss>`
  ${(p) => (p.background ? `background-color: ${p.background};` : "")}
  ${(p) => (typeof p.opacity === "number" ? `opacity: ${p.opacity};` : "")}
`;
