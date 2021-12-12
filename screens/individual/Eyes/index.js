import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';

import PageLayout from '../../../components/PageLayout';
import HeaderRow from './HeaderRow';

const Eyes = () => {
  return (
    <>
      <PageLayout>
        <View style={[styles.container, {flexDirection: "column"}]}>

        <View style={{ flex: 1 }} />

         <HeaderRow navigation={navigation} />
          <View style={styles.mainContainer}>
      

           <View style={styles.body} />

           <Text category="p1" style={styles.main_text}>
            Eye colour is determined by multiple genetic variants, some of which have been 
            used to predict my eye colour. Below you can see my actual eyes and the 
            predicted eye colour - how well do you think the prediction has 
            worked?
            </Text>
           </View>
          </View>

          <View style={{ flex: 1 }} />
          </View>
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
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    height: 30,
  },
  body: {
    flex: 3,
    display: 'flex',
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
});

export default Eyes;
