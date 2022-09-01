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
    AgeImage: "stephan.png",
    themeColor: "#8CD8C4",
  },
  laura: {
    AgeImage: "laura.png",
    themeColor: "#F6BD4A",
  },
  momodou: {
    AgeImage: "momodou.png",
    themeColor: "#D94553",
  },
  colin: {
    AgeImage: "colin.png",
    themeColor: "#9C82DE",
  },
};

const Age = (props) => {
  const { route } = props;
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

export default Age;
