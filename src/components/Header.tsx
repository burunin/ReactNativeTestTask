import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Link } from "@react-navigation/native";

export default function Header() {
  return (
    <>
      <Image
        source={require("../../assets/img/bg-form.png")}
        style={styles.bgForm}
      />
      <Image
        source={require("../../assets/img/logo-secondary.png")}
        style={styles.srLogo}
      />
      <View style={styles.backLink}>
        <Link to={"/Welcome"}>
          <Text style={styles.backLinkText}>{"<"}</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bgForm: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    zIndex: -1,
  },
  srLogo: {
    zIndex: 90,
    alignItems: "flex-end",
    width: "100%",
    top: "5%",
  },
  backLink: {
    zIndex: 100,
    left: "5%",
    top: "5%",
    position: "absolute",
    width: 30,
    height: 30,
  },
  backLinkText: {
    fontWeight: "900",
    fontSize: 25,
    color: "#7A4ED9",
  },
});
