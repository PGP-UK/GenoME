import React from 'react';
import { Image, Pressable } from 'react-native';
import { Block } from 'react-native-responsive-layout';

const AmbassadorImage = ({ name, image, navigation }) => {
  return (
    <>
      <Pressable
        onPress={() =>
          navigation.navigate('Health', {
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

const AmbassadorSwitch = ({ AllAmbassadors, navigation }) => {
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
        />
        <AmbassadorImage
          name={'laura'}
          image={AllAmbassadors.laura.image}
          navigation={navigation}
        />
        <AmbassadorImage
          name={'momodou'}
          image={AllAmbassadors.momodou.image}
          navigation={navigation}
        />
        <AmbassadorImage
          name={'colin'}
          image={AllAmbassadors.colin.image}
          navigation={navigation}
        />
      </Block>
    </>
  );
};

export { AmbassadorSwitch };
