import React from 'react';
import { StyleSheet } from 'react-native';
import { PageHeader } from '../../../components/Text';
import { PageText } from '../../../components/Text';

const TopText = () => {
  return (
    <>
      <PageHeader style={styles.header}>Ancestry</PageHeader>
      <PageText category="p1" style={styles.main_text}>
        Different populations have their own distinctive pattern of genetic
        variants. By comparing thousands of my variants with those of
        individuals from different populations, my ancestry can be predicted.
      </PageText>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#63BEE1',
    marginBottom: 25,
  },
  main_text: {
    marginBottom: 20,
  },
});

export default TopText;
