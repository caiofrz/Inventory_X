import { MagnifyingGlass } from "phosphor-react-native";
import { FlatList, ScrollView, StyleSheet, TextInput, View } from "react-native";
import Button from "../components/button";
import ItemProduto from "../components/itemProductList";
import Line from "../components/lineSeparator";

const Produtos = ({navigation}) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Produto 1",
      quantity: 10 ,
      value: "100,99"
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
        title: "Produto 1",
        quantity: 10,
        value: "10,00"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Produto 1",
      quantity: 10,
      value: "10,50"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "Produto 1",
      quantity: 10,
      value: "12,90"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      title: "Produto 1",
      quantity: 10,
      value: "12,90"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d75",
      title: "Produto 1",
      quantity: 10,
      value: "12,90"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d76",
      title: "Produto 1",
      quantity: 10,
      value: "12,90"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d77",
      title: "Produto 1",
      quantity: 10,
      value: "12,90"
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d78",
      title: "Produto 1",
      quantity: 10,
      value: "12,90"
    },
  ];
  
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.inputView}>
          <MagnifyingGlass size={24} />
          <TextInput
            style={styles.inputText}
            placeholder="Pesquisar"
            placeholderTextColor="#000"
            inputMode="text"
          />
        </View>
        <ScrollView style={styles.list}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <ItemProduto item={item}/>
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={<Line />}
          />
        </ScrollView>
      </View>
      <View style={{ position:"absolute", bottom:-20, width: "80%"}}>
        <Button buttonTitle={"+ Novo produto"} onPress={() => navigation.jumpTo("NovoProduto")}/>
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
  inputView: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#E5E3E3",
    borderRadius: 40,
    height: 50,
    marginBottom: 20,
    padding: 12,
    gap: 16,
  },
  inputText: {
    color: "#000",
    width: "100%",
  },
  list:{
    height: "80%"
  }
});

export default Produtos;
