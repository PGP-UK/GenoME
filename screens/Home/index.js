import React from 'react';
import { StyleSheet } from 'react-native';

import PageLayout from '../../components/PageLayout';
import HeaderRow from './HeaderRow';

const Home = (props) => {
  const { navigation } = props;

  return (
    <>
      <PageLayout>
        <HeaderRow navigation={navigation} HeaderStyle={styles.headerRow} />
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    marginTop: 20,
    marginBottom: 25,
  },

  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Home;
