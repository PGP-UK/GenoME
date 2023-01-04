import React, { useContext } from 'react';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { StyleSheet } from 'react-native';

import PageLayout from '../../../../components/PageLayout';
import DataContext from '../../../../Context/DataContext';
import HeaderRow from '../../../../components/HeaderRow';
import { PageHeader, PageText } from '../../../../components/Text';

import MiddleSection from './MiddleSection';
import DiseaseData from '../DiseaseData';

const Diseases = (props) => {
  const { route } = props;
  const { name, disease } = route.params;
  const { health, themeColors } = useContext(DataContext);
  const data = health[name][disease]
  const themeColor = themeColors[name];
  const {header, id, infoHeader, infoFooter} = DiseaseData[disease];

  return (
    <PageLayout>
      <HeaderRow goBackBtn displayAmbassadorSwitch>
        {header}
        {'\n'}
        <PageHeader category="h3" style={{ color: themeColor }}>
          Genetic variant ID: {id}
        </PageHeader>
      </HeaderRow>
      <Block>
        <PageText category="p1">{infoHeader}</PageText>
      </Block>

      <Grid>
        <Section style={styles.container}>
          <MiddleSection {...data}
          />
        </Section>
      </Grid>

      <Block>
        <PageText category="p1" style={{ marginTop: 15 }}>
          {infoFooter}
        </PageText>
      </Block>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Diseases;
