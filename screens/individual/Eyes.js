import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Eyes = () => {
  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <Text>Eyes Page</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Eyes;
