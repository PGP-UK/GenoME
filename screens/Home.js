import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = (props) => {
  const { navigation } = props;

  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <Text>Home Page</Text>

        <Button
          style={styles.button}
          title='About'
          onPress={() => navigation.navigate('About')}
        />
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
  button: {
    backgroundColor: 'blue',
  },
});

export default Home;
