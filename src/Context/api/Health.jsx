const AllAmbassadorsData = {
  stephan: {
    heart: {
      data: require('./../../../assets/Individual/Health/heart/stephan.json'),
      image: require('./../../../assets/Individual/Health/heart/lottie/stephan.json'),
      snvIcon: require('./../../../assets/Individual/Health/heart/stephan_heart_SNV.png'),
    },
    ovarian: {
      data: require('./../../../assets/Individual/Health/ovarian/stephan.json'),
      image: require('./../../../assets/Individual/Health/ovarian/lottie/stephan.json'),
      snvIcon: require('./../../../assets/Individual/Health/ovarian/stephan_ovarian_SNV.png'),
    },
    crohn: {
      data: require('./../../../assets/Individual/Health/crohns/stephan.json'),
      image: require('./../../../assets/Individual/Health/crohns/lottie/stephan.json'),
      snvIcon: require('./../../../assets/Individual/Health/crohns/stephan_crohn_SNV.png'),
    },
  },
  colin: {
    heart: {
      data: require('./../../../assets/Individual/Health/heart/colin.json'),
      image: require('./../../../assets/Individual/Health/heart/lottie/colin.json'),
      snvIcon: require('./../../../assets/Individual/Health/heart/colin_heart_SNV.png'),
    },
    ovarian: {
      data: require('./../../../assets/Individual/Health/ovarian/colin.json'),
      image: require('./../../../assets/Individual/Health/ovarian/lottie/colin.json'),
      snvIcon: require('./../../../assets/Individual/Health/ovarian/colin_ovarian_SNV.png'),
    },
    crohn: {
      data: require('./../../../assets/Individual/Health/crohns/colin.json'),
      image: require('./../../../assets/Individual/Health/crohns/lottie/colin.json'),
      snvIcon: require('./../../../assets/Individual/Health/crohns/colin_crohn_SNV.png'),
    },
  },
  laura: {
    heart: {
      data: require('./../../../assets/Individual/Health/heart/laura.json'),
      image: require('./../../../assets/Individual/Health/heart/lottie/laura.json'),
      snvIcon: require('./../../../assets/Individual/Health/heart/laura_heart_SNV.png'),
    },
    ovarian: {
      data: require('./../../../assets/Individual/Health/ovarian/laura.json'),
      image: require('./../../../assets/Individual/Health/ovarian/lottie/laura.json'),
      snvIcon: require('./../../../assets/Individual/Health/ovarian/laura_ovarian_SNV.png'),
    },
    crohn: {
      data: require('./../../../assets/Individual/Health/crohns/laura.json'),
      image: require('./../../../assets/Individual/Health/crohns/lottie/laura.json'),
      snvIcon: require('./../../../assets/Individual/Health/crohns/laura_crohn_SNV.png'),
    },
  },
  momodou: {
    heart: {
      data: require('./../../../assets/Individual/Health/heart/momodou.json'),
      image: require('./../../../assets/Individual/Health/heart/lottie/momodou.json'),
      snvIcon: require('./../../../assets/Individual/Health/heart/momodou_heart_SNV.png'),
    },
    ovarian: {
      data: require('./../../../assets/Individual/Health/ovarian/momodou.json'),
      image: require('./../../../assets/Individual/Health/ovarian/lottie/momodou.json'),
      snvIcon: require('./../../../assets/Individual/Health/ovarian/momodou_ovarian_SNV.png'),
    },
    crohn: {
      data: require('./../../../assets/Individual/Health/crohns/momodou.json'),
      image: require('./../../../assets/Individual/Health/crohns/lottie/momodou.json'),
      snvIcon: require('./../../../assets/Individual/Health/crohns/momodou_crohn_SNV.png'),
    },
  },
};

const diseaseData = {
  heart: {
    disease: 'heart',
    header: 'Heart Disease',
    id: 'rs238206',
    infoHeader:
      'Heart disease includes many medical conditions and accounts for up to 40% of all deaths in developed countries.',
    infoFooter:
      'rs238206 is one of many variants associated with the disease. Individual variants contribute a small amount to the development of the disease. A combination of other genetic, epigenetic, environmental and lifestyle factors influence the overall risk of developing heart disease.',
  },
  crohn: {
    disease: 'crohn',
    header: "Crohn's Disease",
    id: 'rs2066847',
    infoHeader:
      "Crohn's disease is a chronic inflammatory condition of the digestive system that affects around 115,000 people per year in the UK.",
    infoFooter:
      "rs2066847 is one of many variants associated with the disease. Individual variants contribute a small amount to the development of the disease. A combination of other genetic, epigenetic, environmental and lifestyle factors influence the overall risk of developing Crohn's disease.",
  },
  ovarian: {
    disease: 'ovarian',
    header: 'Ovarian Cancer',
    id: 'rs3218536',
    infoHeader:
      "Ovarian cancer is a cancer of the ovary which is a part of a woman's repoductive system. It is the 6th most common cancer in women in the UK.",
    infoFooter:
      'rs3218536 is one of many variants associated with the disease. Individual variants contribute a small amount to the development of the disease. A combination of other genetic, epigenetic, environmental and lifestyle factors influence the overall risk of developing ovarian cancer. Although this disease will not affect males directly, the variant can be passed on to their descendants.',
  },
};

const diseaseIcons = Object.entries(diseaseData).map(([_, v]) => v);

export default {
  AllAmbassadorsData: AllAmbassadorsData,
  diseaseData: diseaseData,
  diseaseIcons: diseaseIcons,
};
