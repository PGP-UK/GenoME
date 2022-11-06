import React from 'react';
import PageLayout from '../../../components/PageLayout';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import TopText from './TopText';
import CenterSection from './CenterSection';
import GlobeImage from './GlobeImage';

const LottieDir = './../../../../assets/images/lottie_animations';
const AllAmbassadorsData = {
  stephan: {
    data: require(`../../../../assets/data/ancestry/stephan.json`),
    image: require(`${LottieDir}/stephan_ancestry.json`),
  },
  colin: {
    data: require(`../../../../assets/data/ancestry/colin.json`),
    image: require(`${LottieDir}/colin_ancestry.json`),
  },
  laura: {
    data: require(`../../../../assets/data/ancestry/laura.json`),
    image: require(`${LottieDir}/laura_ancestry.json`),
  },
  momodou: {
    data: require(`../../../../assets/data/ancestry/momodou.json`),
    image: require(`${LottieDir}/momodou_ancestry.json`),
  },
};

const Ancestry = (props) => {
  const { route } = props;
  const { name } = route.params;
  const { data, image } = AllAmbassadorsData[name];
  const ancestryWorldUrl =
    'https://cdn.jsdelivr.net/gh/PGP-UK/GenoME/assets/images/ancestry_screen_pie/ancestry_world.jpeg';
  return (
    <>
      <PageLayout>
        <Grid>
          <Section>
            <TopText />
          </Section>
          <Section>
            <CenterSection data={data} image={image} />
          </Section>
          <Section>
            <GlobeImage />
          </Section>
        </Grid>
      </PageLayout>
    </>
  );
};

export default Ancestry;
