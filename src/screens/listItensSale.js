import { FlatList, StyleSheet, View } from "react-native";
import Line from "../components/lineSeparator";

const listaItensVenda = ({ navigation, route }) => {

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={route.params.paramKey}
            renderItem={({ item }) => <Text style={styles.title}>{item.label}</Text>}
            keyExtractor={(item) => item.value}
            ItemSeparatorComponent={<Line />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundcolor: "#fff",
  },
  container: {
    backgroundcolor: "#E5E3E3",
    width: "80%",
    marginTop: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 7,
  },
  list: {
    height: "85%",
  },
});

export default listaItensVenda;
