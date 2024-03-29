import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Grid } from 'react-native-responsive-layout';

import Modal from './Modal';

const PageLayout = ({ children, backgroundColor = '#fff' }) => {
  return (
    <SafeAreaView
      style={[styles.safeView, { backgroundColor: backgroundColor }]}>
      <Grid scrollable stretchable>
        <Layout style={[styles.layout, { backgroundColor: backgroundColor }]}>
          <Modal />
          {children}
        </Layout>
      </Grid>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  layout: {
    flex: 1,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default PageLayout;
