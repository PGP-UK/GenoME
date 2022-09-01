import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Text } from "@ui-kitten/components";
import PageLayout from "../../../components/PageLayout";
import { Section, Block, Grid } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import TextSection from "./TextSection";
import FastImage from 'react-native-fast-image'

const ThemeColors = {
  stephan: "#8CD8C4",
  laura: "#F6BD4A",
  momodou: "#D94553",
  colin: "#9C82DE",
};

const Icons = [
  {
    pageName: "Ancestry",
    image: "globe-europe-light.png",
  },
  {
    pageName: "Eyes",
    image: "eye-light.png",
  },
  {
    pageName: "Health",
    image: "heartbeat-light.png",
  },
  {
    pageName: "Age",
    image: "birthday-cake-light.png",
  },
  {
    pageName: "Smoking",
    image: "smoking-light.png",
  },
];

const Iconimage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { icon } = props;
  const numImagesPerRow = sizeSelector({ xs: 2, sm: 3, md: 5 });
  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) - 40;
  return (
    <FastImage
      source={{
        uri: `https://cdn.jsdelivr.net/gh/PGP-UK/GenoME/assets/images/landing_screen_icons/${icon}`,
      }}
      resizeMode={FastImage.resizeMode.contain}
      style={{ width: imageWidth, height: imageWidth }}
    />
  );
});

const LandingIcon = ({ IconData, name, navigation }) => {
  return (
    <Block
      xsSize="50%"
      smSize="33%"
      mdSize="20%"
      style={styles.landingIconWrapper}
    >
      <Pressable
        onPress={() =>
          navigation.navigate(IconData.pageName, { name: name.toLowerCase() })
        }
        style={styles.box}
      >
        <Iconimage icon={IconData.image} />
        <Text category="h4" style={styles.iconText}>
          {IconData.pageName}
        </Text>
      </Pressable>
    </Block>
  );
};

const Landing = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;

  return (
    <>
      <PageLayout backgroundColor={ThemeColors[name]}>
        <Grid>
          <TextSection />
          <Section style={styles.iconsWrapper}>
            {Icons.map((IconData, idx) => (
              <LandingIcon
                key={idx}
                IconData={IconData}
                name={name}
                navigation={navigation}
              />
            ))}
          </Section>
        </Grid>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  landingIconWrapper: {
    alignItems: "center",
  },
  box: {
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  avpic: {
    width: 200,
    height: 200,
    borderRadius: 205 / 2,
    overflow: "hidden",
    borderWidth: 3,
  },
  avcontainer: {
    alignItems: "center",
    flexWrap: "wrap",
    padding: 8,
    flexWrap: "wrap",
  },
  button_style: {
    color: "white",
    backgroundColor: "#00d5ff",
    padding: 10,
  },
  headerBtn: {
    backgroundColor: "#3BAEDA",
    borderWidth: 0,
    color: "#fff",
  },
  iconText: {
    paddingTop: 7,
    textAlign: "center",
    color: "white",
  },
  iconsWrapper: {
    justifyContent: "center",
  },
});

export default Landing;
