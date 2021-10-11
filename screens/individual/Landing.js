import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import PageLayout from '../../components/PageLayout';

const Landing = (props) => {
  const { route, navigation } = props;
  const { name } = route.params;
  return (
    <>
      <PageLayout>
        <Text category="h1" style={styles.header}>
          {name} Landing
        </Text>
        <Button
          size="small"
          status="primary"
          style={styles.headerBtn}
          onPress={() =>
            navigation.navigate('Age', { name: name.toLowerCase() })
          }>
          Age Page
        </Button>
        <Text>space</Text>
        <Button
          size="small"
          status="primary"
          style={styles.headerBtn}
          onPress={() =>
            navigation.navigate('Smoking', { name: name.toLowerCase() })
          }>
          Smoking Page
        </Button>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
  button_style: {
    color: 'white',
    backgroundColor: '#00d5ff',
    padding: 10,
  },
  headerBtn: {
    backgroundColor: '#3BAEDA',
    borderWidth: 0,
    color: '#fff',
  },
});

export default Landing;
