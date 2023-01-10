import React, { useContext, useState, useEffect, useRef } from 'react';
import { Video, Audio } from 'expo-av';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import {Vimeo} from 'react-native-vimeo-iframe'
import DataContext from '../../../Context/DataContext';
import { PageText } from '../../../components/Text';

const triggerAudio = async (ref) => {
  await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
  ref.current.playAsync();
};

const IntroVideo = () => {
  const [status, setStatus] = useState({});
  const videoRef = useRef(null);

  const route = useRoute();
  const name = route?.params?.name || 'stephan';
  const { landing } = useContext(DataContext);
  const videoSrc = landing[name];

  useEffect(() => {
    if (status.isPlaying) triggerAudio(videoRef);
  }, [videoRef, status.isPlaying]);

  const imageWidth = Math.round(useSafeAreaFrame().width - 110);
  const maxImageHeight = Math.round(useSafeAreaFrame().height * 0.7);
  const finalImageWidth =
    imageWidth > maxImageHeight ? maxImageHeight : imageWidth;


  const videoCallbacks = {
    timeupdate: (data) => console.log('timeupdate: ', data),
    play: (data) => console.log('play: ', data),
    pause: (data) => console.log('pause: ', data),
    fullscreenchange: (data) => console.log('fullscreenchange: ', data),
    ended: (data) => console.log('ended: ', data),
    controlschange: (data) => console.log('controlschange: ', data),
  };
  
  return (
    <>
      <PageText style={{ marginBottom: 10, marginTop: 5 }}>
        Please click on the video below to start playing.
      </PageText>
      <Vimeo
            videoId={'712158285'}
            params={'api=1&autoplay=0'}
            handlers={videoCallbacks}
          />
    </>
  );
};

export default IntroVideo;
