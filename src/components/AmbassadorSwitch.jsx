import React, { useContext, useState } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Popover } from '@ui-kitten/components';
import {
  useNavigation,
  useRoute,
  CommonActions,
} from '@react-navigation/native';
import FastImage from '@cuvent/react-native-fast-image';

import DataContext from '../Context/DataContext';

const AmbassadorSwitch = ({popOverStyles}) => {
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params;
  const {
    home: { allAmbassadors = [] },
    themeColors,
  } = useContext(DataContext);

  const currentIdx = allAmbassadors.findIndex((e) => e.name == name);
  const selectedAmbassador = allAmbassadors[currentIdx];

  const renderCurrentProfile = () => (
    <Pressable onPress={() => setVisible(true)} s>
      <ProfilePic
        source={selectedAmbassador.image}
        style={styles.selectedImage}
        themeColor={themeColors[selectedAmbassador.name]}
      />
    </Pressable>
  );

  const onProfileClick = (name) => {
    navigation.dispatch(CommonActions.setParams({ name: name }));
    setVisible(false);
  };

  return (
    <Popover
      shouldUseContainer={false}
      fullWidth={true}
      animationType="fade"
      supportedOrientations={[
        'portrait',
        'portrait-upside-down',
        'landscape',
        'landscape-left',
        'landscape-right',
      ]}
      backdropStyle={styles.backdrop}
      placement="bottom end"
      visible={visible}
      anchor={renderCurrentProfile}
      onBackdropPress={() => setVisible(false)}>
      <View style={[styles.popover, popOverStyles]}>
        <View style={styles.content}>
          {allAmbassadors
            .filter((_, i) => i !== currentIdx)
            .map((e) => (
              <Pressable
                key={e.name}
                onPress={() => onProfileClick(e.name)}
                style={{ margin: 5 }}>
                <ProfilePic
                  source={e.image_png}
                  themeColor={themeColors[e.name]}
                />
              </Pressable>
            ))}
        </View>
      </View>
    </Popover>
  );
};

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

const styles = StyleSheet.create({
  image: {
    width: 56,
    height: 56,
    borderRadius: 30,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  selectedImage: {
    marginTop: -10,
    marginBottom: -10,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  popover: {
    position: 'absolute',
    left: 12,
    top: 12,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  safeView: {
    flex: 1,
  },
});
export default AmbassadorSwitch;
