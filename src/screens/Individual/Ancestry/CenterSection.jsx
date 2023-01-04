import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { useRoute } from '@react-navigation/native';

import LottieAnimation from '../../../components/LottieAnimation';
import { PageText } from '../../../components/Text';
import DataContext from '../../../Context/DataContext';

const AncestryKey = ({ancestryKey}) => (
  <>
    {
      ancestryKey.map(k => (
        <PageText key={`${k.ancestry}-${k.amount}`} style={[{ color: k.colour }, styles.baseText]}>
          {k.amount}% {k.ancestry}
        </PageText>
      ))
    }
  </>
)

const CenterSection = () => {
  const route = useRoute()
  const { name } = route.params
  const { ancestry } = useContext(DataContext);
  const { ancestryKey = [], image } = ancestry[name];

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
        <Block lgHidden style={[styles.percent_box, { marginBottom: 75}]}>
          <AncestryKey ancestryKey={ancestryKey}/>
        </Block>

        {/* Visible in large screens */}
        <Block hidden lgVisible lgSize="50%">
          <LottieAnimation
            image={image}
            imagePercentages={{ xs: 1, lg: 0.4 }}
          />
        </Block>
        <Block hidden lgVisible style={styles.percent_box} lgSize="50%">
          <AncestryKey ancestryKey={ancestryKey}/>
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
