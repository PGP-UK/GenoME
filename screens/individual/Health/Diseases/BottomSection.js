import React from 'react';
import { Text } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';
import { StyleSheet } from 'react-native';

const textInformation = {
  heart: {
    topText:
      'Heart disease includes many medical conditions and accounts for up to 40% of all deaths in developed countries.',
    bottomText:
      'rs238206 is one of many variants associated with the disease. Individual variants contribute a small amount to the development of the disease. A combination of other genetic, epigenetic, environmental and lifestyle factors influence the overall risk of developing heart disease.',
  },
  crohn: {
    topText:
      "Crohn's disease is a chronic inflammatory condition of the digestive system that affects around 115,000 people per year in the UK.",
    bottomText:
      "rs2066847 is one of many variants associated with the disease. Individual variants contribute a small amount to the development of the disease. A combination of other genetic, epigenetic, environmental and lifestyle factors influence the overall risk of developing Crohn's disease.",
  },
  ovarian: {
    topText:
      "Ovarian cancer is a cancer of the ovary which is a part of a woman's repoductive system. It is the 6th most common cancer in women in the UK.",
    bottomText:
      'rs3218536 is one of many variants associated with the disease. Individual variants contribute a small amount to the development of the disease. A combination of other genetic, epigenetic, environmental and lifestyle factors influence the overall risk of developing ovarian cancer. Although this disease will not affect males directly, the variant can be passed on to their descendants.',
  },
};

const BottomSection = (props) => {
  const { disease } = props;
  const textData = textInformation[disease];
  return (
    <Section>
      <Block>
        <Text category="p1" style={styles.main_text}>
          {textData.topText}
        </Text>
      </Block>
      <Block>
        <Text category="p1" style={styles.main_text}>
          {textData.bottomText}
        </Text>
      </Block>
    </Section>
  );
};

const styles = StyleSheet.create({
  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default BottomSection;
