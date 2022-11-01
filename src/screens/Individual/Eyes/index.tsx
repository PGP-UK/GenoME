import React from "react";
import { Image, StyleSheet } from "react-native";
import PageLayout from "../../../components/PageLayout";
import { PageText } from "../../../components/Text";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { Section, Block } from "react-native-responsive-layout";
import { PageHeader } from "../../../components/Text";
import FastImage from "react-native-fast-image";

const AllAmbassadors = {
  stephan: {
    eye_video: require("./../../../../assets/videos/stephan_eyes.mp4"),
    eye_image: "blue_eye.png",
    colorText: "My eye colour is predicted to be blue",
    themeColor: "#8CD8C4",
  },
  colin: {
    eye_video: require("./../../../../assets/videos/colin_eyes.mp4"),
    eye_image: "blue_eye.png",
    colorText: "My eye colour is predicted to be blue",
    themeColor: "#9C82DE",
  },
  laura: {
    eye_video: require("./../../../../assets/videos/laura_eyes.mp4"),
    eye_image: "brown_eye.png",
    colorText: "My eye colour is predicted to be brown",
    themeColor: "#F6BD4A",
  },
  momodou: {
    eye_video: require("./../../../../assets/videos/momodou_eyes.mp4"),
    eye_image: "brown_eye.png",
    colorText: "My eye colour is predicted to be brown",
    themeColor: "#D94553",
  },
};

const EyeImage = withSizeInfo(({ sizeSelector, ...props }: any) => {
  const { image } = props;
  const numImagesPerRow = sizeSelector({ xs: 1, md: 3 });
  const spacingBetweenImages = sizeSelector({ xs: 40, sm: 120, md: 80 });

  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) -
    spacingBetweenImages;
  return (
    <FastImage
      source={{
        uri: `https://cdn.jsdelivr.net/gh/PGP-UK/GenoME/assets/images/${image}`,
      }}
      resizeMode={FastImage.resizeMode.contain}
      style={{ width: imageWidth, height: imageWidth, alignSelf: "center" }}
    />
  );
});

const EyeVideo = withSizeInfo(({ sizeSelector, ...props }: any) => {
  const numImagesPerRow = sizeSelector({ xs: 1, md: 3 });
  const spacingBetweenImages = sizeSelector({ xs: 40, sm: 120, md: 80 });

  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) -
    spacingBetweenImages;
  return (
    <Image
      {...props}
      style={{ width: imageWidth, height: imageWidth }}
      resizeMode="contain"
    />
  );
});

const EyeImages = ({ image, themeColor, header }:any) => (
  <Block xsSize="100%" smSize="100%" mdSize="33%">
    <EyeImage image={`eyes/${image}`} />
    <PageHeader style={[styles.header2, { color: themeColor }]}>
      {header}
    </PageHeader>
  </Block>
);

// const EyeVideos = ({ image } :any) => (
//   <Block xsSize="100%" smSize="100%" mdSize="75%">
//     <EyeVideo source={image} resizeMode="contain" />
//   </Block>
// );


const Eyes = (props: any) => {
  const { route } = props;
  const { name } = route.params;
  const eyeData = AllAmbassadors[name];
  const themeColor = eyeData.themeColor;

  return (
    <>
      <PageLayout>
        <Section size="20%">
          <Block>
            <PageHeader category="h1" style={styles.header}>
              Eye Colour
            </PageHeader>
          </Block>
        </Section>



        <Section 
          size="80%"
        >
            <Block
              size="50%"
              hidden
              xlVisible
              stretch
              style={{
                flexDirection: "row",
                justifyContent: "center",
                // alignItems: "center",
                // alignContent: "center",
              }}
            >
              <EyeImages 
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
                image={eyeData.eye_image}
                themeColor={themeColor}
                // header={eyeData.colorText}
              />
            </Block>


            <Block
              size="50%"
              hidden
              xlVisible            
            >
              <Block>

              </Block>
              <Block>
                <PageText category="p1" style={styles.main_text}>
                  Eye colour is determined by multiple genetic variants, some of
                  which have been used to predict my eye colour. Below you can see
                  my actual eyes and the predicted eye colour - how well do you
                  think the prediction has worked?
                </PageText>
                <EyeImages
                  style={{
                    // flexDirection: "row",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // alignContent: "center",
                  }}
                  themeColor={themeColor}
                  header={eyeData.colorText}
                />
              </Block>  
              
              <Block>
                <EyeImages
                  style={{
                    // flexDirection: "row",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // alignContent: "center",
                  }}
                  themeColor={themeColor}
                  header={eyeData.colorText}
                />
                
              </Block>

              
            </Block>
        </Section>



        {/* <Section>

        </Section>



        <Section>

        </Section> */}














        {/* <Section
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
          <EyeVideos image={eyeData.eye_video} />
        </Section> */}

        {/* <Section
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
            <EyeImages
            image={eyeData.eye_image}
            themeColor={themeColor}
            header={eyeData.colorText}
          />
          </Block> */}
          


          {/* Hidden in small screens */}
          {/* <Block
            xlsize="50%"
            xlSize="50%"
            hidden
            xlVisible
            style={{
             
              alignItems: "center",
              alignContent: "center",
              justifyContent: "flex-end"
            }}
          >
            <PageText category="p1" style={styles.main_text}>
              Eye colour is determined by multiple genetic variants, some of
              which have been used to predict my eye colour. Below you can see
              my actual eyes and the predicted eye colour - how well do you
              think the prediction has worked?
            </PageText>
          </Block> */}
        {/* Hidden in small screens */}


        {/* Hidden in large screens */}
          {/* <Block
           xlHidden>
            <PageText category="p1" style={styles.main_text}>
              Eye colour is determined by multiple genetic variants, some of
              which have been used to predict my eye colour. Below you can see
              my actual eyes and the predicted eye colour - how well do you
              think the prediction has worked?
            </PageText>
          </Block> */}
        {/* Hidden in large screens */}  
          



        {/* </Section> */}
        {/* <Section
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
          <EyeImages
            image={eyeData.eye_image}
            themeColor={themeColor}
            header={eyeData.colorText}
          />
        </Section> */}
      </PageLayout>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    color: "#63BEE1",
    marginBottom: 25,
  },
  header2: {
    fontWeight: "400",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 25,
  },
  main_text: {
    marginBottom: 20,
  },
  button_text: {
    marginBottom: 20,
  },
  box: {
    alignItems: "center",
    padding: 10,
    // marginTop: 10,
    // marginBottom: 10,
  },
  headerRow: {
    marginBottom: 25,
  },
  eye_image: {
    height: 700,
    width: 700,
    justifyContent: "center",
    alignItems: "center",
  },
  eye_video: {
    height: 700,
    width: 700,
    justifyContent: "center",
    alignItems: "center",
  },
  eye_text: {
    color: "#8742f5",
    fontSize: 30,
    marginBottom: 20,
    paddingTop: 30,
  },
});

export default Eyes;
