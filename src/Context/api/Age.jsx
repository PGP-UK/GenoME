const AgeData = require('./../../../assets/Individual/Age/data.json');
const AllAmbassadors = {
  stephan: {
    AgeImage: require(`./../../../assets/Individual/Age/stephan_age.json`),
    themeColor: '#8CD8C4',
  },
  laura: {
    AgeImage: require(`./../../../assets/Individual/Age/laura_age.json`),
    themeColor: '#F6BD4A',
  },
  momodou: {
    AgeImage: require(`./../../../assets/Individual/Age/momodou_age.json`),
    themeColor: '#D94553',
  },
  colin: {
    AgeImage: require(`./../../../assets/Individual/Age/colin_age.json`),
    themeColor: '#9C82DE',
  },
};

export default {
  AgeData: AgeData,
  AllAmbassadors: AllAmbassadors
}
