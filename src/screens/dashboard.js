import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.jumpTo("Login")}
      >
        <Text style={styles.buttonTitle}>
          Entre
        </Text>
      </TouchableOpacity>
      <Text style={{ color: "#E5E3E3" }}>ou</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.jumpTo("Cadastro")}
      >
        <Text style={styles.buttonTitle}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#000",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 42,
    backgroundColor: "#E5E3E3",
    borderRadius: 40,
  },
  buttonTitle: {
    color: "#141414",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Dashboard;
