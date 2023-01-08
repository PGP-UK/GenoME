import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouseChimney } from '@fortawesome/sharp-solid-svg-icons/faHouseChimney'

import AmbassadorSwitch from '../../../components/AmbassadorSwitch';

const BackButton = withSizeInfo(({ sizeSelector }) => {
  const navigation = useNavigation();

  const btnStyles = sizeSelector({
    xs: [styles.baseRow, styles.headerBtnLayoutXs],
    sm: [styles.baseRow, styles.headerBtnLayoutSm],
  });
  return (
    <Section>
      <Block>
        <View style={btnStyles}>
          <Pressable onPress={() => navigation.goBack()} >
            <FontAwesomeIcon icon={faHouseChimney} size={30} color="white" />
          </Pressable>
          <AmbassadorSwitch popOverStyles={{ left: 0 }} switcherIconColor="#fff" switcherIconStyles={{ left: 19 }} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBtnLayoutXs: {
    marginTop: 10,
    marginBottom: 15,
  },
  headerBtnLayoutSm: {
    marginBottom: 15,
  },
});

export default BackButton;
