import { StyleSheet } from "react-native";
import { CSSProperties } from "styled-components";
import { css } from "styled-components/native";

export type PositionCss<T = object> = (
  | { absFill: true; position?: never }
  | {
      absFill?: false | undefined;
      position?: CSSProperties["position"];
      left?: CSSProperties["left"];
      top?: CSSProperties["top"];
      right?: CSSProperties["right"];
      bottom?: CSSProperties["bottom"];
    }
) &
  T;

export const positionCss = css<PositionCss>`
  ${(p) => (p.absFill ? StyleSheet.absoluteFill : "")}
  ${(p) => (!p.absFill && p.position ? `position: ${p.position};` : "")}
  ${(p) => (!p.absFill && p.left ? `left: ${p.left};` : "")}
  ${(p) => (!p.absFill && p.top ? `top: ${p.top};` : "")}
  ${(p) => (!p.absFill && p.right ? `right: ${p.right};` : "")}
  ${(p) => (!p.absFill && p.bottom ? `bottom: ${p.bottom};` : "")}
`;
