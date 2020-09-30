import styled from "styled-components/native";
import { Checkbox } from "react-native-paper";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text``;

export const Check = styled(Checkbox)`
  margin-horizontal: 10px;
`;
