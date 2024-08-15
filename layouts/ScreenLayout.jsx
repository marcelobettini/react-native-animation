import { View, Text } from "react-native";
import React from "react";

const ScreenLayout = ({ children }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {children}
    </View>
  );
};

export default ScreenLayout;
