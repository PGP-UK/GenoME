import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Select, SelectItem } from '@ui-kitten/components';
import { useNavigation, CommonActions } from '@react-navigation/native';
import FastImage from '@cuvent/react-native-fast-image';

import DataContext from '../Context/DataContext';

const ProfilePic = ({ source, style = {}, themeColor }) => (
  <FastImage
    source={source}
    style={[
      styles.image,
      themeColor ? { borderColor: themeColor, borderWidth: 2 } : {},
      style,
    ]}
    resizeMode="contain"
  />
);

const AmbassadorSwitch = () => {
  const navigation = useNavigation();
  const {
    home: { allAmbassadors = [] },
    themeColors,
  } = useContext(DataContext);
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  const selectedAmbassador = allAmbassadors[selectedIndex - 1];

  useEffect(() => {
    navigation.dispatch(
      CommonActions.setParams({ name: selectedAmbassador.name })
    );
  }, [selectedIndex]);

  return (
    <Select
      style={{ width: 60, alignSelf: 'center' }}
      status="control"
      size="large"
      selectedIndex={selectedIndex}
      value={() => (
        <ProfilePic
          source={selectedAmbassador.image_png}
          style={styles.selectedImage}
          themeColor={themeColors[selectedAmbassador.name]}
        />
      )}
      onSelect={(index) => setSelectedIndex(index)}>
      {allAmbassadors.map((e) => (
        <SelectItem
          key={e.name}
          title={() => (
            <ProfilePic source={e.image_png} themeColor={themeColors[e.name]} />
          )}
        />
      ))}
    </Select>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 46,
    height: 46,
    borderRadius: 30,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  selectedImage: {
    marginTop: -10,
    marginBottom: -10,
    marginLeft: 10,
  },
});
export default AmbassadorSwitch;
