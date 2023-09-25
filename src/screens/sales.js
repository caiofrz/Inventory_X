import { MagnifyingGlass } from "phosphor-react-native";
import {
    FlatList,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
} from "react-native";
import Button from "../components/button";
import ItemVenda from "../components/itemSaleList";
import Line from "../components/lineSeparator";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { saleConverter } from "../model/Sale";


const Vendas = ({navigation}) => {

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [Data, setData] = useState([]);

  useEffect(() => {
    loadItens();
  }, []);

  const loadItens = async () => {
    try {
      const unsub = onSnapshot(collection(db, "vendas"), (DATA) => {
        const newItens = [];
        DATA.forEach((doc) => {
          const newSale = saleConverter.fromFirestore(doc);
          newItens.push(newSale);
          console.log(newSale.id);
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
      const newData = Data.filter(
        function (item) {
          if (item.clientName) {
            const itemData = item.clientName.toUpperCase();
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
            renderItem={({ item }) => <ItemVenda item={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={<Line />}
          />
        </View>
      </View>
      <View style={{ position: "absolute", bottom: -20, width: "80%" }}>
        <Button buttonTitle={"+ Nova venda"} onPress={() => navigation.jumpTo("NovaVenda")} />
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
    height: "80%",
  },
});

export default Vendas;
