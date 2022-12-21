import React, { useContext } from 'react';
import { Grid, Section } from 'react-native-responsive-layout';

import PageLayout from '../../../components/PageLayout';
import DataContext from '../../../Context/DataContext';

import TopText from './TopText';
import CenterSection from './CenterSection';
import GlobeImage from './GlobeImage';

const Ancestry = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  const { ancestry: { AllAmbassadorsData } } = useContext(DataContext)
  const { data, image } = AllAmbassadorsData[name];

  return (
    <PageLayout>
      <Grid>
        <Section>
          <TopText navigation={navigation} />
        </Section>
        <Section>
          <CenterSection data={data} image={image} />
        </Section>
        <Section>
          <GlobeImage />
        </Section>
      </Grid>
    </PageLayout>
  );
};

export default Ancestry;
