import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text, Card } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import PageLayout from '../../../../components/PageLayout';

const AllAmbassadorsData = {
  stephan: {
    data: require(`../../../../assets/data/health/heart/stephan.json`),
    image: require(`../../../../assets/images/heart_profiles/stephan_heart_profile.png`),
  },
  colin: {
    data: require(`../../../../assets/data/health/heart/colin.json`),
    image: require(`../../../../assets/images/heart_profiles/colin_heart_profile.png`),
  },
  laura: {
    data: require(`../../../../assets/data/health/heart/laura.json`),
    image: require(`../../../../assets/images/heart_profiles/laura_heart_profile.png`),
  },
  momodou: {
    data: require(`../../../../assets/data/health/heart/momodou.json`),
    image: require(`../../../../assets/images/heart_profiles/momodou_heart_profile.png`),
  },
};

const Heart = (props) => {
  const { route } = props;
  const { name } = route.params;
  const data = AllAmbassadorsData[name].data;

  return (
    <>
      <PageLayout>
        <Grid>
          <Section>
            <Block xsSize="100%" smSize="100%" mdSize="50%">
              <Text category="h1" style={styles.header}>
                Heart disease
              </Text>
            </Block>
            <Block xsSize="100%" smSize="100%" mdSize="50%">
              <Text
                category="h1"
                style={(styles.header, { color: data.themeColor })}>
                Genetic variant ID: {'\n'}rs238206
              </Text>
            </Block>
          </Section>
          <Section>
            <Block xsSize="100%" smSize="100%" mdSize="33%">
              <Text category="h1" style={styles.header2}>
                Risk with each variant type:
              </Text>
              <Text category="h1" style={styles.header3}>
                <View style={styles.square1} />
                {data.risk.first}
              </Text>
              <Text category="h1" style={styles.header3}>
                <View style={styles.square2} />
                {data.risk.second}
              </Text>
              <Text category="h1" style={styles.header3}>
                <View style={styles.square3} />
                {data.risk.third}
              </Text>
            </Block>
            <Block xsSize="100%" smSize="100%" mdSize="33%">
              <Image
                source={AllAmbassadorsData[name].image}
                style={styles.image}
                resizeMode="contain"
              />
            </Block>
            <Block xsSize="100%" smSize="100%" mdSize="33%">
              <Card>
                <Text style={styles.main_text}>
                  There are three versions of this variant and{' '}
                  {data.population.percent} of the population have the same
                  variant as me {'\n'}This version of the variant increases my
                  risk of heart disease
                </Text>
              </Card>
              <Text category="p1" style={styles.main_text}>
                The colour split illustrates how common each variant type is in
                the population.
              </Text>
            </Block>
          </Section>
          <Section>
            <Block>
              <Text category="p1" style={styles.main_text}>
                Heart disease includes many medical conditions and accounts for
                up to 40% of all deaths in developed countries.
              </Text>
            </Block>
            <Block>
              <Text category="p1" style={styles.main_text}>
                rs238206 is one of many variants associated with the disease.
                Individual variants contribute a small amount to the development
                of the disease. A combination of other genetic, epigenetic,
                environmental and lifestyle factors influence the overall risk
                of developing heart disease.
              </Text>
            </Block>
          </Section>
        </Grid>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#63BEE1',
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 25,
  },
  header2: {
    color: '#666E7A',
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 25,
  },
  header3: {
    color: '#666E7A',
    fontWeight: '400',
  },
  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
  button_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
  image: {
    height: 250,
    width: 250,
  },
  square1: {
    width: 25,
    height: 25,
    backgroundColor: 'red',
  },
  square2: {
    width: 25,
    height: 25,
    backgroundColor: 'red',
  },
  square3: {
    width: 25,
    height: 25,
    backgroundColor: 'red',
  },
});

export default Heart;
