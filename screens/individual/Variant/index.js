import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import PageLayout from '../../../components/PageLayout';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import TopSection from './TopSection';
import BottomSection from './BottomSection';

const AllAmbassadorsData = {
  stephan: {
    data: require(`../../../assets/variants/stephan/data.json`),
    image: require(`../../../assets/variants/stephan/pie_chart.png`),
  },
  colin: {
    data: require(`../../../assets/variants/colin/data.json`),
    image: require(`../../../assets/variants/colin/pie_chart.png`),
  },
  laura: {
    data: require(`../../../assets/variants/laura/data.json`),
    image: require(`../../../assets/variants/laura/pie_chart.png`),
  },
  momodou: {
    data: require(`../../../assets/variants/momodou/data.json`),
    image: require(`../../../assets/variants/momodou/pie_chart.png`),
  },
};

const Variant = (props) => {
  const { route } = props;
  const { name } = route.params;

  return (
    <>
      <PageLayout>
        <TopSection data={AllAmbassadorsData[name].data} />
        <Section stretch>
          <Block size="stretch">
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
              }}>
              <Image
                source={AllAmbassadorsData[name].image}
                style={[styles.image]}
              />
            </View>
          </Block>
        </Section>
        <BottomSection data={AllAmbassadorsData[name].data} />
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    width: 600,
    height: 600,
    maxWidth: '80%',
    resizeMode: 'contain',
  },
});

export default Variant;
