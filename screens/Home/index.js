import React from 'react';
import { StyleSheet } from 'react-native';

import PageLayout from '../../components/PageLayout';
import HeaderRow from './HeaderRow';

const Home = (props) => {
  const { navigation } = props;

  return (
    <>
      <PageLayout>
        <HeaderRow navigation={navigation} />
      </PageLayout>
    </>
  );
};

// const styles = StyleSheet.create({});

export default Home;
