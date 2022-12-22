import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { Section, Block } from 'react-native-responsive-layout';
import FastImage from '@cuvent/react-native-fast-image';

import { PageHeader } from '../../../components/Text';
import PageLayout from '../../../components/PageLayout';
import { PageText } from '../../../components/Text';
import BackButton from '../../../components/BackButton';
import DataContext from '../../../Context/DataContext';

const EyeImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { image } = props;
  const numImagesPerRow = sizeSelector({ xs: 1.1, sm: 1, md: 1.3, xl: 2 });
  const spacingBetweenImages = sizeSelector({ xs: 120, sm: 120, md: 80 });


  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) -
    spacingBetweenImages;
  return (
    <FastImage
      source={image}
      resizeMode={FastImage.resizeMode.contain}
      style={{
        width: imageWidth,
        height: imageWidth,
        alignSelf: "center",
        alignItems: "center",
        marginTop: 80

      }}
    />
  );
});

// const EyeVideo = withSizeInfo(({ sizeSelector, ...props }: any) => {
//   const numImagesPerRow = sizeSelector({ xs: 1, md: 3 });
//   const spacingBetweenImages = sizeSelector({ xs: 40, sm: 120, md: 80 });

//   const imageWidth =
//     Math.round(useSafeAreaFrame().width / numImagesPerRow) -
//     spacingBetweenImages;
//   return (
//     <Image
//       {...props}
//       style={{ width: imageWidth, height: imageWidth }}
//       resizeMode="contain"
//     />
//   );
// });

const EyeImages = ({ image, themeColor, header }: any) => (
  <Block xsSize="100%" smSize="100%" mdSize="33%">
    <EyeImage image={image} />
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
  const { route, navigation } = props;
  const { name } = route.params;
  const { eyes: { AllAmbassadors } } = useContext(DataContext)
  const eyeData = AllAmbassadors[name];
  const themeColor = eyeData.themeColor;

  return (
    <>
      <PageLayout>
        <Section size="20%">
          <Block xsSize="80%" mdSize="70%">
            <PageHeader category="h1" style={styles.header}>
              Eye Colour
            </PageHeader>
          </Block>
          <Block xsSize="20%" mdSize="30%">
            <BackButton navigation={navigation} />
          </Block>
        </Section>

        <Section size="80%">
          <Block
            size="50%"
            hidden
            xlVisible
            stretch
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <EyeImages
              image={eyeData.eye_image}
              themeColor={themeColor}
              // header={eyeData.colorText}
            />
          </Block>

          <Block size="50%" hidden xlVisible>
            <Block
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                // alignContent: "center",
              }}>
              <PageText
                category="p1"
                style={{
                  // flexDirection: "row",
                  // justifyContent: "center",
                  alignItems: 'flex-end',
                  alignContent: 'flex-end',
                  marginTop: 275,
                }}>
                Eye colour is determined by multiple genetic variants, some of
                which have been used to predict my eye colour. Below you can see
                my actual eyes and the predicted eye colour - how well do you
                think the prediction has worked?
              </PageText>
            </Block>

            <Block>
              <PageHeader
                style={[styles.header2, { color: themeColor, marginTop: 80 }]}>
                {eyeData.colorText}
              </PageHeader>
            </Block>
          </Block>

          <Block xlHidden>
            <PageText
              category="p1"
              style={{
                // flexDirection: "row",
                // justifyContent: "center",
                alignItems: 'flex-end',
                alignContent: 'flex-end',
                marginTop: 25,
              }}>
              Eye colour is determined by multiple genetic variants, some of
              which have been used to predict my eye colour. Below you can see
              my actual eyes and the predicted eye colour - how well do you
              think the prediction has worked?
            </PageText>
          </Block>

          <Block
            xlHidden
            stretch
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <EyeImages
              image={eyeData.eye_image}
              themeColor={themeColor}
              // header={eyeData.colorText}
            />
          </Block>
          <Block xlHidden>
            <PageHeader
              style={[styles.header2, { color: themeColor, marginTop: 30 }]}>
              {eyeData.colorText}
            </PageHeader>
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
    color: '#63BEE1',
    marginBottom: 25,
  },
  header2: {
    fontWeight: '400',
    textAlign: 'center',
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
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  eye_video: {
    height: 700,
    width: 700,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eye_text: {
    color: '#8742f5',
    fontSize: 30,
    marginBottom: 20,
    paddingTop: 30,
  },
});

export default Eyes;