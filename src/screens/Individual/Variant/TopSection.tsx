import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { PageHeader } from '../../../components/Text';
import BackButton from '../../../components/BackButton';

const TextSection = ({ textStyle, lines }) => (
  <>
    {lines.map((l, i) => (
      <Text key={i} style={textStyle}>
        {l}
      </Text>
    ))}
  </>
);

const TopSection = withSizeInfo(({ sizeSelector, data, ...props }) => {
  const { navigation } = props;
  const rowStyles = sizeSelector({
    xs: styles.textRowSm,
    md: styles.textRowMd,
  });
  const leftTextStyles = sizeSelector({
    xs: styles.leftTextSm,
    md: styles.leftTextMd,
  });
  const rightTextStyles = sizeSelector({
    xs: styles.rightTextSm,
    md: styles.rightTextMd,
  });

  return (
    <Section style={styles.main}>
      <Block smSize="80%" mdSize="70%">
        <PageHeader style={styles.header}>Variants</PageHeader>
      </Block>
      <Block smSize="20%" mdSize="30%" style={{ flexDirection: 'row-reverse' }}>
        <BackButton navigation={navigation} />
      </Block>
      <Block xsSize="100%" mdSize="50%" style={rowStyles}>
        <TextSection
          textStyle={leftTextStyles}
          lines={[
            'Total Number of variants:',
            data.total.num,
            data.total.percent,
          ]}
        />
      </Block>
      <Block xsSize="100%" mdSize="50%" style={rowStyles}>
        <TextSection
          textStyle={[rightTextStyles, { color: data.themeColor }]}
          lines={[
            'Number of shared variants:',
            data.shared.num,
            data.shared.percent,
          ]}
        />
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
    marginBottom: 20,
  },
  header: {
    marginBottom: 30,
  },
  textRowSm: {
    marginTop: 20,
  },
  textRowMd: {},
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

export default TopSection;
