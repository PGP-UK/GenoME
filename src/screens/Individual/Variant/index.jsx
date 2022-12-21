import React, { useContext } from "react";

import PageLayout from "../../../components/PageLayout";
import DataContext from "../../../Context/DataContext";

import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import CenterImage from "./CenterImage";

const Variant = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  const { variant: { AllAmbassadorsData }} = useContext(DataContext)
  const { data, image } = AllAmbassadorsData[name];

  return (
    <>
      <PageLayout>
        <TopSection data={data} navigation={navigation} />
        <CenterImage image={image} />
        <BottomSection data={data} />
      </PageLayout>
    </>
  );
};

export default Variant;
