import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <View>
        <Text style={styles.aboutTitle}>Glad to see you, friend!</Text>
      </View>
      <View style={styles.aboutTextContainer}>
        <View>
          <Text style={styles.aboutText}>
            {" "}
            <Text style={{ fontWeight: "bold" }}>SPRY ROCKS</Text> is a rapidly
            developing European company with headquarter at Kharkiv, Ukraine.{" "}
          </Text>
        </View>
        <View>
          <Text style={styles.aboutText}>
            {" "}
            Our company was founded in 2014 and although we are a young team we
            have a lot of successful projects and satisfied customers.
          </Text>
        </View>
        <View>
          <Text style={styles.aboutText}>
            {" "}
            In work with every particular customer, the main philosophy is to
            establish and keep good relations.
          </Text>
        </View>
        <View>
          <Text style={styles.aboutText}>
            {" "}
            We develop innovative solutions that not only contribute to the
            success of our customer's businesses but also give them a
            competitive market advantage.{" "}
          </Text>
        </View>
        <View>
          <Text style={styles.aboutText}>
            {" "}
            Because your success is our success too!{" "}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  aboutTitle: {
    margin: 20,
    fontSize: 18,
    lineHeight: 26,
    color: "#000000",
  },
  aboutTextContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  aboutText: {
    textAlign: "justify",
    fontSize: 18,
    lineHeight: 26,
    color: "#000000",
  },
});
