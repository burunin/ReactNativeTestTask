import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/Welcome";
import { StepState } from "../context/stepState";
import PersonalInfo from "../screens/ApplicationForm/Step1PersonalInfo";
import Education from "../screens/ApplicationForm/Step2Education"
import Courses from "../screens/ApplicationForm/Step3Courses"
import WorkExperience from "../screens/ApplicationForm/Step4WorkExperience"
import YourHobbies from "../screens/ApplicationForm/Step5YourHobbies"
import About from "../screens/About";

export type StackParamList = {
  Welcome: undefined;
  PersonalInfo: undefined;
  Education: undefined;
  Courses: undefined;
  WorkExperience: undefined;
  YourHobbies: undefined;
  About: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  const headerOptions = {
    headerShown: false,
  };
  return (
    <StepState>
      <NavigationContainer>
        <Stack.Navigator screenOptions={headerOptions}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
          <Stack.Screen name="Education" component={Education} />
          <Stack.Screen name="Courses" component={Courses} />
          <Stack.Screen name="WorkExperience" component={WorkExperience} />
          <Stack.Screen name="YourHobbies" component={YourHobbies} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </StepState>
  );
}