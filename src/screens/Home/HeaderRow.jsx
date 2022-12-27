import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Button } from "@ui-kitten/components";
import { Grid, Section, Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useNavigation } from '@react-navigation/native';

import { PageHeader } from "../../components/Text";

const MoreInfoBtn = ({ layoutStyle }) => {
  const navigation = useNavigation();

  return (
    <Layout style={layoutStyle}>
      <Button
        size="small"
        status="primary"
        style={styles.headerBtn}
        onPress={() => navigation.navigate("About")}
      >
        MORE INFORMATION
      </Button>
    </Layout>
  )
}

const HeaderRow = withSizeInfo(({ sizeSelector }) => {
  const headerRowStyles = sizeSelector({
    xs: styles.headerRowXs,
    md: styles.headerRowMd,
  });
  const buttonContainerStyles = sizeSelector({
    xs: {flexDirection: 'row'},
    md: {}
  })
  console.log(buttonContainerStyles)
  return (
    <Grid>
      <Section style={headerRowStyles}>
        <Block xsSize="100%" mdSize="70%">
          <PageHeader>Personal Genome Project</PageHeader>
        </Block>
        <Block xsSize="100%" mdSize="30%" style={buttonContainerStyles}>
          <MoreInfoBtn layoutStyle={styles.btnStyles} />
        </Block>
      </Section>
    </Grid>
  );
});

const styles = StyleSheet.create({
  headerRowXs: {
    marginBottom: 25,
  },
  headerRowMd: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  headerBtn: {
    backgroundColor: "#3BAEDA",
    borderWidth: 0,
    color: "#fff",
  },
  btnStyles: {
    marginTop: 10,
  },
});

export default HeaderRow;
