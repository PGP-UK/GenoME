import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';

const TextSection = ({ textStyle, lines }) => (
  <>
    {lines.map((l, i) => (
      <Text key={i} style={textStyle}>
        {l}
      </Text>
    ))}
  </>
);

const LeftText = ({ textStyle, data }) => (
  <TextSection
    textStyle={textStyle}
    lines={[
      'These numbers reflect how many single nucleotide variants (SNVs) were identified in my genome',
    ]}
  />
);

const RightText = ({ textStyle, data }) => (
  <TextSection
    textStyle={textStyle}
    lines={['Number of private variants:', data.num, data.percent]}
  />
);

const BottomSection = ({ data }) => (
  <Section style={styles.main}>
    {/* For small screens */}
    <Block xsSize="100%" mdHidden style={styles.textRowSm}>
      <RightText
        data={data.shared}
        textStyle={{ ...styles.rightTextSm, color: data.themeColor }}
      />
    </Block>
    <Block xsSize="100%" mdHidden style={styles.textRowSm}>
      <LeftText data={data.total} textStyle={styles.leftTextSm} />
    </Block>

    {/* For larger screens */}
    <Block xsSize="50%" hidden mdVisible>
      <LeftText data={data.total} textStyle={styles.leftTextMd} />
    </Block>
    <Block xsSize="50%" hidden mdVisible>
      <RightText
        data={data.shared}
        textStyle={{ ...styles.rightTextMd, color: data.themeColor }}
      />
    </Block>
  </Section>
);

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
    marginBottom: 20,
  },
  textRowSm: {
    marginTop: 20,
  },
  leftTextSm: {
    fontSize: 35,
    color: '#45B0D4',
    textAlign: 'center',
  },
  leftTextMd: {
    fontSize: 35,
    color: '#45B0D4',
    textAlign: 'left',
  },
  rightTextSm: {
    fontSize: 35,
    textAlign: 'center',
  },
  rightTextMd: {
    fontSize: 35,
    textAlign: 'right',
  },
});

export default BottomSection;
