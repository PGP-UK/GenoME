import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text, Card } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import PageLayout from '../../../../components/PageLayout';

const AllAmbassadorsData = {
  stephan: {
    data: require(`../../../../assets/data/health/ovarian/stephan.json`),
    image: require(`../../../../assets/images/ovarian_profiles/stephan_ovarian_profile.png`),
  },
  colin: {
    data: require(`../../../../assets/data/health/ovarian/colin.json`),
    image: require(`../../../../assets/images/ovarian_profiles/colin_ovarian_profile.png`),
  },
  laura: {
    data: require(`../../../../assets/data/health/ovarian/laura.json`),
    image: require(`../../../../assets/images/ovarian_profiles/laura_ovarian_profile.png`),
  },
  momodou: {
    data: require(`../../../../assets/data/health/ovarian/momodou.json`),
    image: require(`../../../../assets/images/ovarian_profiles/momodou_ovarian_profile.png`),
  },
};

const AmbassadorImage = withSizeInfo(({ sizeSelector, ...props }) => {
  const numImagesPerRow = sizeSelector({ xs: 1, sm: 3, md: 3 });
  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) - 40;
  return (
    <Image
      {...props}
      style={{ width: imageWidth, height: imageWidth }}
      resizeMode="contain"
    />
  );
});

const Heart = (props) => {
  const { route } = props;
  const { name } = route.params;
  const data = AllAmbassadorsData[name].data;

  return (
    <>
      <PageLayout>
        <Grid>
          <Section style={{ paddingBottom: 50 }}>
            <Block xsSize="100%" smSize="100%" mdSize="70%">
              <Text category="h1" style={styles.header}>
                Ovarian's disease
              </Text>
            </Block>
            <Block xsSize="100%" smSize="100%" mdSize="30%">
              <Text
                category="h1"
                style={(styles.header, { color: data.themeColor })}>
                Genetic variant ID: {'\n'}rs3218536
              </Text>
            </Block>
          </Section>
          <Section style={{ paddingBottom: 50 }}>
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
              <AmbassadorImage source={AllAmbassadorsData[name].image} />
            </Block>
            <Block xsSize="100%" smSize="100%" mdSize="33%">
              <Card>
                <Text style={styles.main_text}>
                  There are three versions of this variant and{' '}
                  {data.population.percent} of the population have the same
                  variant as me. {'\n'}
                  {'\n'}
                  {data.message}
                </Text>
              </Card>
              <Block style={{ paddingTop: 25 }}>
                <Text category="p1" style={styles.main_text}>
                  The colour split illustrates how common each variant type is
                  in the population.
                </Text>
              </Block>
            </Block>
          </Section>
          <Section>
            <Block>
              <Text category="p1" style={styles.main_text}>
                Ovarian cancer is a cancer of the ovary which is a part of a
                woman's repoductive system. It is the 6th most common cancer in
                women in the UK.
              </Text>
            </Block>
            <Block>
              <Text category="p1" style={styles.main_text}>
                rs3218536 is one of many variants associated with the disease.
                Individual variants contribute a small amount to the development
                of the disease. A combination of other genetic, epigenetic,
                environmental and lifestyle factors influence the overall risk
                of developing ovarian cancer. Although this disease will not
                affect males directly, the variant can be passed on to their
                descendants
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
  square1: {
    width: 25,
    height: 25,
    backgroundColor: '#977ABD',
    paddingRight: 0,
  },
  square2: {
    width: 25,
    height: 25,
    backgroundColor: '#34BC99',
  },
  square3: {
    width: 25,
    height: 25,
    backgroundColor: '#F6BB41',
  },
});

export default Heart;
