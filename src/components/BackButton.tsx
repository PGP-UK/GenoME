import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '@ui-kitten/components';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';

const BackButton = withSizeInfo(({ sizeSelector, navigation }) => {
  const btnStyles = sizeSelector({
    xs: styles.headerBtnLayoutXs,
    md: styles.headerBtnLayoutMd,
  });
  return (
    <View style={btnStyles}>
      <Button
        size="small"
        status="primary"
        style={styles.headerBtn}
        onPress={() => navigation.goBack()}>
        BACK
      </Button>
    </View>
  );
});

const styles = StyleSheet.create({
  headerBtn: {
    backgroundColor: '#3BAEDA',
    borderWidth: 0,
    color: '#fff',
  },
  headerBtnLayoutXs: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: 10,
  },
  headerBtnLayoutMd: {
    flexDirection: 'row-reverse',
    marginBottom: 10,
  },
});

export default BackButton;
