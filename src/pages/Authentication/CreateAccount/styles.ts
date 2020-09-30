import styled from "styled-components/native";
import { ScrollViewProps } from "react-native";

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
