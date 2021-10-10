import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import PageLayout from '../../components/PageLayout';
import { Section, Block, Grid } from 'react-native-responsive-layout';



const Landing = (props) => {
  const { route } = props;
  const { name } = route.params;
  return (
    <>
      <PageLayout >
        <Text category="h1" style={styles.header}>
          My GENOME contains many layers of INFORMATION, including GENETIC and EPIGENETIC information.
        </Text>
        <Text category="h5" style={styles.subheader}>
          My DNA sequence is about 99.9% identical to other people's DNA. the remaining 0.1% is what makes me unique, which amounts to several million changes. These changes are called "genetic variants". The majority of variants are shared between individuals whilst others are private (in this case, unique to me or my family).  
        </Text>
        <Text category="h5" style={styles.main_text}>
          What is a PRIVATE, GENETIC, or EPIGENETIC variant?
        </Text>
        <Text category="h5" style={styles.main_text}>
          Tap below to explore a few of my variants which we do know about.
        </Text>
        <Grid>
          <Section>
            <Block xsSize="100%" mdSize="20%">
              <View style={styles.avcontainer}>
                <Image
                  style={styles.avpic}
                  source={require('./globe-europe-duotone.png')}
                />
                <Text style={{paddingTop: 10, fontSize: 25}}>Ancestry</Text>
              </View>
            </Block >
            <Block xsSize="100%" mdSize="20%">
              <View style={styles.avcontainer}>
                <Image
                  style={styles.avpic}
                  source={require('./eye-duotone.png')}
                />
                <Text style={{paddingTop: 10, fontSize: 25}}>Eyes</Text>
              </View>
            </Block>
            <Block xsSize="100%" mdSize="20%">
              <View style={styles.avcontainer}>
                <Image
                  style={styles.avpic}
                  source={require('./heartbeat-duotone.png')}
                />
                <Text style={{paddingTop: 10, fontSize: 25}}>Health</Text>
              </View>
            </Block>
            <Block xsSize="100%" mdSize="20%">
              <View style={styles.avcontainer}>
                <Image
                  style={styles.avpic}
                  source={require('./birthday-cake-duotone.png')}
                />
                <Text style={{paddingTop: 10, fontSize: 25}}>Age</Text>
              </View>
            </Block>
            <Block xsSize="100%" mdSize="20%">
              <View style={styles.avcontainer}>
                <Image
                  style={styles.avpic}
                  source={require('./smoking-duotone.png')}
                />
                <Text style={{paddingTop: 10, fontSize: 25}}>Smoking</Text>
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
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 30,
    fontSize: 85,
    textAlign: 'center'
    
  },
  subheader: {
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 70,
    paddingRight: 70,
    fontSize: 30,
    textAlign: 'center'
  },
  main_text: {
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 100,
    paddingRight: 100,
    fontSize: 20,
    textAlign: 'center'
  },
  avpic: {
    width: 200,
    height: 200,
    borderRadius: 205 / 2,
    overflow: "hidden",
    borderWidth: 3,
  },
  avcontainer: {
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 8,
    flexWrap: 'wrap', 
  },
});

export default Landing;
