import { collection, onSnapshot } from "firebase/firestore";
import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import Button from "../components/button";
import ItemProduto from "../components/itemProductList";
import Line from "../components/lineSeparator";
import { db } from "../config/firebase";
import { productConverter } from "../model/Product";

const Produtos = ({ navigation }) => {
  // const DATA = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     title: "Produto 2",
  //     quantity: 10,
  //     value: "100,99",
  //   },
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
  //     title: "Produto 1",
  //     quantity: 10,
  //     value: "10,00",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "Produto 1",
  //     quantity: 10,
  //     value: "10,50",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d73",
  //     title: "Produto 3",
  //     quantity: 10,
  //     value: "12,90",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d74",
  //     title: "Produto 1",
  //     quantity: 10,
  //     value: "12,90",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d75",
  //     title: "Produto 1",
  //     quantity: 10,
  //     value: "12,90",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d76",
  //     title: "Produto 1",
  //     quantity: 10,
  //     value: "12,90",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d77",
  //     title: "Produto 1",
  //     quantity: 10,
  //     value: "12,90",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d78",
  //     title: "Produto 1",
  //     quantity: 10,
  //     value: "12,90",
  //   },
  // ];

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [Data, setData] = useState([]);

  useEffect(() => {
    loadItens();
  }, []);


  const loadItens = async () => {
    try {
      // const DATA = await getDocs(collection(db, "produtos"));
      // const newItens = [];
      // DATA.forEach((doc) => {
      //   const newProduct = productConverter.fromFirestore(doc);
      //   newItens.push(newProduct);
      // });
      // setFilteredData(newItens);
      // setData(newItens);
      const unsub = onSnapshot(collection(db, "produtos"), (DATA) => {
        const newItens = [];
        DATA.forEach((doc) => {
          const newProduct = productConverter.fromFirestore(doc);
          newItens.push(newProduct);
        });
        setFilteredData(newItens);
        setData(newItens);
      });
    } catch (error) {
      alert("Não foi possível carregar os itens!");
      console.log(error);
    }
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = Data.filter(function (item) {
        if (item.title) {
          const itemData = item.title.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        }
      });
      setFilteredData(newData);
    } else {
      setFilteredData(Data);
    }
    setSearch(text);
  };

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
            onChangeText={(text) => searchFilter(text)}
            value={search}
          />
        </View>
        <View style={styles.list}>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => <ItemProduto item={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={<Line />}
          />
        </View>
      </View>
      <View style={{ position: "absolute", bottom: -5, width: "80%" }}>
        <Button
          buttonTitle={"+ Novo produto"}
          onPress={() => navigation.jumpTo("NovoProduto")}
        />
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
  list: {
    height: "85%",
  },
});

export default Produtos;
