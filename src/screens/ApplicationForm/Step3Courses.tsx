import React, { useContext, useState } from "react";
import { Link } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../../components/Header";
import { StepContext } from "../../context/stepContext";

export const Courses = () => {
  const stepper: any = useContext(StepContext);
  const [thirdStepState, setState] = useState({
    courseEducationalOrganization: "",
    course: "",
    courseFinishDate: "",
  });
  const finish = () => {
    stepper.finishThird(thirdStepState);
  };

  const handleInputCursOrg = (value: string) => {
    setState({
      ...thirdStepState,
      courseEducationalOrganization: value,
    });
  };

  const handleInputCourse = (value: string) => {
    setState({
      ...thirdStepState,
      course: value,
    });
  };

  const handleInputCursFinishDate = (value: string) => {
    setState({
      ...thirdStepState,
      courseFinishDate: value,
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
        <Text style={styles.formTitle}>Courses</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.inputLabel}>Educational Organization</Text>
        <TextInput
          style={styles.inputForm}
          placeholder="enter name here"
          onChangeText={(text) => handleInputCursOrg(text)}
          value={thirdStepState.courseEducationalOrganization}
        />
        <Text style={styles.inputLabel}>Course</Text>
        <TextInput
          style={styles.inputForm}
          placeholder="enter name here"
          onChangeText={(text) => handleInputCourse(text)}
          value={thirdStepState.course}
        />
        <Text style={styles.inputLabel}>Finish Date</Text>
        <TextInput
          style={styles.inputForm}
          keyboardType="number-pad"
          placeholder="mm.yyyy"
          onChangeText={(text) => handleInputCursFinishDate(text)}
          value={thirdStepState.courseFinishDate}
        />

        <Link
          to={"/WorkExperience"}
          style={styles.btn}
          onPress={() => finish()}
        >
          <Text style={styles.btnText}>Next</Text>
        </Link>
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
  inputForm: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    height: 40,
    borderColor: "#000",
    borderWidth: 2,
    width: "90%",
    borderRadius: 3,
  },
  btn: {
    backgroundColor: "#7A4ED9",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
    marginTop: 15,
    width: "90%",
    textAlign: "center",
    top: "95%",
  },
  btnText: {
    color: "#FFF",
    paddingTop: 2,
    paddingBottom: 2,
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 28,
  },
});

export default Courses;
