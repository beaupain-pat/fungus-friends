import styled from "styled-components/native";
import {
  type BgOpacityCss,
  type FlexCss,
  type PaddingCss,
  type PositionCss,
  type ZIndexCss,
  bgOpacityCss,
  flexCss,
  paddingCss,
  positionCss,
  zIndexCss,
} from "@/utils-css";
import { View } from "react-native";

export const ViewWith = styled(View)<
  FlexCss & PositionCss & PaddingCss & ZIndexCss & BgOpacityCss
>`
  ${positionCss}
  ${paddingCss}
  ${flexCss}
  ${zIndexCss}
  ${bgOpacityCss}
`;
