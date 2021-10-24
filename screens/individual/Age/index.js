import React from 'react';
import { StyleSheet, Text } from 'react-native';

import PageLayout from '../../../components/PageLayout';
import BottomSection from './BottomSection';
import CenterImage from './CenterImage';
import AgeExplanationText from './AgeExplanationText';

const AgeData = require('../../../assets/data/age/data.json')

const AmbassadorsData = {
  stephan: {
    image: require('../../../assets/images/age_pie_charts/stephan.png'),
  },
  laura: {
    image: require('../../../assets/images/age_pie_charts/laura.png'),
  },
  momodou: {
    image: require('../../../assets/images/age_pie_charts/momodou.png'),
  },
  colin: {
    image: require('../../../assets/images/age_pie_charts/colin.png'),
  },
};

const Age = (props) => {
  const { route } = props;
  const { name } = route.params;
  const data = AgeData[name]
  return (
    <>
      <PageLayout>
        <Text style={styles.heading}>Epigenetic Age</Text>
        <AgeExplanationText themeColor={data.themeColor} />
        <CenterImage image={AmbassadorsData[name].image} data={data} />
        <BottomSection data={data} />
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: '200',
  },
});

export default Age;
