import React from "react";
import { View } from "react-native";

const Line = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.38)",
        alignSelf: "stretch",
        marginBottom: 15,
        marginTop: 15,
      }}
    ></View>
  );
};

export default Line;
