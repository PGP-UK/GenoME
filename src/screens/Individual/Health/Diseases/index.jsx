import React, { useContext } from 'react';

import PageLayout from '../../../../components/PageLayout';
import { Section} from "react-native-responsive-layout";
import TopSection from './TopSection';
import MiddleSection from './MiddleSection';
import BottomSection from './BottomSection';
import DataContext from '../../../../Context/DataContext';

const Diseases = (props) => {
  const { route, navigation } = props;
  const { name, disease } = route.params;
  const {health: { AllAmbassadorsData } } = useContext(DataContext)
  const data = AllAmbassadorsData[name][disease].data;
  const image = AllAmbassadorsData[name][disease].image;

  return (
    <>
      <PageLayout>
        <TopSection disease={disease} data={data} navigation={navigation} />
        <Section
        stretch
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
          <MiddleSection
            disease={disease}
            data={data}
            name={name}
            image={image}
          />
          <BottomSection disease={disease} />
        </Section>
      </PageLayout>
    </>
  );
};

export default Diseases;
