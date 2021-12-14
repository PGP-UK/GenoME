import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';

const MoreInfoBtn = ({ layoutStyle, navigation }) => (
  <Layout style={layoutStyle}>
    <Button
      size="small"
      status="primary"
      style={styles.headerBtn}
      onPress={() => navigation.navigate('About')}>
      MORE INFORMATION
    </Button>
  </Layout>
);
const HeaderText = () => (
  <Text category="h1" style={styles.header}>
    Personal Genome Project
  </Text>
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
          <MoreInfoBtn layoutStyle={btnStyles} navigation={navigation} />
        </Block>
      </Section>
    </Grid>
  );
});

const styles = StyleSheet.create({
  header: {
    color: '#63BEE1',
    fontWeight: '400',
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
