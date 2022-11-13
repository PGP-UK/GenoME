import React from 'react';
import { StyleSheet } from 'react-native';
import { PageHeader } from '../../../components/Text';
import { PageText } from '../../../components/Text';
import { Block } from 'react-native-responsive-layout';
import BackButton from '../../../components/BackButton';

const TopText = (props) => {
  const { navigation } = props;
  return (
    <>
      <Block xsSize="70%" mdSize="70%">
        <PageHeader style={styles.header}>Ancestry</PageHeader>
      </Block>
      <Block xsSize="30%" mdSize="30%">
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
