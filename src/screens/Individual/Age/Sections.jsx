import React from 'react';
import { StyleSheet } from "react-native";
import { PageText, PgpText } from "../../../components/Text";

const BoxText = ({ themeColor }) => (
  <PageText style={[styles.box, { backgroundColor: themeColor }]}>
    Epigenetic age was calculated from 353 epigenetic variants across the
    participant's genome. These epigenetic variants correlate very well with
    actual age, meaning they can be used as an 'epigenetic clock' to predict
    age. Age acceleration applies if the epigenetic age is 3.6 years older
    than the actual age. Age deceleration applies if the epigenetic age is
    3.6 years younger than their actual age.
  </PageText>
);

const InfoText = () => (
  <PgpText category="p1" sizeSelectorStyles={{ xs: styles.textXs, md: styles.texMd }}>
    Epigenetic variants are chemical changes to your DNA, which alter
    how it is used without changing the DNA sequence. As people age,
    their epigenetic patterns change and we can use this to predict a
    participant's epigenetic age. This predicted epigenetic age can be
    the same as the actual age, older (age acceleration) or younger (age
    deceleration).
  </PgpText>
)

const ImageKey = ({data}) => (
  <PgpText
    category="p1"
    baseStyle={styles.imageKeyWrapper}
    sizeSelectorStyles={{ xs: styles.textRowSm, md: {} }}
  >
    <PageText style={[styles.actual, { color: data.themeColor }]}>
      Actual Age: {data.Age} Years
    </PageText>
    {'\n'}
    <PageText style={styles.epigenetic}>
      Epigenetic Age: {data.Epigenetic} Years
    </PageText>
  </PgpText>
)

const styles = StyleSheet.create({
  textXs: {
    color: '#666E7A',
    fontSize: 20,
  },
  texMd: {
    fontSize: 23,
  },

  box: {
    color: "white",
    fontWeight: "400",
    padding: 10,
    marginTop: 10,
    maxWidth: 500,
    alignSelf: 'center'
  },
  textRowSm: {
    marginTop: 20,
  },
  imageKeyWrapper: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  actual: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 10,
  },
  epigenetic: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 20,
    color: "#11b6d4",
  },

})

export {BoxText, InfoText, ImageKey};
