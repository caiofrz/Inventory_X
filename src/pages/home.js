import { Button, StyleSheet, View } from "react-native";

const Home = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Button title="Login" onPress={() => navigation.jumpTo('Login')}></Button>
            <Button title="Cadastro" onPress={() => navigation.jumpTo('Cadastro')}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
});

export default Home;