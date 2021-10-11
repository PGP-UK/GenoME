import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Text } from '@ui-kitten/components';
import PageLayout from '../../../components/PageLayout';

const dataFile = {
  data: require(`../../../assets/data/age/data.json`),
};

const AmbassadorsData = {
  stephan: {
    image: require(`../../../assets/images/smokers/no-smoking.png`),
  },
  laura: {
    image: require(`../../../assets/images/smokers/no-smoking.png`),
  },
  momodou: {
    image: require(`../../../assets/images/smokers/no-smoking.png`),
  },
  colin: {
    image: require(`../../../assets/images/smokers/no-smoking.png`),
  },
};

const Smoking = (props) => {
  const { route } = props;
  const { name } = route.params;
  const ambassadors = dataFile.data[name];
  return (
    <>
      <PageLayout>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: ambassadors.themeColor,
          }}>
          Epigenetic Smoker Prediction
        </Text>
        <View>
          <Image
            style={[styles.image, { backgroundColor: ambassadors.themeColor }]}
            source={AmbassadorsData[name].image}
          />
          <Text style={[styles.plain, { color: ambassadors.themeColor }]}>
            My epigenetic variants correctly predicted me to be a:
          </Text>
          <Text style={[styles.weight, { color: ambassadors.themeColor }]}>
            {ambassadors.smoker}
          </Text>
        </View>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 30,
            color: ambassadors.themeColor,
          }}>
          {ambassadors.Identifier} {name}.
        </Text>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 30,
            color: ambassadors.themeColor,
          }}>
          Actual Smoking status
        </Text>
        <Text style={[styles.weight, { color: ambassadors.themeColor }]}>
          {ambassadors.smoker}
        </Text>
        <View style={{ backgroundColor: ambassadors.themeColor }}>
          <Text style={styles.text}>
            Epigenetic variants are chemical changes to your DNA, which alter
            how it is used without changing the DNA sequence. When people smoke,
            their epigenetic patterns change and we can use this to predict if
            they are past/never or current smokers.
          </Text>
          <Text style={styles.text}>
            The smoking prediction was calculated from 187 epigenetic variants
            across the participant's genome. These variants have been found to
            change when people smoke, and because of this, can be used to
            predict their smoking status.
          </Text>
        </View>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  actual: {
    fontSize: 30,
    marginBottom: 20,
  },
  weight: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  paragraph: {
    fontSize: 20,
    marginBottom: 20,
  },
  footer: {
    fontSize: 20,
    marginTop: 20,
  },
  plain: {
    fontSize: 30,
  },
});

export default Smoking;
