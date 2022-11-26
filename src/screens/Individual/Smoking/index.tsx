import React from 'react';
import PageLayout from '../../../components/PageLayout';
import { PageHeader } from '../../../components/Text';
import BottomSection from './BottomSection';
import CenterImage from './CenterImage';
import SmokingExText from './SmokingExText';
import ImageKey from './Imagekey';
import { StyleSheet } from 'react-native';
import { Section, Block } from 'react-native-responsive-layout';
import BackButton from '../../../components/BackButton';

const dataFile = {
  data: require(`../../../../assets/data/age/data.json`),
};

const Smoking = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  const data = dataFile.data[name];

  return (
    <PageLayout>
      <Section>
        <Block smSize="80%" mdSize="70%">
          <PageHeader style={[styles.heading]}>Smoking Prediction</PageHeader>
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
          paddingBottom: 20,
        }}
        xsHidden
        smHidden
        mdVisible
        xxlHidden>
        <SmokingExText data={dataFile.data[name]} />
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
          <CenterImage
            image={'smokers/nonsmoking.png'}
            data={dataFile.data[name]}
          />
        </Block>
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
          xxlVisible>
          <SmokingExText data={dataFile.data[name]} />
        </Block>
      </Section>
      <Block
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          paddingBottom: 20,
        }}>
        <ImageKey data={data} />
      </Block>
      <Block
        xsSize="100%"
        smSize="100%"
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
        xsVisible
        smVisible
        mdHidden
        lgHidden
        xlHidden
        xxlHidden>
        <SmokingExText data={dataFile.data[name]} />
      </Block>
      <BottomSection data={dataFile.data[name]} />
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: '#63BEE1',
    marginBottom: 20,
  },
});

export default Smoking;
