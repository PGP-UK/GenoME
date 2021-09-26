import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';

const MoreInfoBtn = ({ layoutStyle, navigation }) => (
  <Layout style={layoutStyle}>
    <Button
      size='small'
      status='primary'
      style={styles.headerBtn}
      onPress={() => navigation.navigate('About')}>
      MORE INFORMATION
    </Button>
  </Layout>
);

const HeaderText = () => (
  <Text category='h1' style={styles.header}>
    Personal Genome Project
  </Text>
);

const HeaderRow = (props) => {
  const { navigation, HeaderStyle } = props;

  return (
    <Grid>
      <Section style={HeaderStyle}>
        {/* For small screens */}
        <Block xsSize='100%' mdHidden>
          <HeaderText />
        </Block>
        <Block xsSize='100%' mdHidden>
          <MoreInfoBtn
            layoutStyle={styles.headerBtnLayoutXs}
            navigation={navigation}
          />
        </Block>

        {/* For larger screens */}
        <Block xsSize='70%' hidden mdVisible>
          <HeaderText />
        </Block>
        <Block xsSize='30%' hidden mdVisible>
          <MoreInfoBtn
            layoutStyle={styles.headerBtnLayoutMd}
            navigation={navigation}
          />
        </Block>
      </Section>
    </Grid>
  );
};

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
