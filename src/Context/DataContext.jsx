import React, {useState, createContext } from "react";

import HomeData from './api/Home'
import AgeData from './api/Age'
import AncestryData from './api/Ancestry'
import EyesData from './api/Eyes'
import HealthData from './api/Health'
import LandingData from './api/Landing'
import SmokingData from './api/Smoking'
import VariantData from './api/Variant'

const DataContext = createContext({});

export function DataProvider(props) {
  const [modalId, setModalId] = useState('hidden')

  return (
    <DataContext.Provider
      {...props}
      value={{
        modalId: modalId,
        setModalId: setModalId,
        home: HomeData,
        age: AgeData,
        ancestry: AncestryData,
        eyes: EyesData,
        health: HealthData,
        landing: LandingData,
        smoking: SmokingData,
        variant: VariantData,
      }}
    />
  )
}

export default DataContext;
