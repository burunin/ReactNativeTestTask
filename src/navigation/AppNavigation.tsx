import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/Welcome"
// import About from "../screens/About"
// import PersonalInfo from "../screens/Application/PersonalInfo"

export type StackParamList = {
    Welcome: undefined,
    PersonalInfo: undefined,
    Education: undefined,
    Courses: undefined,
    WorkExperience: undefined,
    YourHobbies: undefined, 
    About: undefined
}

const Stack = createStackNavigator<StackParamList>();

function App() {
    const headerOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        {/* <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
        />
        <Stack.Screen
          name="About"
          component={About}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
