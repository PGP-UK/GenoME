import React, { useContext } from 'react';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { StyleSheet } from 'react-native';

import PageLayout from '../../../../components/PageLayout';
import DataContext from '../../../../Context/DataContext';
import HeaderRow from '../../../../components/HeaderRow';
import { PageHeader, PageText } from '../../../../components/Text';

import MiddleSection from './MiddleSection';

const Diseases = (props) => {
  const { route } = props;
  const { name, disease } = route.params;
  const {
    health: { AllAmbassadorsData, diseaseData },
    themeColors,
  } = useContext(DataContext);

  const themeColor = themeColors[name];
  const personalDiseaseData = AllAmbassadorsData[name][disease];
  const { data, image } = personalDiseaseData;
  const diseaseInfo = diseaseData[disease];

  return (
    <PageLayout>
      <HeaderRow goBackBtn displayAmbassadorSwitch>
        {diseaseInfo.header}
        {'\n'}
        <PageHeader category="h3" style={{ color: themeColor }}>
          Genetic variant ID: {diseaseInfo.id}
        </PageHeader>
      </HeaderRow>
      <Block>
        <PageText category="p1">{diseaseInfo.infoHeader}</PageText>
      </Block>

      <Grid>
        <Section style={styles.container}>
          <MiddleSection
            disease={disease}
            data={data}
            name={name}
            image={image}
          />
        </Section>
      </Grid>

      <Block>
        <PageText category="p1" style={{ marginTop: 15 }}>
          {diseaseInfo.infoFooter}
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
