import React, {useContext} from 'react';
import { StyleSheet, View,  Pressable } from 'react-native';
import { Text, Icon } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';

import BackButton from '../../../components/BackButton';
import DataContext from '../../../Context/DataContext'

const TextSection = withSizeInfo(({ sizeSelector, ...props }) => {
  const { setModalId } = useContext(DataContext);

  const { navigation, themeColor } = props;
  const headerStyles = sizeSelector({
    xs: styles.headerxs,
    lg: styles.headerlg,
  });
  const subheaderStyles = sizeSelector({
    xs: styles.subheaderxs,
    lg: styles.subheaderlg,
  });
  const mainTextStyles = sizeSelector({
    xs: styles.main_textxs,
    lg: styles.main_textlg,
  });

  return (
    <Section>
      <Block style={{ flexDirection: 'row-reverse' }}>
        <BackButton navigation={navigation} />
      </Block>
      <Block xsSize="100%" lgSize="100%">
        <Text category="h1" style={headerStyles}>
          My GENOME contains many layers of INFORMATION, including GENETIC and
          EPIGENETIC information.
        </Text>
        <Text category="h5" style={subheaderStyles}>
          My DNA sequence is about 99.9% identical to other people's DNA. The
          remaining 0.1% is what makes me unique, which amounts to several
          million changes. These changes are called "genetic variants". The
          majority of variants are shared between individuals whilst others are
          private (in this case, unique to me or my family).
        </Text>
        <Text category="h5" style={mainTextStyles} onPress={() => setModalId('genetic_variants')}>
          Tap here to find out more about what a private, genetic or epigenetic variant is.
        </Text>
        <Pressable onPress={() => setModalId('intro_video')}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={[styles.button, {flexDirection: 'row', alignContent: 'center'}]} appearance='outline' size='giant' status='control'>
              <Icon style={{width: 40, height: 40, alignSelf: 'baseline'}} fill='#fff' name='play-circle-outline' />
              <Text category="h2" style={[headerStyles, {marginLeft: 5, marginTop: 5, marginBottom: 5}]}>
                Watch My Story
              </Text>
            </View>
          </View>
        </Pressable>
        <Text category="h5" style={mainTextStyles}>
          Tap below to explore a few of my variants which we do know about.
        </Text>
      </Block>
    </Section>
  );
});

const styles = StyleSheet.create({
  headerxs: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '400',
    color: 'white',
  },
  button: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor:'white',
    padding: 10,
    borderRadius: 20,
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 40,
  },
  headerlg: {
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 30,
    fontSize: 75,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },
  // headermd: {
  //   marginTop: 30,
  //   marginBottom: 20,
  //   textAlign: 'center',
  //   fontWeight: '400',
  //   // color: 'white',
  //   fontSize: 35,
  // },
  subheaderxs: {
    marginTop: 10,

    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },
  subheaderlg: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 35,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },
  main_textxs: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  main_textlg: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  press_text: {
    backgroundColor: 'white',
  },
});

export default TextSection;
