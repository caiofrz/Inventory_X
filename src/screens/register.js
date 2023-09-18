import {
    EnvelopeSimple,
    LockKey,
    User
} from "phosphor-react-native";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputView}>
          <User size={24} />
          <TextInput
            style={styles.inputText}
            placeholder="Nome"
            placeholderTextColor="#727272"
          />
        </View>
        <View style={styles.inputView}>
          <EnvelopeSimple size={24} />
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#727272"
            inputMode="email"
          />
        </View>
        <View style={styles.inputView}>
          <LockKey size={24} />
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Senha"
            placeholderTextColor="#727272"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => alert("a")}>
          <Text style={{ color: "#141414", fontWeight:"bold", fontSize:16 }}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  inputView: {
    width: "80%",
    flexDirection: "row",
    backgroundColor: "#111",
    borderRadius: 40,
    height: 50,
    marginBottom: 20,
    padding: 12,
    color: "white",
    gap: 16,
  },
  inputText: {
    color: "#fff",
  },
  button: {
    justifyContent:"center",
    alignItems:"center",
    width: "80%",
    height: 42,
    backgroundColor: "#E5E3E3",
    borderRadius: 40,
  },
});

export default Register;
