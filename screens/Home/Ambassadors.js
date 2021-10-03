import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';

const AllAmbassadors = [
  {
    name: 'Stephan',
    hexId: 'uk35C650',
    image: require('../../assets/ambassadors/stephan.gif'),
    themeColor: '#8CD8C4',
  },
  {
    name: 'Laura',
    hexId: 'uk33D02F',
    image: require('../../assets/ambassadors/laura.gif'),
    themeColor: '#F6BD4A',
  },
  {
    name: 'Momodou',
    hexId: 'uk481F67',
    image: require('../../assets/ambassadors/momodou.gif'),
    themeColor: '#D94553',
  },
  {
    name: 'Colin',
    hexId: 'uk4CA868',
    image: require('../../assets/ambassadors/colin.gif'),
    themeColor: '#9C82DE',
  },
];

const Ambassador = (props) => {
  const { name, hexId, image, themeColor, navigation } = props;

  return (
    <Block xsSize='100%' smSize='50%' mdSize='25%'>
      <Pressable
        onPress={() =>
          navigation.navigate('Landing', { name: name.toLowerCase() })
        }
        style={styles.box}>
        <Image source={image} style={styles.image} />
        <Text category='p1' style={{ ...styles.header, color: themeColor }}>
          {hexId}
        </Text>
        <Text category='p1' style={styles.secondLineText}>
          Also known as: {name}
        </Text>
      </Pressable>
    </Block>
  );
};

const Ambassadors = ({ navigation }) => (
  <Grid>
    <Section>
      {AllAmbassadors.map((AmbassadorData, idx) => (
        <Ambassador key={idx} {...AmbassadorData} navigation={navigation} />
      ))}
    </Section>
  </Grid>
);

const styles = StyleSheet.create({
  box: {
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 10,
  },
  secondLineText: {
    fontSize: 20,
  },
});

export default Ambassadors;
