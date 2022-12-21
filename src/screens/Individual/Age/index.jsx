import React, { useContext } from 'react';
import { Section, Block } from 'react-native-responsive-layout';

import PageLayout from '../../../components/PageLayout';
import { PageHeader } from '../../../components/Text';
import BackButton from '../../../components/BackButton';
import DataContext from '../../../Context/DataContext';

import BottomSection from './BottomSection';
import CenterImage from './CenterImage';
import AgeExplanationText from './AgeExplanationText';

const Age = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  const { age: { AgeData, AllAmbassadors }} = useContext(DataContext)
  const data = AgeData[name];
  const allAmbassadorsData = AllAmbassadors[name]
  return (
    <>
      <PageLayout>
        <Section>
          <Block smSize="80%" mdSize="70%">
            <PageHeader>Epigenetic Age</PageHeader>
          </Block>
          <Block smSize="20%" mdSize="30%">
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
            paddingBottom: 2,
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
            style={{ paddingBottom: 2 }}>
            <CenterImage image={allAmbassadorsData.AgeImage} data={data} />
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
