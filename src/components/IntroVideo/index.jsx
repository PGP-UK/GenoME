import React, { useContext, useState, useEffect, useRef } from 'react';
import { Video, Audio } from 'expo-av';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

import DataContext from '../../Context/DataContext';
import { PageText } from '../Text';

const triggerAudio = async (ref) => {
  await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  ref.current.playAsync();
};

const IntroVideo = () => {
  const [status, setStatus] = useState({});
  const videoRef = useRef(null);

  const route = useRoute();
  const name = route?.params?.name || 'stephan';
  const {
    landing: { introVideos },
  } = useContext(DataContext);
  const videoSrc = introVideos[name];

  useEffect(() => {
    if (status.isPlaying) triggerAudio(videoRef);
  }, [videoRef, status.isPlaying]);

  const imageWidth = Math.round(useSafeAreaFrame().width - 110);

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
        onPlaybackStatusUpdate={(status) => setStatus(status)}
      />
    </>
  );
};

export default IntroVideo;
