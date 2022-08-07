import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { PageText } from "../../components/Text";
import { Section, Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import FastImage from 'react-native-fast-image'

const AllAmbassadors = [
  {
    name: "Stephan",
    hexId: "uk35C650",
    image: "stephan.gif",
    themeColor: "#8CD8C4",
  },
  {
    name: "Laura",
    hexId: "uk33D02F",
    image: "laura.gif",
    themeColor: "#F6BD4A",
  },
  {
    name: "Momodou",
    hexId: "uk481F67",
    image: "momodou.gif",
    themeColor: "#D94553",
  },
  {
    name: "Colin",
    hexId: "uk4CA868",
    image: "colin.gif",
    themeColor: "#9C82DE",
  },
];

const AmbassadorImage = withSizeInfo(({ sizeSelector, image, ...props }) => {
  const numImagesPerRow = sizeSelector({
    xs: 1,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 4,
    xxl: 4,
  });
  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) - 80;
  return (
    <FastImage
      style={{ width: imageWidth, height: imageWidth }}
      source={{
            uri: `https://cdn.jsdelivr.net/gh/PGP-UK/GenoME/assets/images/home_screen_profiles/${image}`,
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
  );
});

const Ambassador = (props) => {
  const { name, hexId, image, themeColor, navigation } = props;
  return (
    <Block
      xsSize="100%"
      smSize="50%"
      mdSize="25%"
      lgSize="50%"
      xlSize="50%"
      xxlSize="25%"
    >
      <Pressable
        onPress={() =>
          navigation.navigate("Landing", { name: name.toLowerCase() })
        }
        style={styles.box}
      >
        <AmbassadorImage image={image} />
        <PageText category="p1" style={[styles.header, { color: themeColor }]}>
          {hexId}
        </PageText>
        <PageText category="p1" style={styles.secondLineText}>
          Also known as: {name}
        </PageText>
      </Pressable>
    </Block>
  );
};

const Ambassadors = ({ navigation }) => (
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
    {AllAmbassadors.map((AmbassadorData, idx) => (
      <Ambassador key={idx} {...AmbassadorData} navigation={navigation} />
    ))}
  </Section>
);

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 10,
  },
  secondLineText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default Ambassadors;
