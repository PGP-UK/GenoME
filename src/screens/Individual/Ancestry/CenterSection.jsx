import React from 'react';
import { StyleSheet } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';

import LottieAnimation from '../../../components/LottieAnimation';
import { PageText } from '../../../components/Text';

const CenterSection = (props) => {
  const { data, image } = props;

  return (
    <Grid>
      <Section>
        {/* Hidden in large screens */}
        <Block lgHidden>
          <LottieAnimation
            image={image}
            imagePercentages={{ xs: 1, lg: 0.4 }}
          />
        </Block>
        <Block lgHidden style={styles.percent_box}>
          <PageText style={[{ color: data.themeColor }, styles.baseText]}>
            {data.most_percent}
          </PageText>
          <PageText
            style={[
              { color: data.themeColor },
              styles.baseText,
              styles.secondText,
            ]}>
            {data.other_percent_1}
          </PageText>
        </Block>

        {/* Visible in large screens */}
        <Block hidden lgVisible lgSize="50%">
          <LottieAnimation
            image={image}
            imagePercentages={{ xs: 1, lg: 0.4 }}
          />
        </Block>
        <Block hidden lgVisible style={styles.percent_box} lgSize="50%">
          <PageText style={[{ color: data.themeColor }, styles.baseText]}>
            {data.most_percent}
          </PageText>
          <PageText
            style={[
              { color: data.themeColor },
              styles.baseText,
              styles.secondText,
            ]}>
            {data.other_percent_1}
          </PageText>
        </Block>
      </Section>
    </Grid>
  );
};

const styles = StyleSheet.create({
  percent_box: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontSize: 45,
  },
  secondText: {
    marginTop: 15,
    marginBottom: 75,
  },
});

export default CenterSection;
