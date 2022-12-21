const AllAmbassadors = {
  stephan: {
    SNV_heart_image: require('./../../../assets/Individual/Health/heart/stephan_heart_SNV.png'),
    SNV_crohn_image: require('./../../../assets/Individual/Health/crohns/stephan_crohn_SNV.png'),
    SNV_ovarian_image: require('./../../../assets/Individual/Health/ovarian/stephan_ovarian_SNV.png'),
    themeColor: '#8CD8C4',
  },
  colin: {
    SNV_heart_image: require('./../../../assets/Individual/Health/heart/colin_heart_SNV.png'),
    SNV_crohn_image: require('./../../../assets/Individual/Health/crohns/colin_crohn_SNV.png'),
    SNV_ovarian_image: require('./../../../assets/Individual/Health/ovarian/colin_ovarian_SNV.png'),
    themeColor: '#9C82DE',
  },
  laura: {
    SNV_heart_image: require('./../../../assets/Individual/Health/heart/laura_heart_SNV.png'),
    SNV_crohn_image: require('./../../../assets/Individual/Health/crohns/laura_crohn_SNV.png'),
    SNV_ovarian_image: require('./../../../assets/Individual/Health/ovarian/laura_ovarian_SNV.png'),
    themeColor: '#F6BD4A',
  },
  momodou: {
    SNV_heart_image: require('./../../../assets/Individual/Health/heart/momodou_heart_SNV.png'),
    SNV_crohn_image: require('./../../../assets/Individual/Health/crohns/momodou_crohn_SNV.png'),
    SNV_ovarian_image: require('./../../../assets/Individual/Health/ovarian/momodou_ovarian_SNV.png'),
    themeColor: '#D94553',
  },
};

const AllAmbassadorsData = {
  stephan: {
    heart: {
      data: require(`./../../../assets/Individual/Health/heart/stephan.json`),
      image: require('./../../../assets/Individual/Health/heart/stephan_heart_profile.png'),
    },
    ovarian: {
      data: require(`./../../../assets/Individual/Health/ovarian/stephan.json`),
      image: require('./../../../assets/Individual/Health/ovarian/stephan_ovarian_profile.png'),
    },
    crohn: {
      data: require(`./../../../assets/Individual/Health/crohns/stephan.json`),
      image: require('./../../../assets/Individual/Health/crohns/stephan_crohn_profile.png'),
    },
  },
  colin: {
    heart: {
      data: require(`./../../../assets/Individual/Health/heart/colin.json`),
      image: require('./../../../assets/Individual/Health/heart/colin_heart_profile.png'),
    },
    ovarian: {
      data: require(`./../../../assets/Individual/Health/ovarian/colin.json`),
      image: require('./../../../assets/Individual/Health/ovarian/colin_ovarian_profile.png'),
    },
    crohn: {
      data: require(`./../../../assets/Individual/Health/crohns/colin.json`),
      image: require('./../../../assets/Individual/Health/crohns/colin_crohn_profile.png'),
    },
  },
  laura: {
    heart: {
      data: require(`./../../../assets/Individual/Health/heart/laura.json`),
      image: require('./../../../assets/Individual/Health/heart/laura_heart_profile.png'),
    },
    ovarian: {
      data: require(`./../../../assets/Individual/Health/ovarian/laura.json`),
      image: require('./../../../assets/Individual/Health/ovarian/laura_ovarian_profile.png'),
    },
    crohn: {
      data: require(`./../../../assets/Individual/Health/crohns/laura.json`),
      image: require('./../../../assets/Individual/Health/crohns/laura_crohn_profile.png'),
    },
  },
  momodou: {
    heart: {
      data: require(`./../../../assets/Individual/Health/heart/momodou.json`),
      image: require('./../../../assets/Individual/Health/heart/momodou_heart_profile.png'),
    },
    ovarian: {
      data: require(`./../../../assets/Individual/Health/ovarian/momodou.json`),
      image: require('./../../../assets/Individual/Health/ovarian/momodou_ovarian_profile.png'),
    },
    crohn: {
      data: require(`./../../../assets/Individual/Health/crohns/momodou.json`),
      image: require('./../../../assets/Individual/Health/crohns/momodou_crohn_profile.png'),
    },
  },
};

export default {
  AllAmbassadors: AllAmbassadors,
  AllAmbassadorsData: AllAmbassadorsData
}
