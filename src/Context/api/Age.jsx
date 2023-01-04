const AgeData = require('./../../../assets/Individual/Age/data.json');
const AllAmbassadors = {
  stephan: {
    AgeImage: require(`./../../../assets/Individual/Age/lottie/stephan.json`),
    themeColor: '#8CD8C4',
  },
  laura: {
    AgeImage: require(`./../../../assets/Individual/Age/lottie/laura.json`),
    themeColor: '#F6BD4A',
  },
  momodou: {
    AgeImage: require(`./../../../assets/Individual/Age/lottie/momodou.json`),
    themeColor: '#D94553',
  },
  colin: {
    AgeImage: require(`./../../../assets/Individual/Age/lottie/colin.json`),
    themeColor: '#9C82DE',
  },
};

export default {
  AgeData: AgeData,
  AllAmbassadors: AllAmbassadors,
};
