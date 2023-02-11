import React, { useContext } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { Text, Icon } from '@ui-kitten/components';
import { Section, Block } from 'react-native-responsive-layout';

import DataContext from '../../../Context/DataContext';
import { PgpText } from '../../../components/Text';

const TextSection = () => {
  const { setModalId } = useContext(DataContext);

  const mainHeaderStyles = {
    xs: [styles.mainHeaderBase, styles.mainHeaderXs],
    lg: [styles.mainHeaderBase, styles.mainHeaderLg],
    xl: [styles.mainHeaderBase, styles.mainHeaderXl],
  };
  const subheaderStyles = {
    xs: [styles.subHeaderBase, styles.subHeaderXs],
    lg: [styles.subHeaderBase, styles.subHeaderLg],
    xl: [styles.subHeaderBase, styles.subHeaderXl],
  };
  const mainTextStyles = {
    xs: [styles.mainTextBase, styles.mainTextXs],
    lg: [styles.mainTextBase, styles.mainTextLg],
    xl: [styles.mainTextBase, styles.mainTextXl],
  };

  return (
    <Section>
      <Block>
        <PgpText category="h1" sizeSelectorStyles={mainHeaderStyles}>
          My GENOME contains many layers of INFORMATION, including GENETIC and
          EPIGENETIC information.
        </PgpText>
        <PgpText category="p1" sizeSelectorStyles={subheaderStyles}>
          My DNA sequence is about 99.9% identical to other people's DNA. The
          remaining 0.1% is what makes me unique, which amounts to several
          million changes. These changes are called "genetic variants". The
          majority of variants are shared between individuals whilst others are
          private (in this case, unique to me or my family).
        </PgpText>
        <PgpText
          category="p1"
          sizeSelectorStyles={mainTextStyles}
          onPress={() => setModalId('genetic_variants')}>
          Tap{' '}
          <PgpText
            category="p1"
            sizeSelectorStyles={mainTextStyles}
            style={styles.hereClickableText}>
            here
          </PgpText>{' '}
          to find out more about what a private, genetic or epigenetic variant
          is.
        </PgpText>
        <MyStoryButton setModalId={setModalId} />
        <PgpText category="h1" sizeSelectorStyles={mainTextStyles}>
          Tap below to explore a few of my variants which we do know about.
        </PgpText>
      </Block>
    </Section>
  );
};

const MyStoryButton = ({ setModalId }) => (
  <Pressable onPress={() => setModalId('intro_video')}>
    <View style={styles.buttonContainer}>
      <View
        style={styles.button}
        appearance="outline"
        size="giant"
        status="control">
        <Icon
          style={styles.button_icon}
          fill="#fff"
          name="play-circle-outline"
        />
        <Text category="h2" style={{ color: '#fff' }}>
          Watch My Story
        </Text>
      </View>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  // MainHeader
  mainHeaderBase: {
    marginTop: 5,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '400',
    color: 'white',
  },
  mainHeaderXs: {
    fontSize: 36,
  },
  mainHeaderLg: {
    fontSize: 50,
  },
  mainHeaderXl: {
    fontSize: 75,
    marginRight: 30,
    marginLeft: 30,
  },
  // SubHeader
  subHeaderBase: {
    marginBottom: 10,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },
  subHeaderXs: {
    fontSize: 24,
  },
  subHeaderLg: {
    fontSize: 26,
  },
  subHeaderXl: {
    fontSize: 36,
    marginRight: 22,
    marginLeft: 22,
  },
  // MainText
  mainTextBase: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  mainTextXs: {
    fontSize: 22,
  },
  mainTextLg: {
    fontSize: 24,
  },
  mainTextXl: {
    fontSize: 32,
  },

  button: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'white',
    padding: 10,
    borderRadius: 20,
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 40,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  button_icon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  hereClickableText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default TextSection;
