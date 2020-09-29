import styled from "styled-components/native";

import ButtonBase from "../../../../components/Button";
import Title from "../../../../components/Title";
import Typography from "../../../../components/Typography";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-horizontal: 44px;
  padding-top: 10px;
`;

export const Subtitle = styled(Title)`
  margin-bottom: 12px;
`;

export const Description = styled(Typography)`
  margin-bottom: 36px;
  text-align: center;
`;

export const Button = styled(ButtonBase)`
  width: 245px;
`;
