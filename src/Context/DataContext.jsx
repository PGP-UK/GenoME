import React, { useState, createContext } from 'react';

import HomeData from './api/Home';
import AgeData from './api/Age';
import AncestryData from './api/Ancestry';
import EyesData from './api/Eyes';
import HealthData from './api/Health';
import LandingData from './api/Landing';
import SmokingData from './api/Smoking';
import VariantData from './api/Variant';

import DiseaseData from './generic/DiseaseData';

const DataContext = createContext({});

export function DataProvider(props) {
  const [modalId, setModalId] = useState('hidden');
  const themeColors = {
    stephan: '#8CD8C4',
    colin: '#9C82DE',
    laura: '#F6BD4A',
    momodou: '#D94553',
  };

  return (
    <DataContext.Provider
      {...props}
      value={{
        modalId: modalId,
        setModalId: setModalId,
        themeColors: themeColors,
        home: HomeData,
        age: AgeData,
        ancestry: AncestryData,
        eyes: EyesData,
        health: HealthData,
        landing: LandingData,
        smoking: SmokingData,
        variant: VariantData,

        diseaseData: DiseaseData,
        diseaseIcons: Object.entries(DiseaseData).map(([_, v]) => v)
      }}
    />
  );
}

export default DataContext;
