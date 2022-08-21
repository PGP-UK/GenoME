import React from "react";
import { StyleSheet, ImageBackground, Linking } from "react-native";
import PageLayout from "../../components/PageLayout";
import SocialMedia from "./SocialMedia";
import { PageHeader, PageText } from "../../components/Text";
import { Section, Block } from "react-native-responsive-layout";

const About = (props: any) => {
  const { navigation } = props;
  interface Props {
    navigation: any
  }
  return (
    <>
      <PageLayout>
        <Section
          stretch
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexWrap: "wrap",
            marginBottom: 40,
          }}
        >
          <Block>
            <PageHeader style={styles.headerRow}>
              About PGP-UK and the global network of Personal Genome Projects
            </PageHeader>
          </Block>
        </Section>
        <Section
          stretch
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          <Block>
            <PageText style={styles.main_text}>
              The PGP-UK project is part of the global network of Personal
              Genome Projects, which all share the vision of advancing science
              through open data sharing. Currently, there are projects in
              America, Austria, Canada, China and the UK. There are multiple
              ways to join the PGP-UK community and keep-up-date with the
              project - just follow the links.
            </PageText>
          </Block>
        </Section>
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
          <Block>
            <SocialMedia
              navigation={navigation}
              SocialMediaStyle={styles.socialMedia}
            />
          </Block>
        </Section>

        <Section
          stretch
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          <Block>
            <ImageBackground
              style={styles.bottomImage}
              source={require("../../../assets/images/about_us/more-information_globe.png")}
            >
              <PageText style={styles.bottom_red_text}>
                DISCLAIMER: The generation of genomic data is not an error-free
                process and our analysis system is still under development.
                becasue the body of knowledge of genetic and epigenetic variants
                has many uncertainties, we cannot guarantee that our analyses
                are either accurate or complete.
              </PageText>

              <PageText style={styles.bottom_text}>
                This app was designed and developed by the PGP-UK/GenoME team.
              </PageText>
            </ImageBackground>
          </Block>
        </Section>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    marginBottom: 25,
  },
  main_text: {
    color: "#666E7A",
    fontSize: 20,
    marginBottom: 25,
  },
  bottom_text: {
    color: "#666E7A",
    fontSize: 10,
    position: "relative",
    marginTop: 5,
  },
  bottom_red_text: {
    color: "#ff0000",
    fontSize: 10,
    marginTop: 150,
    textAlign: "auto",
    //position: 'relative',
  },
  bottomImage: {
    height: 225,
    width: 370,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  socialMedia: {
    marginTop: 20,
    marginBottom: 25,
  },

  socialMediaLogo: {
    width: 50,
    height: 50,
  },
});

export default About;
