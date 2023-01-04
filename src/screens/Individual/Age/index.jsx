import React, { useContext } from 'react';
import { StyleSheet } from "react-native";
import { Grid, Section, Block } from 'react-native-responsive-layout';

import PageLayout from '../../../components/PageLayout';
import DataContext from '../../../Context/DataContext';
import HeaderRow from '../../../components/HeaderRow';
import LottieAnimation from '../../../components/LottieAnimation';

import {BoxText, InfoText, ImageKey} from './Sections';

const Age = (props) => {
  const { route } = props;
  const { name } = route.params;
  const { age: { AgeData, AllAmbassadors }, themeColors} = useContext(DataContext)
  const data = AgeData[name];
  const themeColor = themeColors[name]
  const allAmbassadorsData = AllAmbassadors[name]

  return (
    <PageLayout>
      <HeaderRow goBackBtn displayAmbassadorSwitch>Epigenetic Age</HeaderRow>
      <Grid stretchable>
        <Section>
          <InfoText/>
        </Section>
        <Section style={styles.container} stretch>
          <Block xsSize="100%" mdSize="50%" style={{ paddingBottom: 2 }}>
            <LottieAnimation
              image={allAmbassadorsData.AgeImage}
              imagePercentages={{ xs: 0.8, xxl: 0.4 }} />
          </Block>

          <Block xsSize="100%" mdSize="50%" >
            <ImageKey data={data} />
            <BoxText themeColor={themeColor} />
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
})

export default Age;
