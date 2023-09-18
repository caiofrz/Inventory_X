import { StyleSheet, Text, TextInput, View } from "react-native";
import Line from "./lineSeparator";

const Input = ({ title, ...props }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TextInput
        style={styles.inputView}
        {...props}
        placeholderTextColor="#000"
      />
      <Line />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 7,
  },
  inputView: {
    backgroundColor: "#E5E3E3",
    borderRadius: 40,
    width: "100%",
    padding: 7,
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Input;
