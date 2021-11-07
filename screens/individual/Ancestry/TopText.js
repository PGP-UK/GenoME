import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Section, Block, Grid } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import CenterImage from './CenterImage';

const TopText = withSizeInfo(({ sizeSelector, data, image }) => {
  const headerStyles = sizeSelector({
    xs: styles.headerxs,
    lg: styles.headerlg,
  });
  const rightTextStyles = sizeSelector({
    xs: styles.rightTextxs,
    lg: styles.subheaderlg,
  });

  return (
    <Section>
      <Block xsSize="100%" mdSize="35%">
        <Text category="h1" style={headerStyles}>
          Ancestry
        </Text>
        <Text category="p1" style={styles.main_text}>
          Different populations have their own distinctive pattern of genetic
          variants. By comparing thousands of my variants with those of
          individuals from different populations, my ancestry can be predicted.
        </Text>
      </Block>

      <Block xsSize="100%" mdSize="35%">
        <CenterImage source={image.image} />
      </Block>

      <Block xsSize="100%" mdSize="30%" style={styles.percent_box}>
        <Text
          style={{
            fontSize: 45,
            color: data.themeColor,
            textAlign: 'right',
          }}
        >
          {data.most_percent}
        </Text>
        <Text
          style={{
            fontSize: 45,
            color: data.themeColor,
            textAlign: 'right',
            marginTop: 15,
          }}
        >
          {data.other_percent_1}
        </Text>
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  headerxs: {
    color: '#666E7A',
    marginTop: 100,
    marginBottom: 20,
    marginLeft: 50,
  },
  headerlg: {
    color: '#666E7A',
    marginTop: 100,
    marginBottom: 20,
    marginLeft: 50,
  },
  main_text: {
    color: '#666E7A',
    fontSize: 25,
    marginBottom: 20,
    marginLeft: 50,
    lineHeight: 45,
  },
  percent_box: {
    alignItems: 'flex-end',
    marginBottom: 20,
    marginTop: 100,
    paddingRight: 50,
  },
  percent_text: {
    fontSize: 25,
  },
  rightTextupperxs: {
    fontSize: 35,
    textAlign: 'center',
  },
  rightTextuppermd: {
    fontSize: 35,
    textAlign: 'center',
  },
  rightTextupperlg: {
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
