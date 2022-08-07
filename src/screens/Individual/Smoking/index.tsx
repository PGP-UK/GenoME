import React from "react";
import PageLayout from "../../../components/PageLayout";
import { PageHeader } from "../../../components/Text";
import BottomSection from "./BottomSection";
import CenterImage from "./CenterImage";
import SmokingExText from "./SmokingExText";
import ImageKey from "./Imagekey";
import { StyleSheet, Text } from "react-native";
import { Section, Block } from "react-native-responsive-layout";

const dataFile = {
  data: require(`../../../../assets/data/age/data.json`),
};

const AllAmbassadors = {
  stephan: {
    SmokingImage: require(`../../../../assets/images/smokers/nonsmoking.png`),
    image: require("../../../../assets/images/home_screen_profiles/stephan.gif"),
    themeColor: "#8CD8C4",
  },
  laura: {
    SmokingImage: require(`../../../../assets/images/smokers/nonsmoking.png`),
    image: require("../../../../assets/images/home_screen_profiles/laura.gif"),
    themeColor: "#F6BD4A",
  },
  momodou: {
    SmokingImage: require(`../../../../assets/images/smokers/nonsmoking.png`),
    image: require("../../../../assets/images/home_screen_profiles/momodou.gif"),
    themeColor: "#D94553",
  },
  colin: {
    SmokingImage: require(`../../../../assets/images/smokers/nonsmoking.png`),
    image: require("../../../../assets/images/home_screen_profiles/colin.gif"),
    themeColor: "#9C82DE",
  },
};

const Smoking = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  const data = dataFile.data[name];

  return (
    <PageLayout>
      <Section>
        <Block>
          <PageHeader style={[styles.heading]}>Smoking Prediction</PageHeader>
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
        <SmokingExText data={dataFile.data[name]} />
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
          <CenterImage
            source={AllAmbassadors[name].SmokingImage}
            data={dataFile.data[name]}
          />
        </Block>
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
          <SmokingExText data={dataFile.data[name]} />
        </Block>
      </Section>
      <Block
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          paddingBottom: 20,
        }}
      >
        <ImageKey data={data} />
      </Block>
      <Block
        xsSize="100%"
        smSize="100%"
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
        xsVisible
        smVisible
        mdHidden
        lgHidden
        xlHidden
        xxlHidden
      >
        <SmokingExText data={dataFile.data[name]} />
      </Block>
      <BottomSection data={dataFile.data[name]} />
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#63BEE1",
    marginBottom: 20,
  },
});

export default Smoking;