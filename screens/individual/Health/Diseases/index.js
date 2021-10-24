import React from 'react';
import { StyleSheet } from 'react-native';
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';
import BottomSection from './BottomSection';
import PageLayout from '../../../../components/PageLayout';

const AllAmbassadorsData = {
  stephan: {
    heart: {
      data: require(`../../../../assets/data/health/heart/stephan.json`),
      image: require(`../../../../assets/images/heart_profiles/stephan_heart_profile.png`),
    },
    ovarian: {
      data: require(`../../../../assets/data/health/ovarian/stephan.json`),
      image: require(`../../../../assets/images/ovarian_profiles/stephan_ovarian_profile.png`),
    },
    crohn: {
      data: require(`../../../../assets/data/health/crohns/stephan.json`),
      image: require(`../../../../assets/images/crohns_profiles/stephan_crohn_profile.png`),
    },
  },
  colin: {
    heart: {
      data: require(`../../../../assets/data/health/heart/colin.json`),
      image: require(`../../../../assets/images/heart_profiles/colin_heart_profile.png`),
    },
    ovarian: {
      data: require(`../../../../assets/data/health/ovarian/colin.json`),
      image: require(`../../../../assets/images/ovarian_profiles/colin_ovarian_profile.png`),
    },
    crohn: {
      data: require(`../../../../assets/data/health/crohns/colin.json`),
      image: require(`../../../../assets/images/crohns_profiles/colin_crohn_profile.png`),
    },
  },
  laura: {
    heart: {
      data: require(`../../../../assets/data/health/heart/laura.json`),
      image: require(`../../../../assets/images/heart_profiles/laura_heart_profile.png`),
    },
    ovarian: {
      data: require(`../../../../assets/data/health/ovarian/laura.json`),
      image: require(`../../../../assets/images/ovarian_profiles/laura_ovarian_profile.png`),
    },
    crohn: {
      data: require(`../../../../assets/data/health/crohns/laura.json`),
      image: require(`../../../../assets/images/crohns_profiles/laura_crohn_profile.png`),
    },
  },
  momodou: {
    heart: {
      data: require(`../../../../assets/data/health/heart/momodou.json`),
      image: require(`../../../../assets/images/heart_profiles/momodou_heart_profile.png`),
    },
    ovarian: {
      data: require(`../../../../assets/data/health/ovarian/momodou.json`),
      image: require(`../../../../assets/images/ovarian_profiles/momodou_ovarian_profile.png`),
    },
    crohn: {
      data: require(`../../../../assets/data/health/crohns/momodou.json`),
      image: require(`../../../../assets/images/crohns_profiles/momodou_crohn_profile.png`),
    },
  },
};

const Diseases = (props) => {
  const { route } = props;
  const { name, disease } = route.params;
  const data = AllAmbassadorsData[name][disease].data;
  const image = AllAmbassadorsData[name][disease].image;

  return (
    <>
      <PageLayout>
        <TopSection disease={disease} data={data} />
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

const styles = StyleSheet.create({
  header: {
    color: '#63BEE1',
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 25,
  },
  header2: {
    color: '#666E7A',
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 25,
  },
  header3: {
    color: '#666E7A',
    fontWeight: '400',
  },
  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },
  square1: {
    width: 25,
    height: 25,
    backgroundColor: '#977ABD',
    paddingRight: 0,
  },
  square2: {
    width: 25,
    height: 25,
    backgroundColor: '#34BC99',
  },
  square3: {
    width: 25,
    height: 25,
    backgroundColor: '#F6BB41',
  },
});

export default Diseases;
