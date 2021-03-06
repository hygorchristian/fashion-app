import styled from "styled-components/native";
import { ScrollViewProps } from "react-native";

import Typography from "../../../components/Typography";
import Title from "../../../components/Title";

export const Content = styled.ScrollView.attrs(<ScrollViewProps>{
  contentContainerStyle: {
    paddingHorizontal: 35,
    paddingBottom: 50,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
  bounces: false,
})`
  flex: 1;
`;

export const LoginRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 40px;
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

export const FooterContainer = styled.SafeAreaView``;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 40px;
`;

export const SocialRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 36;
`;

export const TextRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AccountText = styled(Typography)`
  margin-right: 8px;
`;
