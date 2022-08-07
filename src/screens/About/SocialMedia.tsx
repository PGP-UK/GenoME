import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { Text } from "@ui-kitten/components";
import * as Linking from "expo-linking";

const SocialMedia = () => (
  <View style={[styles.container, { flexDirection: "column" }]}>
    <View
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}
    >
      <Text
        style={styles.socialMediaText}
        onPress={() => Linking.openURL("https://twitter.com/pgpuk_genomes")}
      >
        Twitter
      </Text>
      <TouchableWithoutFeedback
        onPress={() => Linking.openURL("https://twitter.com/pgpuk_genomes")}
      >
        <Image
          style={styles.socialMediaLogo}
          source={require("../../../assets/images/about_us/more-information_twitter.png")}
        />
      </TouchableWithoutFeedback>
      <Text
        style={styles.socialMediaText}
        onPress={() => Linking.openURL("https://pgpukblog.wordpress.com/")}
      >
        Blogs
      </Text>
      <TouchableWithoutFeedback
        onPress={() => Linking.openURL("https://pgpukblog.wordpress.com/")}
      >
        <Image
          style={styles.socialMediaLogo}
          source={require("../../../assets/images/about_us/more-information_blogs.png")}
        />
      </TouchableWithoutFeedback>
      <Text
        style={styles.socialMediaText}
        onPress={() => Linking.openURL("https://www.personalgenomes.org.uk/")}
      >
        Web
      </Text>
      <TouchableWithoutFeedback
        onPress={() => Linking.openURL("https://www.personalgenomes.org.uk/")}
      >
        <Image
          style={styles.socialMediaLogo}
          source={require("../../../assets/images/about_us/more-information_www.png")}
        />
      </TouchableWithoutFeedback>
    </View>

    <View style={{ flex: 1 }}>
      <Text style={styles.main_text1}>
        We look forward to making great science with you!
      </Text>
      <Text style={styles.main_text2}>
        Director: Professor Stephan Beck {"\n"}
        Location: University College London
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },

  main_text2: {
    color: "#666E7A",
    fontSize: 20,
    textAlign: "left",
  },
  main_text1: {
    color: "#666E7A",
    fontSize: 20,
    marginBottom: 10,
    paddingTop: 40,
    paddingBottom: 20,
    textAlign: "left",
  },
  bottom_text: {
    color: "#666E7A",
    fontSize: 10,
    marginBottom: 20,
  },
  bottom_red_text: {
    color: "#ff0000",
    fontSize: 10,
    marginBottom: 20,
  },
  bottomImage: {
    marginTop: 20,
    marginBottom: 25,
  },
  socialMediaText: {
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  socialMediaLogo: {
    width: 50,
    height: 50,
  },
});

export default SocialMedia;
