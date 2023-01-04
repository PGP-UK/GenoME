import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Select, SelectItem } from '@ui-kitten/components';
import { useNavigation, useRoute, CommonActions } from '@react-navigation/native';
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
    resizeMode={FastImage.resizeMode.contain}
  />
);

const AmbassadorSwitch = ({selectedImageStyle}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params
  const {
    home: { allAmbassadors = [] },
    themeColors,
  } = useContext(DataContext);
  const currentIdx = allAmbassadors.findIndex(e => e.name == name)
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(currentIdx));

  const selectedAmbassador = allAmbassadors[selectedIndex - 1];

  return (
    <Select
      style={{ width: 60, alignSelf: 'center', backgroundColor: 'transparent', border: 'none', }}
      status="control"
      size="large"
      selectedIndex={selectedIndex}
      onSelect={(index) => {
        navigation.dispatch(
          CommonActions.setParams({ name: allAmbassadors[index -1].name })
        )
        setSelectedIndex(index)
      }}
      value={() => (
        <ProfilePic
          source={selectedAmbassador.image_png}
          style={[styles.selectedImage, selectedImageStyle]}
          themeColor={themeColors[selectedAmbassador.name]}
        />
      )}
    >
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
