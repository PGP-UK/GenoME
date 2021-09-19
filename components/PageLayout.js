import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout } from '@ui-kitten/components';

const PageLayout = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <Layout style={styles.layout}>{children}</Layout>
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
