import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Button, Icon } from '@ui-kitten/components';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import { withSizeInfo } from 'react-native-responsive-layout/wrappers';
import { useNavigation } from '@react-navigation/native';

import { PageHeader } from './Text';
import AmbassadorSwitch from './AmbassadorSwitch';

const HeaderRow = ({ goBackBtn, ...props }) => (
  <Grid>
    {goBackBtn ? (
      <HeaderWithBackBtnAndAmbassadorSwitch {...props} />
    ) : (
      <HeaderWithSideBtn {...props} />
    )}
  </Grid>
);

const HeaderWithSideBtn = ({ children, btnText, btnLocation }) => (
  <Section>
    <Block xsSize="100%" mdSize="70%">
      <HeaderText>{children}</HeaderText>
    </Block>
    <Block xsSize="100%" mdSize="30%">
      <SideButton btnText={btnText} btnLocation={btnLocation} />
    </Block>
  </Section>
);

const HeaderWithBackBtnAndAmbassadorSwitch = ({
  children,
  displayAmbassadorSwitch = false,
}) => (
  <Section style={{ alignItems: 'center', marginBottom: 10 }}>
    <Block xsSize="80%">
      <HeaderText goBackBtn>{children}</HeaderText>
    </Block>
    <Block xsSize="20%">
      {displayAmbassadorSwitch && <AmbassadorSwitch />}
    </Block>
  </Section>
);

const HeaderText = withSizeInfo(
  ({ sizeSelector, children, goBackBtn = false }) => {
    const navigation = useNavigation();
    const headerRowStyles = sizeSelector({
      xs: styles.headerRowXs,
      md: styles.headerRowMd,
    });

    return (
      <Pressable onPress={() => goBackBtn && navigation.goBack()}>
        <PageHeader baseStyle={headerRowStyles}>
          {goBackBtn && (
            <Icon
              style={styles.icon}
              fill="#63BEE1"
              name="arrow-back-outline"
            />
          )}
          {children}
        </PageHeader>
      </Pressable>
    );
  }
);

const SideButton = withSizeInfo(({ sizeSelector, ...props }) => {
  const navigation = useNavigation();
  const { btnText, btnLocation } = props;
  const buttonContainerStyles = sizeSelector({
    xs: styles.btnXs,
    md: styles.btnMd,
  });

  return (
    <View style={buttonContainerStyles}>
      <Button
        size="small"
        status="primary"
        style={styles.headerBtn}
        onPress={() => navigation.navigate(btnLocation)}>
        {btnText}
      </Button>
    </View>
  );
});

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
    backgroundColor: '#3BAEDA',
    borderWidth: 0,
    color: '#fff',
  },
  icon: {
    justifySelf: 'center',
    width: 30,
    height: 30,
    marginRight: 5,
  },
});

export default HeaderRow;
