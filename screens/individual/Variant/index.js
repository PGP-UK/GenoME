import React from 'react';

import PageLayout from '../../../components/PageLayout';
import TopSection from './TopSection';
import BottomSection from './BottomSection';
import CenterImage from './CenterImage';

const AllAmbassadorsData = {
  stephan: {
    data: require(`../../../assets/data/variant/stephan.json`),
    image: require(`../../../assets/images/variant_screen_pie_charts/stephan.png`),
  },
  colin: {
    data: require(`../../../assets/data/variant/colin.json`),
    image: require(`../../../assets/images/variant_screen_pie_charts/colin.png`),
  },
  laura: {
    data: require(`../../../assets/data/variant/laura.json`),
    image: require(`../../../assets/images/variant_screen_pie_charts/laura.png`),
  },
  momodou: {
    data: require(`../../../assets/data/variant/momodou.json`),
    image: require(`../../../assets/images/variant_screen_pie_charts/momodou.png`),
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
