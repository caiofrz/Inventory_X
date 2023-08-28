import { CaretLeft, EnvelopeSimple, LockKey } from "phosphor-react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = () => {

    return (
        <View style={styles.container}>
            {/* <View style={styles.head}>
                <CaretLeft color={"#FFF"} size={24}/>
                <Text style={styles.title}>Login</Text>
            </View> */}
            <View style={styles.form}>
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
                    <Text style={{color: "#141414"}}>Login</Text>
                </TouchableOpacity>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    head:{
        flexDirection: "row",
        gap: 80,
        marginTop: 40,
        marginLeft: 32,
    },
    title:{
        fontWeight: "bold",
        fontSize: 20,
        color:"#FFF",
    },
    form:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
    },
    inputView:{
        width:"80%",
        flexDirection: "row",
        backgroundColor:"#111",
        borderRadius:40,
        height:50,
        marginBottom:20,
        padding:12,
        color: 'white',
        gap: 16
    },
    inputText:{
       color:"#fff"
    },
    button:{
        width:"80%",
        height:52,
        backgroundColor:"#E5E3E3",
        borderRadius:40,
        padding:24,
    }
})

export default Login;