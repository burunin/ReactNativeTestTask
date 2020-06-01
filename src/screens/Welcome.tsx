import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  Linking,
  StyleSheet,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../navigation/AppNavigation";
import { Link } from "@react-navigation/native";

type WelcomeNavigationProp = StackNavigationProp<StackParamList, "Welcome">;

type Props = {
  navigation: WelcomeNavigationProp;
};

export default function Welcome({ navigation }: Props) {
  return (
    <>
      <Image
        source={require("../../assets/img/bg-main.png")}
        style={styles.Background}
      />
      <View style={styles.container}>
        <Image
          source={require("../../assets/img/logo.png")}
          style={styles.srLogo}
        />
        <Text style={styles.title}>Welcome!</Text>
        <View style={styles.touchableContainer}>
          <Text style={styles.touchableTitle}>
            Want to be a part of a team?
          </Text>
          <TouchableHighlight
            underlayColor="#fff"
            style={styles.touchableSendForm}
            onPress={() => navigation.navigate("PersonalInfo")}
          >
            <Text style={styles.touchableText}>Send Form</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.descriptionContainer}>
          <Link to={"/description"}>
            <Image source={require("../../assets/img/about.png")} />
          </Link>
          <Text
            style={styles.srLink}
            onPress={() => Linking.openURL("https://spryrocks.com/")}
          >
            spryrocks.com
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  srLogo: {
    alignItems: "flex-end",
    width: "100%",
    top: "10%",
  },
  title: {
    position: "absolute",
    top: "42%",
    width: 320,
    height: 54,
    fontFamily: "Poppins-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 46,
    lineHeight: 53,
    textAlign: "center",
    color: "#FFFFFF",
  },
  Background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 1,
    zIndex: -1,
  },
  touchableSendForm: {
    backgroundColor: "#7A4ED9",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    padding: 10,
    borderRadius: 10,
  },
  touchableText: {
    color: "#FFF",
    paddingTop: 2,
    paddingBottom: 2,
    fontWeight: "600",
    fontSize: 20,
    paddingRight: 10,
    paddingLeft: 10,
    lineHeight: 28,
  },
  container: {
    zIndex: 0,
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0, 7, 69, 0.7)",
  },
  touchableContainer: {
    position: "absolute",
    width: "70%",
    top: "60%",
  },
  touchableTitle: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 37,
    textAlign: "center",
  },
  descriptionContainer: {
    position: "absolute",
    top: "85%",
    justifyContent: "center",
    alignItems: "center",
  },
  srLink: {
    marginTop: 15,
    color: "#FFF",
    fontFamily: "BebasNeue-Regular",
    textDecorationLine: "underline",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 24,
    textTransform: "uppercase",
  },
});
