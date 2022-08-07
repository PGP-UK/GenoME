import React from 'react';
import { Image, Pressable } from 'react-native';
import { IndexPath, Select } from '@ui-kitten/components';
import { PageText } from '../Text';
import { Section, Block } from 'react-native-responsive-layout';

const AmbassadorImage = ({ name, image, navigation, page }) => {
  return (
    <>
      <Pressable
        onPress={() =>
          navigation.navigate(page, {
            name: name,
          })
        }
        style={{ paddingRight: 5 }}>
        <Image
          source={image}
          style={{ width: 60, height: 60 }}
          resizeMode="contain"
        />
        <PageText style={{ fontSize: 15 }}>{name}</PageText>
      </Pressable>
    </>
  );
};

const AmbassadorSwitch = ({ AllAmbassadors, navigation, page }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  return (
    <>
      <Select
        style={{ width: 75 }}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}>
        <AmbassadorImage
          name={'stephan'}
          image={AllAmbassadors.stephan.image}
          navigation={navigation}
          page={page}
        />
        <AmbassadorImage
          name={'laura'}
          image={AllAmbassadors.laura.image}
          navigation={navigation}
          page={page}
        />
        <AmbassadorImage
          name={'momodou'}
          image={AllAmbassadors.momodou.image}
          navigation={navigation}
          page={page}
        />
        <AmbassadorImage
          name={'colin'}
          image={AllAmbassadors.colin.image}
          navigation={navigation}
          page={page}
        />
      </Select>
    </>
  );
};

export { AmbassadorSwitch };
