import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
import PageLayout from '../../components/PageLayout';

const Landing = (props) => {
  const { route } = props;
  const { name } = route.params;
  return (
    <>
      <PageLayout>
        <Text category="h1" style={styles.header}>
          {name} Landing
        </Text>
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Landing;
