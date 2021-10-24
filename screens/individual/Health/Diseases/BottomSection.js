import React from 'react';
import { Text } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';
import { StyleSheet } from 'react-native';

const BottomSection = (props) => {
  const { disease } = props;
  if (disease === 'heart') {
    return (
      <Section>
        <Block>
          <Text category="p1" style={styles.main_text}>
            Heart disease includes many medical conditions and accounts for up
            to 40% of all deaths in developed countries.
          </Text>
        </Block>
        <Block>
          <Text category="p1" style={styles.main_text}>
            rs238206 is one of many variants associated with the disease.
            Individual variants contribute a small amount to the development of
            the disease. A combination of other genetic, epigenetic,
            environmental and lifestyle factors influence the overall risk of
            developing heart disease.
          </Text>
        </Block>
      </Section>
    );
  }
  if (disease === 'crohn') {
    return (
      <Section>
        <Block>
          <Text category="p1" style={styles.main_text}>
            Crohn's disease is a chronic inflammatory condition of the digestive
            system that affects around 115,000 people per year in the UK.
          </Text>
        </Block>
        <Block>
          <Text category="p1" style={styles.main_text}>
            rs2066847 is one of many variants associated with the disease.
            Individual variants contribute a small amount to the development of
            the disease. A combination of other genetic, epigenetic,
            environmental and lifestyle factors influence the overall risk of
            developing Crohn's disease.
          </Text>
        </Block>
      </Section>
    );
  }
  if (disease === 'ovarian') {
    return (
      <Section>
        <Block>
          <Text category="p1" style={styles.main_text}>
            Ovarian cancer is a cancer of the ovary which is a part of a woman's
            repoductive system. It is the 6th most common cancer in women in the
            UK.
          </Text>
        </Block>
        <Block>
          <Text category="p1" style={styles.main_text}>
            rs3218536 is one of many variants associated with the disease.
            Individual variants contribute a small amount to the development of
            the disease. A combination of other genetic, epigenetic,
            environmental and lifestyle factors influence the overall risk of
            developing ovarian cancer. Although this disease will not affect
            males directly, the variant can be passed on to their descendants
          </Text>
        </Block>
      </Section>
    );
  }
};

const styles = StyleSheet.create({
  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default BottomSection;
