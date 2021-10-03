import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Grid } from 'react-native-responsive-layout';

const PageLayout = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <Grid scrollable stretchable>
        <Layout style={styles.layout}>{children}</Layout>
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
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default PageLayout;
