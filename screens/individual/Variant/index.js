import React from 'react';

import PageLayout from '../../../components/PageLayout';
import TopSection from './TopSection';
import BottomSection from './BottomSection';
import CenterImage from './CenterImage';

const AllAmbassadorsData = {
  stephan: {
    data: require(`../../../assets/variants/stephan/data.json`),
    image: require(`../../../assets/variants/stephan/pie_chart.png`),
  },
  colin: {
    data: require(`../../../assets/variants/colin/data.json`),
    image: require(`../../../assets/variants/colin/pie_chart.png`),
  },
  laura: {
    data: require(`../../../assets/variants/laura/data.json`),
    image: require(`../../../assets/variants/laura/pie_chart.png`),
  },
  momodou: {
    data: require(`../../../assets/variants/momodou/data.json`),
    image: require(`../../../assets/variants/momodou/pie_chart.png`),
  },
};

const Variant = (props) => {
  const { route } = props;
  const { name } = route.params;

  return (
    <>
      <PageLayout>
        <TopSection data={AllAmbassadorsData[name].data} />
        <CenterImage source={AllAmbassadorsData[name].image} />
        <BottomSection data={AllAmbassadorsData[name].data} />
      </PageLayout>
    </>
  );
};

export default Variant;
