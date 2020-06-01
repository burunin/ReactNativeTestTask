import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import AppContainer from "./src/navigation/AppNavigation";
// import configureStore from "./src/redux/store";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppContainer />
    </View>
  );
};

export default App;
