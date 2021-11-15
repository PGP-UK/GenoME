import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import PageLayout from '../components/PageLayout';

const BackBtn = ({ layoutStyle, navigation }) => (
  <Layout style={layoutStyle}>
    <Button
      size="small"
      status="primary"
      style={styles.headerBtn}
      onPress={() => navigation.navigate('Home/Index.js')}>
      BACK
    </Button>
  </Layout>
);

const About = () => {
  return (
    <>
      <PageLayout>
        <Text category="h1" style={styles.header}>
          About PGP-UK and the global network of Personal Genome Projects
        </Text>

        <Text category="p1" style={styles.main_text}>
          The PGP-UK project is part of the global network of Personal Genome Projects, which all share
          the vision of advancing science through open data sharing. Currently, there are projects in America,
          Austria, Canada, China and the UK. There are multiple ways to join the PGP-UK community and keep-up-date 
          with the project - just follow the links on the right hand side.
        </Text>

        <Text category="p1" style={styles.main_text}>
          We look forward to making great science with you!
        </Text>

        <Text category="p1" style={styles.main_text}>
          Director: Professor Stephan Beck
        </Text>

        <Text category="p1" style={styles.main_text}>
          Location: University College London
        </Text>

        <Text category="p1" style={styles.main_text}>
          DISCLAIMER: The generation of genomic data is not an error-free process and our analysis system is 
          still under development. becasue the body of knowledge of genetic and epigenetic variants has many 
          uncertainties, we cannot guarantee that our analyses are either accurate or complete. 
        </Text>

        <Text category="p1" style={styles.main_text}>
          This app was designed and develpoed by
        </Text>

      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginBottom: 25,
  },

  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default About;
