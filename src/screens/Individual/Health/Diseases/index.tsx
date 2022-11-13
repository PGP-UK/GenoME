import React from 'react';
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';
import BottomSection from './BottomSection';
import PageLayout from '../../../../components/PageLayout';

const AllAmbassadorsData = {
  stephan: {
    heart: {
      data: require(`../../../../../assets/data/health/heart/stephan.json`),
      image: 'heart_profiles/stephan_heart_profile.png',
    },
    ovarian: {
      data: require(`../../../../../assets/data/health/ovarian/stephan.json`),
      image: 'ovarian_profiles/stephan_ovarian_profile.png',
    },
    crohn: {
      data: require(`../../../../../assets/data/health/crohns/stephan.json`),
      image: 'crohns_profiles/stephan_crohn_profile.png',
    },
  },
  colin: {
    heart: {
      data: require(`../../../../../assets/data/health/heart/colin.json`),
      image: 'heart_profiles/colin_heart_profile.png',
    },
    ovarian: {
      data: require(`../../../../../assets/data/health/ovarian/colin.json`),
      image: 'ovarian_profiles/colin_ovarian_profile.png',
    },
    crohn: {
      data: require(`../../../../../assets/data/health/crohns/colin.json`),
      image: 'crohns_profiles/colin_crohn_profile.png',
    },
  },
  laura: {
    heart: {
      data: require(`../../../../../assets/data/health/heart/laura.json`),
      image: 'heart_profiles/laura_heart_profile.png',
    },
    ovarian: {
      data: require(`../../../../../assets/data/health/ovarian/laura.json`),
      image: 'ovarian_profiles/laura_ovarian_profile.png',
    },
    crohn: {
      data: require(`../../../../../assets/data/health/crohns/laura.json`),
      image: 'crohns_profiles/laura_crohn_profile.png',
    },
  },
  momodou: {
    heart: {
      data: require(`../../../../../assets/data/health/heart/momodou.json`),
      image: 'heart_profiles/momodou_heart_profile.png',
    },
    ovarian: {
      data: require(`../../../../../assets/data/health/ovarian/momodou.json`),
      image: 'ovarian_profiles/momodou_ovarian_profile.png',
    },
    crohn: {
      data: require(`../../../../../assets/data/health/crohns/momodou.json`),
      image: 'crohns_profiles/momodou_crohn_profile.png',
    },
  },
};

const Diseases = (props) => {
  const { route, navigation } = props;
  const { name, disease } = route.params;
  const data = AllAmbassadorsData[name][disease].data;
  const image = AllAmbassadorsData[name][disease].image;

  return (
    <>
      <PageLayout>
        <TopSection disease={disease} data={data} navigation={navigation} />
        <MiddleSection
          disease={disease}
          data={data}
          name={name}
          image={image}
        />
        <BottomSection disease={disease} />
      </PageLayout>
    </>
  );
};

export default Diseases;
