import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";
import { Grid, Section, Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useNavigation } from '@react-navigation/native';

import { PageHeader } from "./Text";

const HeaderRow = ({ headerText, btnText, btnLocation, backBtn }) => {
  return (
    <Grid>
      <Section>
        <Block xsSize="100%" mdSize="70%">
          <HeaderText headerText={headerText}/>
        </Block>
        <Block xsSize="100%" mdSize="30%">
          <SideButton backBtn={backBtn} btnText={btnText} btnLocation={btnLocation} />
        </Block>
      </Section>
    </Grid>
  );
}

const HeaderText = withSizeInfo(({ sizeSelector, ...props}) => {
  const { headerText } = props
  const headerRowStyles = sizeSelector({
    xs: styles.headerRowXs,
    md: styles.headerRowMd,
  });

  return (
    <PageHeader baseStyle={headerRowStyles}>{headerText}</PageHeader>
  )
})

const SideButton = withSizeInfo(({ sizeSelector, ...props }) => {
  const navigation = useNavigation();
  const { btnText, btnLocation, backBtn } = props
  const buttonContainerStyles = sizeSelector({
    xs: styles.btnXs,
    md: styles.btnMd
  })

  return (
    <View style={buttonContainerStyles}>
      <Button
        size="small"
        status="primary"
        style={styles.headerBtn}
        onPress={() => backBtn ? navigation.goBack() : navigation.navigate(btnLocation)}
      >
        {backBtn ? 'BACK' : btnText}
      </Button>
    </View>
  )
})

const styles = StyleSheet.create({
  headerRowXs: {
    marginBottom: 5,
  },
  headerRowMd: {
    marginBottom: 20,
  },
  btnXs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  btnMd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  headerBtn: {
    backgroundColor: "#3BAEDA",
    borderWidth: 0,
    color: "#fff",
  }
});

export default HeaderRow;
