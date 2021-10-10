import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import PageLayout from '../../../components/PageLayout';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import CenterImage from './CenterImage';

const AllAmbassadorsData = {
  stephan: {
    data: require(`../../../assets/data/ancestry/stephan.json`),
    image: require(`../../../assets/images/ancestry_screen_pie/stephan_ancestry.jpeg`),
  },
  colin: {
    data: require(`../../../assets/data/ancestry/colin.json`),
    image: require(`../../../assets/images/ancestry_screen_pie/colin_ancestry.jpeg`),
  },
  laura: {
    data: require(`../../../assets/data/ancestry/laura.json`),
    image: require(`../../../assets/images/ancestry_screen_pie/laura_ancestry.jpeg`),
  },
  momodou: {
    data: require(`../../../assets/data/ancestry/momodou.json`),
    image: require(`../../../assets/images/ancestry_screen_pie/momodou_ancestry.jpeg`),
  },
};

const TextSection = ({ textStyle, lines }) => (
  <>
    {lines.map((l, i) => (
      <Text key={i} style={textStyle}>
        {l}
      </Text>
    ))}
  </>
);

const Ancestry = (props) => {
  const { route } = props;
  const { name } = route.params;

  return (
    <>
      <PageLayout>
        <Grid>
          <Section mdSize="50%">
            <Block xsSize="100%" mdSize="35%">
              <Text category="h1" style={styles.header}>
                Ancestry
              </Text>
              <Text category="p1" style={styles.main_text}>
                Different populations have their own distinctive pattern of
                genetic variants. By comparing thousands of my variants with
                those of individuals from different populations, my ancestry can
                be predicted.
              </Text>
            </Block>

            <Block xsSize="100%" mdSize="35%">
              <CenterImage source={AllAmbassadorsData[name].image} />
            </Block>

            <Block xsSize="100%" mdSize="30%" style={styles.percent_box}>
              <Text
                // style={rightTextStyles}
                lines={[
                  'hello',
                  AllAmbassadorsData[name].data.most_percent,
                  AllAmbassadorsData[name].data.other_percent_1,
                ]}
              />
            </Block>
          </Section>

          <Section mdSize="50%">
            <View>
              <Image
                style={{ height: 700, width: 1340 }}
                source={require('../../../assets/images/ancestry_screen_pie/ancestry_world.jpeg')}
              />
            </View>
          </Section>
        </Grid>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#666E7A',
    marginTop: 100,
    marginBottom: 20,
    marginLeft: 50,
  },
  main_text: {
    color: '#666E7A',
    fontSize: 25,
    marginBottom: 20,
    marginLeft: 50,
    lineHeight: 45,
  },
  percent_box: {
    alignItems: 'flex-end',
    marginBottom: 20,
    marginTop: 100,
    paddingRight: 50,
  },
  percent_text: {
    fontSize: 25,
  },
  leftTextSm: {
    fontSize: 35,
    color: '#45B0D4',
    textAlign: 'center',
  },
  leftTextMd: {
    fontSize: 35,
    color: '#45B0D4',
    textAlign: 'left',
  },
  rightTextSm: {
    fontSize: 35,
    textAlign: 'center',
  },
  rightTextMd: {
    fontSize: 35,
    textAlign: 'right',
  },
});

export default Ancestry;
