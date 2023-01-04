import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';

import PageLayout from '../../../components/PageLayout';
import DataContext from '../../../Context/DataContext';
import HeaderRow from '../../../components/HeaderRow';

import { BoxText, InfoText, ImageKey } from './Sections';
import CenterImage from './CenterImage';

const Smoking = (props) => {
  const { route } = props;
  const { name } = route.params;
  const { smoking, themeColors, } = useContext(DataContext);
  const data = smoking[name];
  const themeColor = themeColors[name];

  return (
    <PageLayout>
      <HeaderRow goBackBtn displayAmbassadorSwitch>
        Smoking Prediction
      </HeaderRow>
      <Grid stretchable>
        <Section>
          <InfoText />
        </Section>

        <Section style={styles.container} stretch>
          <Block xsSize="100%" mdSize="50%" style={{ paddingBottom: 2 }}>
            <CenterImage image={data.image} themeColor={themeColor} />
          </Block>

          <Block xsSize="100%" mdSize="50%">
            <ImageKey data={data} themeColor={themeColor} />
            <BoxText data={data} themeColor={themeColor} />
          </Block>
        </Section>
      </Grid>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default Smoking;
