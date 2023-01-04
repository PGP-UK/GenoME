import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useNavigation } from '@react-navigation/native';

import AmbassadorSwitch from '../../../components/AmbassadorSwitch';

const BackButton = withSizeInfo(({ sizeSelector }) => {
  const navigation = useNavigation();

  const btnStyles = sizeSelector({
    xs: [styles.baseRow, styles.headerBtnLayoutXs],
    sm: [styles.baseRow, styles.headerBtnLayoutSm],
  });
  return (
    <Section>
      <Block style={{ flexDirection: 'row-reverse' }}>
        <View style={btnStyles}>
          <Icon
            style={styles.icon}
            fill="#fff"
            name="home"
            onPress={() => navigation.goBack()}
          />
          <AmbassadorSwitch popOverStyles={{ left: 0 }} />
        </View>
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    marginRight: 5,
  },
  baseRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBtnLayoutXs: {
    marginTop: 10,
  },
  headerBtnLayoutSm: {
    marginBottom: 5,
  },
});

export default BackButton;
