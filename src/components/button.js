import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ buttonTitle, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={{ color: "#fff", textAlign: "center" }}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 32,
    backgroundColor: "#000",
    borderRadius: 40,
    padding: 5,
    alignSelf: "center"
  },

});

export default Button;
