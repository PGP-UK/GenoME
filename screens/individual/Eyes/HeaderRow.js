import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';

const BackBtn = ({ layoutStyle, navigation }) => (
  <Layout style={layoutStyle}>
    <Button
      size="small"
      status="primary"
      style={styles.headerBtn}
      onPress={() => navigation.navigate('Home')}>
      BACK
    </Button>
  </Layout>
);

const HeaderRow = withSizeInfo(({ sizeSelector, navigation, HeaderStyle }) => {
  const btnStyles = sizeSelector({
    xs: styles.headerBtnLayoutXs,
    md: styles.headerBtnLayoutMd,
  });
  
  return (
    <Grid>
      <Section style={HeaderStyle}>
        <Block xsSize="100%" mdSize="70%">
          <HeaderText />
        </Block>
        <Block xsSize="100%" mdSize="30%">
          <BackBtn layoutStyle={btnStyles} navigation={navigation} />
        </Block>
      </Section>
    </Grid>
  );
});

const HeaderText = () => (
  <Text category="h1" style={styles.header}>
    About PGP-UK and the global network of Personal Genome Projects  
  </Text>
);

const styles = StyleSheet.create({
  header: {
    color: '#63BEE1',
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 25,
    alignItems: 'center',
  },
  headerBtn: {
    backgroundColor: '#3BAEDA',
    borderWidth: 0,
    color: '#fff',
  },
  headerBtnLayoutXs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  headerBtnLayoutMd: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default HeaderRow;
