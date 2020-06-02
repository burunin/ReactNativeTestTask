import React, { useContext, useState } from "react";
import { Link } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/Header";
import { StepContext } from "../../context/stepContext";

export const YourHobbies = () => {
  const stepper: any = useContext(StepContext);
  const [checked, setCheck] = useState(false);
  const [fifthStepState, setState] = useState({
    freeTimeSpendInfo: "",
    questionsToUs: "",
    terms: "",
  });

  const finish = () => {
    stepper.finishFifth(fifthStepState);
  };

  const handleInputFreeTime = (value: string) => {
    setState({
      ...fifthStepState,
      freeTimeSpendInfo: value,
    });
  };

  const handleInputToUs = (value: string) => {
    setState({
      ...fifthStepState,
      questionsToUs: value,
    });
  };
  return (
    <>
      <Header />
      <View style={styles.fillTheForm}>
        <Text style={styles.fillTheFormText}>Fill the form</Text>
        <Text style={styles.fillTheFormSubText}>
          area with <Text style={styles.valid}>*</Text> must be filled
        </Text>
      </View>
      <View style={styles.formTitleWrapper}>
        <Text style={styles.formTitle}>Your Hobbies</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.inputLabel}>How you spend your free time?</Text>
        <TextInput
          style={styles.inputFormLg}
          numberOfLines={4}
          placeholder="hobbies, sport, etc..."
          onChangeText={(text) => handleInputFreeTime(text)}
          value={fifthStepState.freeTimeSpendInfo}
        />
        <View style={styles.formTitleWrapper2}>
          <Text style={styles.formTitle2}>Additional information</Text>
        </View>
        <Text style={styles.inputLabel2}>Have any questions for us?</Text>
        <TextInput
          style={styles.inputFormLg}
          numberOfLines={4}
          placeholder="Be in touch :)"
          onChangeText={(text) => handleInputToUs(text)}
          value={fifthStepState.questionsToUs}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.rect} onPress={() => setCheck(!checked)}>
            {checked ? <View style={styles.checkedrect} /> : null}
          </TouchableOpacity>

          <Text style={styles.inputLabel3}>
            I consent to the processing of personal data
            <Text style={styles.valid}>*</Text>
          </Text>
        </View>
        {!checked ? (
          <Link to={"/YourHobbies"} style={styles.btn2}>
            <Text style={styles.btnText}>Next</Text>
          </Link>
        ) : (
          <Link to={"/About"} style={styles.btn} onPress={() => finish()}>
            <Text style={styles.btnText}>Next</Text>
          </Link>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fillTheForm: {
    position: "absolute",
    top: "24%",
    width: "100%",
    alignItems: "center",
  },
  fillTheFormText: {
    alignItems: "center",
    fontFamily: "BebasNeue",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 48,
    color: "#000000",
  },
  fillTheFormSubText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 10,
    lineHeight: 12,
  },
  valid: {
    color: "red",
  },
  formTitleWrapper: {
    position: "absolute",
    top: "35%",
  },
  formTitle: {
    textTransform: "uppercase",
    marginLeft: 20,
    fontFamily: "BebasNeue-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 22,
    lineHeight: 26,
    color: "#7A4ED9",
  },
  formTitleWrapper2: {
    position: "absolute",
    top: "55%",
  },
  formTitle2: {
    textTransform: "uppercase",
    marginTop: -15,
    fontFamily: "BebasNeue-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 22,
    lineHeight: 26,
    color: "#7A4ED9",
  },
  form: {
    position: "absolute",
    top: "40%",
    left: "5%",
    width: "100%",
  },
  inputLabel: {
    marginTop: 5,
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
  },
  inputLabel2: {
    marginTop: 45,
    fontFamily: "Roboto-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
  },
  inputLabel3: {
    marginTop: 25,
    fontFamily: "BebasNeue-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    textTransform: "uppercase",
    paddingLeft: 10,
  },
  inputFormLg: {
    height: "35%",
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
    width: "90%",
    borderRadius: 3,
  },
  btn: {
    backgroundColor: "#7A4ED9",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    width: "90%",
    textAlign: "center",
    top: "15%",
  },
  btn2: {
    backgroundColor: "#CCC",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
    marginTop: 15,
    width: "90%",
    textAlign: "center",
    top: "15%",
  },
  btnText: {
    color: "#FFF",
    paddingTop: 2,
    paddingBottom: 2,
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 28,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -15,
  },
  rect: {
    paddingRight: 10,
    marginTop: 22,
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center",
    justifyContent: "center",
  },
  checkedrect: {
    marginLeft: 10,
    width: 14,
    height: 14,
    // borderRadius: 7,
    backgroundColor: "#794F9B",
  },
});

export default YourHobbies;
