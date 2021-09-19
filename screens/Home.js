import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import PageLayout from '../components/PageLayout';

const Home = (props) => {
  const { navigation } = props;

  return (
    <>
      <PageLayout>
        <Text category='h1' style={styles.header}>
          Home
        </Text>

        <Layout style={styles.btnLayout}>
          <Button
            appearance='outline'
            status='primary'
            style={styles.btn}
            onPress={() => navigation.navigate('About')}>
            About
          </Button>
        </Layout>
        <Layout style={styles.btnLayout}>
          <Button
            appearance='outline'
            status='primary'
            style={styles.btn}
            onPress={() => navigation.navigate('Age', { name: 'stephan' })}>
            Stephan Age
          </Button>
          <Button
            appearance='outline'
            status='primary'
            style={styles.btn}
            onPress={() => navigation.navigate('Age', { name: 'laura' })}>
            Laura Age
          </Button>
        </Layout>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 40,
  },
  btn: {
    marginRight: 5,
  },
  btnLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default Home;
