import React from 'react';
import PageLayout from '../../../components/PageLayout';
import BottomSection from './BottomSection';
import CenterImage from './CenterImage';
import SmokingExText from './SmokingExText'
import { StyleSheet, Text } from 'react-native';

const dataFile = {
  data: require(`../../../assets/data/age/data.json`),
};

const AmbassadorsData = {
  stephan: {
    image: require(`../../../assets/images/smokers/nonsmoking.png`),
  },
  laura: {
    image: require(`../../../assets/images/smokers/nonsmoking.png`),
  },
  momodou: {
    image: require(`../../../assets/images/smokers/nonsmoking.png`),
  },
  colin: {
    image: require(`../../../assets/images/smokers/nonsmoking.png`),
  },
};

const Smoking = (props) => {
  const { route } = props;
  const { name } = route.params;
  const data = dataFile.data[name];

  return (
    <PageLayout backgroundColor={data.themeColor}>
      <Text style={[styles.heading, { backgroundColor: data.themeColor }]}>
        Smoking Prediction
      </Text>
      <SmokingExText data={dataFile.data[name]} />
      <CenterImage
        source={AmbassadorsData[name].image}
        data={dataFile.data[name]}
      />
      <BottomSection data={dataFile.data[name]} />
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
  },
});

export default Smoking;