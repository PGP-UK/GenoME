import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import PageLayout from '../../../components/PageLayout';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import TopText from './TopText';

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

const Ancestry = (props) => {
  const { route } = props;
  const { name } = route.params;

  return (
    <>
      <PageLayout>
        <Grid>
          <Section mdSize="50%">
            <TopText
              data={AllAmbassadorsData[name].data}
              image={AllAmbassadorsData[name]}
            />
          </Section>

          <Section mdSize="50%">
            <Block hidden xlVisible>
              <View>
              <Image
                style={{ height: 500, width: 1340 }}
                source={require('../../../assets/images/ancestry_screen_pie/ancestry_world.jpeg')}
              />
              </View>
            </Block>
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
