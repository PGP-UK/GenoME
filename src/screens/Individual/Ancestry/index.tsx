import React from "react";
import { View } from "react-native";
import PageLayout from "../../../components/PageLayout";
import { Grid, Section, Block } from "react-native-responsive-layout";
import TopText from "./TopText";
import FastImage from "react-native-fast-image";

const AllAmbassadorsData = {
  stephan: {
    data: require(`../../../../assets/data/ancestry/stephan.json`),
    image: "stephan_ancestry.jpeg",
  },
  colin: {
    data: require(`../../../../assets/data/ancestry/colin.json`),
    image: "colin_ancestry.jpeg",
  },
  laura: {
    data: require(`../../../../assets/data/ancestry/laura.json`),
    image: "laura_ancestry.jpeg",
  },
  momodou: {
    data: require(`../../../../assets/data/ancestry/momodou.json`),
    image: "momodou_ancestry.jpeg",
  },
};

const Ancestry = (props) => {
  const { route } = props;
  const { name } = route.params;
  const { data, image } = AllAmbassadorsData[name];
  const ancestryWorldUrl =
    "https://cdn.jsdelivr.net/gh/PGP-UK/GenoME/assets/images/ancestry_screen_pie/ancestry_world.jpeg";
  return (
    <>
      <PageLayout>
        <Grid>
          <Section mdSize="50%">
            <TopText data={data} image={image} />
          </Section>

          <Section mdSize="50%">
            <Block hidden xlVisible>
              <View>
                <FastImage
                  source={{ uri: ancestryWorldUrl }}
                  resizeMode={FastImage.resizeMode.contain}
                  style={{ height: 500, width: 1340 }}
                />
              </View>
            </Block>
          </Section>
        </Grid>
      </PageLayout>
    </>
  );
};

export default Ancestry;
