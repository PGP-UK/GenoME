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
  const { variant } = useContext(DataContext);
  const { total, shared, privateNum, image } = variant[name];

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
        rightText={`Total Number of variants: ${'\n'} ${total.num} ${'\n'} ${total.percent}`}
        rightStyle={{ color: '#45B0D4' }}
      />
      <CenterImage image={image} />
      <TextSection
        leftText={`Number of shared variants: ${'\n'} ${shared.num} ${'\n'} ${shared.percent}`}
        leftStyle={{ color: data.themeColor }}
        rightText={`Number of private variants: ${'\n'} ${privateNum.num} ${'\n'} ${privateNum.percent}`}
        rightStyle={{ color: '#666d78' }}
      />
    </PageLayout>
  );
};

export default Variant;
