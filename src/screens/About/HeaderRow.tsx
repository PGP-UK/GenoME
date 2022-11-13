import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Button } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { PageHeader } from '../../components/Text';
import BackButton from '../../components/BackButton';

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
        <Block xsSize="100%" mdSize="80%">
          <HeaderText />
        </Block>
        <Block xsSize="100%" mdSize="20%" style={{ paddingBottom: 25 }}>
          <BackButton navigation={navigation} />
        </Block>
      </Section>
    </Grid>
  );
});

const HeaderText = () => (
  <PageHeader style={styles.header}>
    About PGP-UK and the global network of Personal Genome Projects
  </PageHeader>
);

const styles = StyleSheet.create({
  header: {
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
