import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import PageLayout from '../../../../components/PageLayout';

const Crohn = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  return (
    <>
      <PageLayout>
        <Grid>
          <Section>
            <Block>
              <Text category="h1" style={styles.header}>
                Crohn's disease
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
                Crohn's disease is a chronic inflammatory condition of the
                digestive system that affects around 115,000 people per year in
                the UK.
              </Text>
            </Block>
            <Block>
              <Text category="p1" style={styles.main_text}>
                rs2066847 is one of many variants associated with the disease.
                Individual variants contribute a small amount to the development
                of the disease. A combination of other genetic, epigenetic,
                environmental and lifestyle factors influence the overall risk
                of developing Crohn's disease.
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

export default Crohn;
