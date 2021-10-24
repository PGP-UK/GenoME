import React from 'react';

import PageLayout from '../../../components/PageLayout';
import TopSection from './TopSection';
import BottomSection from './BottomSection';
import CenterImage from './CenterImage';

const dataFile = {
  data: require(`../../../assets/data/age/data.json`),
};

const AmbassadorsData = {
  stephan: {
    image: require(`../../../assets/images/smokers/nonsmoking.png`),
  },
  laura: {
    image: require(`../../../assets/images/smokers/nonsmoking.png`),
  },
  momodou: {
    image: require(`../../../assets/images/smokers/nonsmoking.png`),
  },
  colin: {
    image: require(`../../../assets/images/smokers/nonsmoking.png`),
  },
};

const Smoking = (props) => {
  const { route } = props;
  const { name } = route.params;
  const ambassadors = dataFile.data[name];

  return (
    <>
      <PageLayout>
        <TopSection data={AmbassadorsData[name].data} />
        <CenterImage source={AmbassadorsData[name].image} />
        <CenterImage data={dataFile.data[name]} />
        <BottomSection data={dataFile.data[name]} />
      </PageLayout>
    </>
  );
};

export default Smoking;
