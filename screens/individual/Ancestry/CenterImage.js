import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const CenterImage = withSizeInfo(({...props }) => {
  

  return (
    <Section>
      <Block>
        <View style={{ flex: 1 }}>
          <Image
            {...props}
            style={{width: '75%', marginTop: -80, justifyContent: 'center'}}
            resizeMode="contain"
          />
        </View>
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  imageMd: {
    alignSelf: 'center',
  },
  imageSm: {
    alignSelf: 'center',
  },
});

export default CenterImage;
