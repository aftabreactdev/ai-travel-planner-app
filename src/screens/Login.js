import React from "react";
import { Text, View, StyleSheet, StatusBar, useColorScheme } from "react-native";

const Login = () => {
  const isDarkMode = useColorScheme() === "light";

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? "#000" : "#fff" }
    ]}>
      <StatusBar hidden={true} />
      <Text style={isDarkMode ? styles.whitetext : styles.darktext}>
        Instagram
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  whitetext: {
    color: "#ffffff"
  },
  darktext: {
    color: "#000000"
  }
});

export default Login;
