import { View } from "react-native";
import styled from "styled-components/native";

const DEFAULT_H = 24;

export const Spacer = styled(View)<{
  height?: number;
  times?: number;
  flexOne?: boolean;
}>`
  height: ${(p) => (p.times ? DEFAULT_H * p.times : p.height || DEFAULT_H)}px;
  flex: ${(p) => (p.flexOne ? 1 : "none")};
`;
