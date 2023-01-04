import React, { useContext } from 'react';

import PageLayout from '../../../components/PageLayout';
import HeaderRow from '../../../components/HeaderRow';
import DataContext from '../../../Context/DataContext';
import { PageText } from '../../../components/Text';

import TextSection from './TextSection';
import CenterImage from './CenterImage';

const Variant = (props) => {
  const { route } = props;
  const { name } = route.params;
  const {
    variant: { AllAmbassadorsData },
  } = useContext(DataContext);
  const { data, image } = AllAmbassadorsData[name];

  return (
    <PageLayout>
      <HeaderRow goBackBtn displayAmbassadorSwitch>
        Variants
      </HeaderRow>
      <PageText category="p1">
        These numbers reflect how many single nucleotide variants (SNVs) were identified in my genome.
      </PageText>

      <TextSection
        leftText=''
        rightText={`Total Number of variants: ${'\n'} ${
          data.total.num
        } ${'\n'} ${data.total.percent}`}
        rightStyle={{ color: '#45B0D4' }}
      />
      <CenterImage image={image} />
      <TextSection
        leftText={`Number of shared variants: ${'\n'} ${
          data.shared.num
        } ${'\n'} ${data.shared.percent}`}
        leftStyle={{ color: data.themeColor }}
        rightText={`Number of private variants: ${'\n'} ${
          data.private.num
        } ${'\n'} ${data.private.percent}`}
        rightStyle={{ color: '#666d78' }}
      />
    </PageLayout>
  );
};

export default Variant;
