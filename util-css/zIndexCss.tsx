import { css } from "styled-components/native";

export type ZIndexCss<T = object> = {
  zIndex?: number;
} & T;

export const zIndexCss = css<ZIndexCss>`
  ${(p) => (typeof p.zIndex === "number" ? `zIndex: ${p.zIndex};` : "")}
`;
