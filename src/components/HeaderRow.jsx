import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@ui-kitten/components";
import { Grid, Section, Block } from "react-native-responsive-layout";
import { withSizeInfo } from "react-native-responsive-layout/wrappers";
import { useNavigation } from '@react-navigation/native';

import { PageHeader } from "./Text";

const HeaderRow = (props) => {
  const { children, btnText, btnLocation, backBtn } = props
  return (
    <Grid>
      <Section>
        <Block xsSize="100%" mdSize="70%">
          <HeaderText>{children}</HeaderText>
        </Block>
        <Block xsSize="100%" mdSize="30%">
          <SideButton backBtn={backBtn} btnText={btnText} btnLocation={btnLocation} />
        </Block>
      </Section>
    </Grid>
  );
}

const HeaderText = withSizeInfo(({ sizeSelector, ...props}) => {
  const { children } = props
  const headerRowStyles = sizeSelector({
    xs: styles.headerRowXs,
    md: styles.headerRowMd,
  });

  return (
    <PageHeader baseStyle={headerRowStyles}>{children}</PageHeader>
  )
})

const SideButton = withSizeInfo(({ sizeSelector, ...props }) => {
  const navigation = useNavigation();
  const { btnText, btnLocation, backBtn } = props
  const buttonContainerStyles = sizeSelector({ xs: styles.btnXs, md: styles.btnMd })

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
