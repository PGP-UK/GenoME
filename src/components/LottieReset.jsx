import React from 'react';
import { View } from 'react-native';
import { Icon, Button } from '@ui-kitten/components';

const resetLottieAnimation = (lottieRef) => {
  lottieRef.current.reset();
  lottieRef.current.play();
};

const LottieReset = ({ lottieRef, displayReset, style }) => {
  return (
    <View style={[{ alignItems: 'flex-end' }, style]}>
      <View style={{ flex: 1 }}>
        {displayReset ? (
          <Button
            size="large"
            appearance="ghost"
            onPress={() => resetLottieAnimation(lottieRef)}>
            <Icon
              fill="#8F9BB3"
              name="refresh-outline"
              style={{ transform: [{ scaleX: -1 }] }}
            />
          </Button>
        ) : (
          <Button size="large" appearance="ghost" />
        )}
      </View>
    </View>
  );
};

export default LottieReset;
