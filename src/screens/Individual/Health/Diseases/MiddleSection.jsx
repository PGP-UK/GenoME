import React from "react";
import { Section, Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import FastImage from '@cuvent/react-native-fast-image';

import { PageText } from "../../../../components/Text";
import { PageHeader } from "../../../../components/Text";

const AmbassadorImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { image } = props;
  const ImageStyles = sizeSelector({ xs: styles.imageSm, md: styles.imageMd });
  const ImagePercent = sizeSelector({ xs: 0.8, md: 0.3, lg: 0.3, xl: 0.4 });
  const imageWidth = Math.round(useSafeAreaFrame().width * ImagePercent) - 40;
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.8);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;

  return (
    <FastImage
      source={image}
      // resizeMode={FastImage.resizeMode.contain}
      style={[ImageStyles, { width: finalImageWidth, height: finalImageWidth }]}
    />
  );
});

const ColorSplitText = withSizeInfo(({ sizeSelector }) => {
  const ColorSplitStyles = sizeSelector({
    xs: styles.xsColorSplitText,
    md: styles.mdColorSplitText,
  });
  return (
    <PageText style={ColorSplitStyles}>
      The colour split illustrates how common each variant type is in the
      population.
    </PageText>
  );
});

const VariantRisk = withSizeInfo(({ sizeSelector, riskData }) => {
  const ImageStyles = sizeSelector({
    xs: styles.xsHeader3,
    md: styles.mdHeader3,
  });

  return (
    <View>
      <Block
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <PageText style={styles.header2}>Risk with each variant type:</PageText>
      </Block>
      {/* Hidden in large screens */}
      <Block xlHidden>
        <PageHeader category="h4" style={ImageStyles}>
          <View style={styles.square1} />
          &nbsp;
          {riskData.first}
        </PageHeader>
        <PageHeader category="h4" style={ImageStyles}>
          <View style={styles.square2} />
          &nbsp;
          {riskData.second}
        </PageHeader>
        <PageHeader category="h4" style={ImageStyles}>
          <View style={styles.square3} />
          &nbsp;
          {riskData.third}
        </PageHeader>
      </Block>

      {/* Hidden in small screens */}
      <Block
        hidden
        xlVisible
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <PageHeader category="h4" style={ImageStyles}>
          <View style={styles.square1} />
          &nbsp;
          {riskData.first}
          &nbsp;
          <View style={styles.square2} />
          &nbsp;
          {riskData.second}
          &nbsp;
          <View style={styles.square3} />
          &nbsp;
          {riskData.third}
          &nbsp;
        </PageHeader>
      </Block>
      {/* Hidden in small screens */}
      <Block hidden mdVisible xlHidden>
        <ColorSplitText />
      </Block>
    </View>
  );
});

const MiddleSection = (props) => {
  const { data, image } = props;
  const backgroundColour = data.population.colour;
  return (
    <>
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
        {/* Hidden in large screens */}
        <Block
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            paddingBottom: 20,
          }}
          mdHidden
          xlVisible
        >
          <ColorSplitText />
        </Block>

        {/* Hidden in large screens */}
        <Block
          xsSize="100%"
          smSize="100%"
          mdSize="33%"
          lgSize="33%"
          xlSize="50%"
          hidden
          mdVisible
          xlHidden
        >
          <VariantRisk riskData={data.risk} />
        </Block>

        <Block
          xsSize="100%"
          smSize="100%"
          mdSize="33%"
          lgSize="33%"
          xlSize="50%"
          style={{ paddingBottom: 20 }}
        >
          <AmbassadorImage image={image} />
        </Block>

        {/* Hidden in small screens */}
        <Block
          xsSize="100%"
          smSize="100%"
          mdSize="33%"
          lgSize="33%"
          xlSize="50%"
          mdHidden
        >
          <VariantRisk riskData={data.risk} />
        </Block>

        <Block
          xsSize="100%"
          smSize="100%"
          mdSize="33%"
          lgSize="33%"
          xlSize="40%"
          style={{ paddingTop: 30 }}
        >
          <PageText
            style={[styles.box_text, { backgroundColor: backgroundColour }]}
          >
            There are three versions of this variant and{" "}
            {data.population.percent} of the population have the same variant as
            me. {"\n"}
            {"\n"}
            {data.message}
          </PageText>
        </Block>

        <Block
          xsSize="100%"
          smSize="100%"
          mdSize="33%"
          lgSize="33%"
          xlSize="100%"
          hidden
          xlVisible
        >
          <VariantRisk riskData={data.risk} />
        </Block>
      </Section>
    </>
  );
};

const styles = StyleSheet.create({
  header2: {
    color: "#666E7A",
    marginBottom: 10,
  },
  mdHeader3: {
    fontSize: 25,
    color: "#666E7A",
  },
  xsHeader3: {
    fontSize: 25,
    color: "#666E7A",
  },
  main_text: {
    color: "#666E7A",
    marginBottom: 20,
  },
  box_text: {
    color: "white",
    padding: 10,
    marginBottom: 20,
  },
  square1: {
    width: 25,
    height: 25,
    backgroundColor: "#977ABD",
  },
  square2: {
    width: 25,
    height: 25,
    backgroundColor: "#34BC99",
  },
  square3: {
    width: 25,
    height: 25,
    backgroundColor: "#F6BB41",
  },
  imageMd: {
    alignSelf: "center",
    // marginTop: -50,
  },
  imageSm: {
    alignSelf: "center",
  },
  xsColorSplitText: {
    textAlign: "center",
    marginBottom: 20,
    color: "#666E7A",
  },
  mdColorSplitText: {
    marginTop: 20,
    color: "#666E7A",
  },
});

export default MiddleSection;
