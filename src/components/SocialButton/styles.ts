import styled from "styled-components/native";
import Ripple from "react-native-material-ripple";

const size = 48;

export const Container = styled(Ripple)`
  height: ${size}px;
  width: ${size}px;
  border-radius: ${size / 2}px;
  background-color: white;
  margin-horizontal: 8px;
  justify-content: center;
  align-items: center;
`;
