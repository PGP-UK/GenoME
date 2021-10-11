import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import { Text } from '@ui-kitten/components';
import PageLayout from '../../../components/PageLayout';
import { Section, Block } from 'react-native-responsive-layout';

const dataFile = {
  data: require(`../../../assets/data/age/data.json`),
};

const AmbassadorsData = {
  stephan: {
    image: require(`../../../assets/images/age_pie_charts/stephan.png`),
  },
  laura: {
    image: require(`../../../assets/images/age_pie_charts/laura.png`),
  },
  momodou: {
    image: require(`../../../assets/images/age_pie_charts/momodou.png`),
  },
  colin: {
    image: require(`../../../assets/images/age_pie_charts/colin.png`),
  },
};

const Age = (props) => {
  const { route } = props;
  const { name } = route.params;
  const ambassadors = dataFile.data[name];

  return (
    <>
      <PageLayout>
        <Text category="h1" style={styles.header}>
          Epigenetic Age
        </Text>
        <View>
          <Image style={styles.image} source={AmbassadorsData[name].image} />
        </View>
        <Text style={[styles.actual, { color: ambassadors.themeColor }]}>
          {ambassadors.Identifier} ({name}).
        </Text>
        <Text style={[styles.actual, { color: ambassadors.themeColor }]}>
          Actual Age: {ambassadors.Age} years
        </Text>
        <Text style={styles.epigenetic}>
          Epigenetic Age: {ambassadors.Epigenic} years
        </Text>
        <Text style={styles.plain}>
          Epigenetic Age {ambassadors.AccDec} of {ambassadors.Diferrence} Year/s
        </Text>
        <Text
          style={[
            styles.paragraph,
            { backgroundColor: ambassadors.themeColor },
          ]}>
          Epigenetic age was calculated from 353 epigenetic variants across the
          participant's genome. These epigenetic variants correlate very well
          with actual age, meaning they can be used as an 'epigenetic clock' to
          predict age. Age acceleration applies if the epigenetic age is 3.6
          years older than the actual age. Age deceleration applies if the
          epigenetic age is 3.6 years younger than their actual age.
        </Text>
        <Text style={styles.footer}>
          Epigenetic variants are chemical changes to your DNA, which alter how
          it is used without changing the DNA sequence. As people age, their
          epigenetic patterns change and we can use this to predict a
          participant's epigenetic age. This predicted epigenetic age can be the
          same as the actual age, older (age acceleration) or younger (age
          deceleration).
        </Text>
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
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  actual: {
    fontSize: 30,
    marginBottom: 20,
  },
  epigenetic: {
    fontSize: 30,
    color: '#11b6d4',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  footer: {
    fontSize: 20,
    marginTop: 20,
  },
  plain: {
    marginBottom: 25,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Age;
