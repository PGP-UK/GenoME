import React from "react";

import PageLayout from "../../../components/PageLayout";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import CenterImage from "./CenterImage";

const AllAmbassadorsData = {
  stephan: {
    data: require(`../../../../assets/data/variant/stephan.json`),
    image: "stephan.png",
  },
  colin: {
    data: require(`../../../../assets/data/variant/colin.json`),
    image: "colin.png",
  },
  laura: {
    data: require(`../../../../assets/data/variant/laura.json`),
    image: "laura.png",
  },
  momodou: {
    data: require(`../../../../assets/data/variant/momodou.json`),
    image: "momodou.png",
  },
};

const Variant = (props) => {
  const { route } = props;
  const { name } = route.params;
  const { data, image } = AllAmbassadorsData[name];
  return (
    <>
      <PageLayout>
        <TopSection data={data} />
        <CenterImage image={`variant_screen_pie_charts/${image}`} />
        <BottomSection data={data} />
      </PageLayout>
    </>
  );
};

export default Variant;
