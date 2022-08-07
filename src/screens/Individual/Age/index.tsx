import React from "react";
import { StyleSheet } from "react-native";
import { Section, Block } from "react-native-responsive-layout";

import PageLayout from "../../../components/PageLayout";
import { PageHeader } from "../../../components/Text";
import BottomSection from "./BottomSection";
import CenterImage from "./CenterImage";
import AgeExplanationText from "./AgeExplanationText";

const AgeData = require("../../../../assets/data/age/data.json");

const AllAmbassadors = {
  stephan: {
    AgeImage: require("../../../../assets/images/age_pie_charts/stephan.png"),
    image: require("../../../../assets/images/home_screen_profiles/stephan.gif"),
    themeColor: "#8CD8C4",
  },
  laura: {
    AgeImage: require("../../../../assets/images/age_pie_charts/laura.png"),
    image: require("../../../../assets/images/home_screen_profiles/laura.gif"),
    themeColor: "#F6BD4A",
  },
  momodou: {
    AgeImage: require("../../../../assets/images/age_pie_charts/momodou.png"),
    image: require("../../../../assets/images/home_screen_profiles/momodou.gif"),
    themeColor: "#D94553",
  },
  colin: {
    AgeImage: require("../../../../assets/images/age_pie_charts/colin.png"),
    image: require("../../../../assets/images/home_screen_profiles/colin.gif"),
    themeColor: "#9C82DE",
  },
};

const Age = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  const data = AgeData[name];
  return (
    <>
      <PageLayout>
        <Section>
          <Block>
            <PageHeader>Epigenetic Age</PageHeader>
          </Block>
        </Section>
        <Block
          xsSize="100%"
          smSize="100%"
          mdSize="100%"
          lgSize="100%"
          xlSize="100%"
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            paddingBottom: 20,
          }}
          xsHidden
          smHidden
          mdVisible
          xxlHidden
        >
          <AgeExplanationText themeColor={data.themeColor} />
        </Block>
        <Section
          stretch
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Block
            xsSize="100%"
            smSize="100%"
            mdSize="50%"
            lgSize="50%"
            xlSize="50%"
            style={{ paddingBottom: 20 }}
          >
            <CenterImage image={AllAmbassadors[name].AgeImage} data={data} />
          </Block>

          {/*Hidden in potrait mode*/}
          <Block
            xsSize="0%"
            smSize="0%"
            mdSize="50%"
            lgSize="50%"
            xlSize="50%"
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              paddingBottom: 20,
            }}
            xsHidden
            smHidden
            mdHidden
            xxlVisible
          >
            <AgeExplanationText themeColor={data.themeColor} />
          </Block>
        </Section>
        <BottomSection data={data} />
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#63BEE1",
    marginBottom: 20,
    fontSize: 40,
    fontWeight: "400",
  },
});

export default Age;
