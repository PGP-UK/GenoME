import React from 'react';
import { StyleSheet } from 'react-native';
import { Block } from 'react-native-responsive-layout';

import { PageHeader } from '../../../components/Text';
import { PageText } from '../../../components/Text';
import BackButton from '../../../components/BackButton';

const TopText = (props) => {
  const { navigation } = props;
  return (
    <>
      <Block xsSize="80%" mdSize="70%">
        <PageHeader style={styles.header}>Ancestry</PageHeader>
      </Block>
      <Block xsSize="20%" mdSize="30%">
        <BackButton navigation={navigation} />
      </Block>
      <Block>
        <PageText category="p1" style={styles.main_text}>
          Different populations have their own distinctive pattern of genetic
          variants. By comparing thousands of my variants with those of
          individuals from different populations, my ancestry can be predicted.
        </PageText>
      </Block>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 25,
  },
  main_text: {
    marginBottom: 20,
  },
});

export default TopText;
