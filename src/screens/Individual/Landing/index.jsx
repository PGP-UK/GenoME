import React, { useContext } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Section, Block, Grid } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import PageLayout from '../../../components/PageLayout';
import DataContext from '../../../Context/DataContext';

import BackButton from './BackButton';
import TextSection from './TextSection';
import Icons from './Icons';

const Landing = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  const { themeColors} = useContext(DataContext);
  const themeColor = themeColors[name]

  return (
    <PageLayout backgroundColor={themeColor}>
      <BackButton />
      <TextSection />
      <Grid>
        <Section style={styles.iconsWrapper}>
          {Icons.map((IconData, idx) => (
            <LandingIcon
              key={idx}
              IconData={IconData}
              name={name}
              navigation={navigation}
            />
          ))}
        </Section>
      </Grid>
    </PageLayout>
  );
};

const LandingIcon = ({ IconData, name, navigation }) => (
  <Block
    xsSize="50%"
    smSize="33%"
    mdSize="16.6%"
    style={styles.landingIconWrapper}>
    <Pressable
      onPress={() =>
        navigation.navigate(IconData.pageName, { name: name.toLowerCase() })
      }
      style={styles.box}>
      <Iconimage {...IconData} />
      <Text category="h4" style={styles.iconText}>
        {IconData.pageName}
      </Text>
    </Pressable>
  </Block>
);

const Iconimage = withSizeInfo(({ sizeSelector, ...props }) => {
  const { icon, transform } = props
  const numImagesPerRow = sizeSelector({ xs: 2, sm: 3, md: 6 });
  const imageWidth =
    Math.round(useSafeAreaFrame().width / numImagesPerRow) - 40;
  return (
    <View>
      <FontAwesomeIcon
        icon='fa-thin fa-circle'
        size={imageWidth}
        color='#fff'
        style={{position: 'absolute'}}
      />
      <FontAwesomeIcon
        icon={icon}
        size={imageWidth}
        color='#fff'
        transform={transform}
        // secondaryColor='#000' // For duotone icons
        // secondaryOpacity={ 0.3 }
      />
    </View>
  );
});

const styles = StyleSheet.create({
  landingIconWrapper: {
    alignItems: 'center',
  },
  box: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  iconText: {
    paddingTop: 7,
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  iconsWrapper: {
    justifyContent: 'center',
  },
});

export default Landing;
