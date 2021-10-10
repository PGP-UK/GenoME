import React from "react";
import { StyleSheet, Image, View, Pressable } from "react-native";
import { Text } from "@ui-kitten/components";
import PageLayout from "../../components/PageLayout";
import { Section, Block, Grid } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useSafeAreaFrame } from "react-native-safe-area-context";

const Icons = [
  {
    pageName: "Ancestry",
    image: require("../../assets/images/landing_screen_icons/globe-europe-duotone.png"),
  },
  {
    pageName: "Eyes",
    image: require("../../assets/images/landing_screen_icons/eye-duotone.png"),
  },
  {
    pageName: "Health",
    image: require("../../assets/images/landing_screen_icons/heartbeat-duotone.png"),
  },
  {
    pageName: "Age",
    image: require("../../assets/images/landing_screen_icons/birthday-cake-duotone.png"),
  },
  {
    pageName: "Smoking",
    image: require("../../assets/images/landing_screen_icons/smoking-duotone.png"),
  },
];

const Iconimage = withSizeInfo(({ sizeSelector, ...props }) => {
  const numImagesPerRow = sizeSelector({ xs: 1, sm: 2, md: 5 });
  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) - 40;
  return (
    <Image
      {...props}
      style={{ width: imageWidth, height: imageWidth }}
      resizeMode="contain"
    />
  );
});

const Landing = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  return (
    <>
      <PageLayout>
        <Text category="h1" style={styles.header}>
          My GENOME contains many layers of INFORMATION, including GENETIC and
          EPIGENETIC information.
        </Text>
        <Text category="h5" style={styles.subheader}>
          My DNA sequence is about 99.9% identical to other people's DNA. the
          remaining 0.1% is what makes me unique, which amounts to several
          million changes. These changes are called "genetic variants". The
          majority of variants are shared between individuals whilst others are
          private (in this case, unique to me or my family).
        </Text>
        <Text category="h5" style={styles.main_text}>
          What is a PRIVATE, GENETIC, or EPIGENETIC variant?
        </Text>
        <Text category="h5" style={styles.main_text}>
          Tap below to explore a few of my variants which we do know about.
        </Text>

        <Grid>
          <Section style={{ marginTop: 30 }}>
            {Icons.map((IconData) => (
              <Block
                xsSize="100%"
                smSize="50%"
                mdSize="20%"
                style={{ alignItems: "center" }}
              >
                <Pressable
                  onPress={() =>
                    navigation.navigate(IconData.pageName, {
                      name: name.toLowerCase(),
                    })
                  }
                  style={styles.box}
                >
                  <Iconimage source={IconData.image} />
                  <Text
                    category="p1"
                    style={{
                      paddingTop: 20,
                      fontSize: 25,
                      textAlign: "center",
                    }}
                  >
                    {IconData.pageName}
                  </Text>
                </Pressable>
              </Block>
            ))}
          </Section>
        </Grid>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 30,
    fontSize: 85,
    textAlign: "center",
  },
  subheader: {
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 70,
    paddingRight: 70,
    fontSize: 30,
    textAlign: "center",
  },
  main_text: {
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 100,
    paddingRight: 100,
    fontSize: 20,
    textAlign: "center",
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
});

export default Landing;
