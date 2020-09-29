import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const Container = styled(Animated.View)`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-horizontal: 4px;
`;
