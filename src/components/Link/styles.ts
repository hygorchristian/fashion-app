import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

export const Container = styled.TouchableOpacity.attrs(<TouchableOpacityProps>{
  activeOpacity: 0.6,
  hitSlop: {
    top: 20,
    bottom: 20,
  },
})``;

export const Label = styled.Text`
  font-family: SFPro;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;
