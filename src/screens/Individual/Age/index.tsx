import React from 'react';
import { Section, Block } from 'react-native-responsive-layout';
import PageLayout from '../../../components/PageLayout';
import { PageHeader } from '../../../components/Text';
import BottomSection from './BottomSection';
import CenterImage from './CenterImage';
import AgeExplanationText from './AgeExplanationText';
import BackButton from '../../../components/BackButton';

const AgeData = require('../../../../assets/data/age/data.json');
const LottieDir = './../../../../assets/images/lottie_animations';
const AllAmbassadors = {
  stephan: {
    AgeImage: require(`${LottieDir}/stephan_age.json`),
    themeColor: '#8CD8C4',
  },
  laura: {
    AgeImage: require(`${LottieDir}/laura_age.json`),
    themeColor: '#F6BD4A',
  },
  momodou: {
    AgeImage: require(`${LottieDir}/momodou_age.json`),
    themeColor: '#D94553',
  },
  colin: {
    AgeImage: require(`${LottieDir}/colin_age.json`),
    themeColor: '#9C82DE',
  },
};

const Age = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  const data = AgeData[name];
  return (
    <>
      <PageLayout>
        <Section>
          <Block smSize="10%" mdSize="70%">
            <PageHeader>Epigenetic Age</PageHeader>
          </Block>
          <Block smSize="90%" mdSize="30%">
            <BackButton navigation={navigation} />
          </Block>
        </Section>
        <Block
          xsSize="100%"
          smSize="100%"
          mdSize="100%"
          lgSize="100%"
          xlSize="100%"
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            paddingBottom: 20,
          }}
          xsHidden
          smHidden
          mdVisible
          xlHidden
          xxlHidden>
          <AgeExplanationText themeColor={data.themeColor} />
        </Block>
        <Section
          stretch
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Block
            xsSize="100%"
            smSize="100%"
            mdSize="50%"
            lgSize="50%"
            xlSize="50%"
            style={{ paddingBottom: 20 }}>
            <CenterImage image={AllAmbassadors[name].AgeImage} data={data} />
          </Block>

          {/*Hidden in potrait mode*/}
          <Block
            xsSize="0%"
            smSize="0%"
            mdSize="50%"
            lgSize="50%"
            xlSize="50%"
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              paddingBottom: 20,
            }}
            xsHidden
            smHidden
            mdHidden
            xlVisible
            xxlVisible>
            <AgeExplanationText themeColor={data.themeColor} />
          </Block>
        </Section>
        <BottomSection data={data} />
      </PageLayout>
    </>
  );
};

export default Age;
