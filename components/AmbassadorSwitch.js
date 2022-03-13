import React from 'react';
import { Image, Pressable } from 'react-native';
import { Block } from 'react-native-responsive-layout';

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
          style={{ width: 90, height: 90 }}
          resizeMode="contain"
        />
      </Pressable>
    </>
  );
};

const AmbassadorSwitch = ({ AllAmbassadors, navigation, page }) => {
  return (
    <>
      <Block
        xsSize="100%"
        mdSize="40%"
        style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
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
      </Block>
    </>
  );
};

export { AmbassadorSwitch };
