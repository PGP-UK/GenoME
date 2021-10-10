import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import PageLayout from '../../../../components/PageLayout';

const Ovarian = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  return (
    <>
      <PageLayout>
        <Grid>
          <Section>
            <Block>
              <Text category="h1" style={styles.header}>
                Ovarian cancer
              </Text>
            </Block>
            <Block>
              <Text category="p1" style={styles.main_text}>
                This is {name} Page
              </Text>
            </Block>
          </Section>
          <Section>
            <Block>
              <Text category="p1" style={styles.main_text}>
                Ovarian cancer is a cancer of the ovary which is a part of a
                woman's repoductive system. It is the 6th most common cancer in
                women in the UK.
              </Text>
            </Block>
            <Block>
              <Text category="p1" style={styles.main_text}>
                rs3218536 is one of many variants associated with the disease.
                Individual variants contribute a small amount to the development
                of the disease. A combination of other genetic, epigenetic,
                environmental and lifestyle factors influence the overall risk
                of developing ovarian cancer. Although this disease will not
                affect males directly, the variant can be passed on to their
                descendants
              </Text>
            </Block>
          </Section>
        </Grid>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#63BEE1',
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 25,
  },
  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
  button_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Ovarian;
