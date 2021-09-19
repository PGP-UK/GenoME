import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import PageLayout from '../components/PageLayout';

const Home = (props) => {
  const { navigation } = props;

  return (
    <>
      <PageLayout>
        <Text category='h1' style={styles.header}>
          Home
        </Text>

        <Button onPress={() => navigation.navigate('About')}>About</Button>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Home;
