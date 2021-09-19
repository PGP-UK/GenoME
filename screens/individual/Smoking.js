import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import PageLayout from '../../components/PageLayout';

const Smoking = () => {
  return (
    <>
      <PageLayout>
        <Text category='h1' style={styles.header}>
          Smoking
        </Text>
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

export default Smoking;
