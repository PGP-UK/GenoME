import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import { Section, Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";

const TextSection = ({ textStyle, lines }) => (
  <>
    {lines.map((l, i) => (
      <Text key={i} style={textStyle}>
        {l}
      </Text>
    ))}
  </>
);

const LeftText = ({ textStyle, data }) => (
  <TextSection
    textStyle={textStyle}
    lines={[
      "These numbers reflect how many single nucleotide variants (SNVs) were identified in my genome",
    ]}
  />
);

const RightText = ({ textStyle, data }) => (
  <TextSection
    textStyle={textStyle}
    lines={["Number of private variants:", data.num, data.percent]}
  />
);

const BottomSection = withSizeInfo(({ sizeSelector, data }) => {
  const mainStyles = sizeSelector({
    xs: styles.mainSm,
    md: styles.mainMd,
  });

  const rowStyles = sizeSelector({
    xs: styles.textRowSm,
    md: styles.textRowMd,
  });
  const leftTextStyles = sizeSelector({
    xs: styles.leftTextSm,
    md: styles.leftTextMd,
  });
  const rightTextStyles = sizeSelector({
    xs: styles.rightTextSm,
    md: styles.rightTextMd,
  });

  return (
    <Section style={mainStyles}>
      <Block xsSize="100%" mdSize="50%" style={rowStyles}>
        <TextSection
          textStyle={leftTextStyles}
          lines={[
            "These numbers reflect how many single nucleotide variants (SNVs) were identified in my genome.",
          ]}
        />
      </Block>
      <Block xsSize="100%" mdSize="50%" style={rowStyles}>
        <TextSection
          textStyle={[rightTextStyles, { color: data.themeColor }]}
          lines={[
            "Number of private variants:",
            data.private.num,
            data.private.percent,
          ]}
        />
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  mainSm: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "column-reverse",
  },
  mainMd: {
    marginTop: 10,
    marginBottom: 20,
  },
  textRowSm: {
    marginTop: 20,
  },
  leftTextSm: {
    fontSize: 35,
    color: "#45B0D4",
    textAlign: "center",
  },
  leftTextMd: {
    fontSize: 35,
    color: "#45B0D4",
    textAlign: "left",
  },
  rightTextSm: {
    fontSize: 35,
    textAlign: "center",
  },
  rightTextMd: {
    fontSize: 35,
    textAlign: "right",
  },
});

export default BottomSection;
