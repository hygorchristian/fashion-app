import styled from "styled-components/native";

import Typography from "../../../components/Typography";
import Title from "../../../components/Title";

export const Content = styled.View`
  flex: 1;
  padding-horizontal: 35px;
  align-items: center;
`;

export const WelcomeTitle = styled(Title)`
  margin-top: 44px;
`;

export const Text = styled(Typography)`
  max-width: 250px;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.textSecondaryLight};
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 28px;
  padding-bottom: 36px;
`;

export const SocialRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

export const TextRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AccountText = styled(Typography)`
  margin-right: 8px;
`;