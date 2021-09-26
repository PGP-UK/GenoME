import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const PageLayout = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView>
        <Layout style={styles.layout}>{children}</Layout>
      </ScrollView>
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
