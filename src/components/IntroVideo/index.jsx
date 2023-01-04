import React, { useContext, useRef } from 'react';
import { Video } from 'expo-av';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

import DataContext from '../../Context/DataContext';
import { PageText } from '../Text';

const IntroVideo = () => {
  const imageWidth = Math.round(useSafeAreaFrame().width - 110);
  const videoRef = useRef(null);

  const route = useRoute();
  const name = route?.params?.name || 'stephan';
  const {
    landing: { introVideos },
  } = useContext(DataContext);
  const videoSrc = introVideos[name];
  return (
    <>
      <PageText style={{ marginBottom: 10, marginTop: 5 }}>
        Please click on the video below to start playing.
      </PageText>
      <Video
        ref={videoRef}
        style={{ width: imageWidth, height: imageWidth * 0.75 }}
        source={videoSrc}
        useNativeControls={true}
        resizeMode="contain"
      />
    </>
  );
};

export default IntroVideo;
