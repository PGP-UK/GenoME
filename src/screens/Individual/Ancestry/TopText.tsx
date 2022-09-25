import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import CenterImage from './CenterImage';
import { PageHeader } from '../../../components/Text';
import { PageText } from '../../../components/Text';

const TopText = withSizeInfo(({ sizeSelector, data, image }) => {
  const percent_boxStyles = sizeSelector({
    xs: styles.percent_boxxs,
    md: styles.percent_boxmd,
    lg: styles.percent_boxlg,
  });

  return (
    <Section>
      <Block xsSize="100%" mdSize="35%">
        <PageHeader style={styles.header}>Ancestry</PageHeader>
        <PageText category="p1" style={styles.main_text}>
          Different populations have their own distinctive pattern of genetic
          variants. By comparing thousands of my variants with those of
          individuals from different populations, my ancestry can be predicted.
        </PageText>
      </Block>

      <Block xsSize="100%" mdSize="35%">
        <CenterImage image={image} />
      </Block>

      <Block xsSize="100%" mdSize="30%" style={percent_boxStyles}>
        <Text
          style={{
            fontSize: 45,
            color: data.themeColor,
            textAlign: 'right',
          }}>
          {data.most_percent}
        </Text>
        <Text
          style={{
            fontSize: 45,
            color: data.themeColor,
            textAlign: 'right',
            marginTop: 15,
          }}>
          {data.other_percent_1}
        </Text>
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  header: {
    color: '#63BEE1',
    marginBottom: 25,
  },
  main_text: {
    marginBottom: 20,
  },
  percent_boxxs: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  percent_boxmd: {
    alignItems: 'flex-end',
    marginBottom: 20,
    marginTop: 100,
    paddingRight: 50,
  },
  percent_boxlg: {
    alignItems: 'flex-end',
    marginBottom: 20,
    marginTop: 100,
    paddingRight: 50,
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
