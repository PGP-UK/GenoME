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
    image: require(`../../../assets/images/age_pie_charts/stephan.png`),
  },
  laura: {
    image: require(`../../../assets/images/age_pie_charts/laura.png`),
  },
  momodou: {
    image: require(`../../../assets/images/age_pie_charts/momodou.png`),
  },
  colin: {
    image: require(`../../../assets/images/age_pie_charts/colin.png`),
  },
};

const Age = (props) => {
  const { route } = props;
  const { name } = route.params;
  const ambassadors = dataFile.data[name];

  return (
    <>
      <PageLayout>
        <TopSection data={AmbassadorsData[name].data} />
        <CenterImage source={AmbassadorsData[name].image} />
        <BottomSection data={dataFile.data[name]} />
      </PageLayout>
    </>
  );
};

export default Age;
