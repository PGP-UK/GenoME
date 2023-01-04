import React, { useContext } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import FastImage from '@cuvent/react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

import { PageText } from '../../components/Text';

import DataContext from '../../Context/DataContext';

const AmbassadorImage = withSizeInfo(({ sizeSelector, image }) => {
  const numImagesPerRow = sizeSelector({ xs: 1, sm: 2, md: 4 });
  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) - 80;
  return (
    <FastImage
      style={{ width: imageWidth, height: imageWidth }}
      source={image}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
});

const Ambassador = (props) => {
  const navigation = useNavigation();
  const { label, name, hexId, image, themeColor } = props;

  return (
    <Block xsSize="100%" smSize="50%" mdSize="25%">
      <Pressable
        onPress={() => navigation.navigate('Landing', { name: name })}
        style={styles.box}>
        <AmbassadorImage image={image} />
        <PageText category="p1" style={[styles.header, { color: themeColor }]}>
          {hexId}
        </PageText>
        <PageText category="p1" style={styles.secondLineText}>
          Also known as: {'\n'} {label}
        </PageText>
      </Pressable>
    </Block>
  );
};

const Ambassadors = ({ navigation }) => {
  const {
    home: { allAmbassadors = [] },
  } = useContext(DataContext);
  return (
    <Grid>
      <Section style={styles.ambassadorWrapper}>
        {allAmbassadors.map((AmbassadorData, idx) => (
          <Ambassador key={idx} {...AmbassadorData} navigation={navigation} />
        ))}
      </Section>
    </Grid>
  );
};

const styles = StyleSheet.create({
  ambassadorWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  box: {
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 10,
  },
  secondLineText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Ambassadors;
