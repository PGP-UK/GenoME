import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import CenterImage from './CenterImage';
import { PageHeader } from '../../../components/Text';
import { PageText } from '../../../components/Text';

const TopText = (props) => {
  const { data, image } = props;

  return (
    <>
      <Block>
        <PageHeader style={styles.header}>Ancestry</PageHeader>
        <PageText category="p1" style={styles.main_text}>
          Different populations have their own distinctive pattern of genetic
          variants. By comparing thousands of my variants with those of
          individuals from different populations, my ancestry can be predicted.
        </PageText>
      </Block>
      <Block xsSize="100%" mdSize="100%">
        <CenterImage image={image} />
      </Block>
      <Block xsSize="100%" mdSize="100%" style={styles.percent_box}>
        <Text
          style={{
            fontSize: 45,
            color: data.themeColor,
          }}>
          {data.most_percent}
        </Text>
        <Text
          style={{
            fontSize: 45,
            color: data.themeColor,
            marginTop: 15,
          }}>
          {data.other_percent_1}
        </Text>
      </Block>
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
  percent_box: {
    alignItems: 'center',
  },
  percent_boxmd: {
    alignItems: 'center',
  },
  percent_boxlg: {
    alignItems: 'center',
  },
  percent_text: {
    fontSize: 25,
  },
  rightTextxs: {
    fontSize: 35,
    textAlign: 'center',
  },
  rightTextmd: {
    fontSize: 35,
    textAlign: 'center',
  },
  rightTextlg: {
    fontSize: 35,
    textAlign: 'right',
  },
  // // rightTextlowerxs: {
  // //   fontSize: 45,
  // //   color: data.themeColor,
  // //   textAlign: 'right',
  // //   marginTop: 15,
  // // },
  // // rightTextlowermd: {
  // //   fontSize: 45,
  // //   color: data.themeColor,
  // //   textAlign: 'right',
  // //   marginTop: 15,
  // // },
  // // rightTextlowerlg: {
  // //   fontSize: 45,
  // //   color: data.themeColor,
  // //   textAlign: 'right',
  // //   marginTop: 15,
  // },
});

export default TopText;
