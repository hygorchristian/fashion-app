import styled from "styled-components/native";

import ButtonBase from "../../../../components/Button";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 44px;
`;

export const Subtitle = styled.Text`
  font-family: SFProSemibold;
  font-size: 24px;
  line-height: 30px;
  color: #0c0d34;
  margin-bottom: 12px;
`;

export const Description = styled.Text`
  font-family: SFPro;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0c0d34;
  margin-bottom: 40px;
`;

export const Button = styled(ButtonBase)`
  width: 245px;
`;
