import { EnvelopeSimple, LockKey, User } from "phosphor-react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { app } from "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Login = ({ navigation }) => {
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });

  const handleLogin = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, usuario.email, usuario.senha)
      .then((credenciais) => {
        alert("Usuário autenticado");
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert("Não possível autenticar");
        console.log(error);
      });
      // navigation.navigate("Home");
  };

  const handleEmail = (email) => {
    setUsuario((prev) => ({ ...prev, email }));
  };

  const handleSenha = (senha) => {
    setUsuario((prev) => ({ ...prev, senha }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <User size={45} color="#727272" />
        <View style={styles.inputView}>
          <EnvelopeSimple size={24} />
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#727272"
            inputMode="email"
            onChangeText={handleEmail}
          />
        </View>
        <View style={styles.inputView}>
          <LockKey size={24} />
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Senha"
            placeholderTextColor="#727272"
            onChangeText={handleSenha}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ color: "#141414", fontWeight: "bold", fontSize: 16 }}>
            Entrar
          </Text>
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
    width: "100%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 42,
    backgroundColor: "#E5E3E3",
    borderRadius: 40,
  },
});

export default Login;
