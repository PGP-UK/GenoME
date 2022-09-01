import React from 'react'
import { View, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useSafeAreaFrame } from "react-native-safe-area-context";

const ImageBackground = (props) => {
  const { children, style = {}, imageStyle, imageRef, ...rest } = props

  return (
    <View style={style}>
      <FastImage
        {...rest}
        style={[
          StyleSheet.absoluteFill,
          {
            width: useSafeAreaFrame().width,
            height: useSafeAreaFrame().width * .3,
            margin: 0,
            marginLeft: -5,
            marginBottom: 0
          },
          imageStyle,
        ]}
      />
      {children}
    </View>
  )
};

export default ImageBackground
