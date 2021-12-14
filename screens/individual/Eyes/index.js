import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import PageLayout from '../../../components/PageLayout';
import HeaderRow from './HeaderRow';

const Eyes = (props) => {
  const { navigation } = props;
  return (
    <>
      <PageLayout>
          <View style={styles.mainContainer}>
          <HeaderRow navigation={navigation} HeaderStyle={styles.headerRow}/>
          <View style={{ flex: 1 }} />
          <Text category="p1" style={styles.main_text}>
            Eye colour is determined by multiple genetic variants, some of which have been 
            used to predict my eye colour. Below you can see my actual eyes and the 
            predicted eye colour - how well do you think the prediction has 
            worked?
          </Text>
          <View style={{ flex: 1 }} />
          <Image style={styles.eye_image} source={require("../../../assets/images/eyes/blue_eye.png")} />
          <Text category="p1" style={styles.eye_text}>
            My eye colour is predicted to be blue
          </Text>
          </View> 
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({

  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerRow: {
    marginTop: 20,
    marginBottom: 25,
  },

  eye_image: {
      height: 400,
      width: 400,
  },

  header: {
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 25,
  },

  main_text: {
    color: '#666E7A',
    fontSize: 20,
    marginBottom: 20,
  },

  eye_text: {
    color: '#8742f5',
    fontSize: 30,
    marginBottom: 20,
    paddingTop: 30,
  },

});

export default Eyes;
