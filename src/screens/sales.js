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


const Vendas = ({navigation}) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      clientName: "Cliente 1",
      date: "10/10/2023",
      value: "100,99",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
      clientName: "Cliente 2",
      date: "10/10/2023",
      value: "100,99",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      clientName: "Cliente 3",
      date: "10/10/2023",
      value: "100,99",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      clientName: "Cliente 1",
      date: "10/10/2023",
      value: "100,99",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      clientName: "Cliente 1",
      date: "10/10/2023",
      value: "100,99",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d75",
      clientName: "Cliente 1",
      date: "10/10/2023",
      value: "100,99",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d76",
      clientName: "Cliente 1",
      date: "10/10/2023",
      value: "100,99",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d77",
      clientName: "Cliente 1",
      date: "10/10/2023",
      value: "100,99",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d78",
      clientName: "Cliente 1",
      date: "10/10/2023",
      value: "100,99",
    },
  ];

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [Data, setData] = useState([]);

  useEffect(() => {
        setFilteredData(DATA);
        setData(DATA);
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = Data.filter(
        function (item) {
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
        <ScrollView style={styles.list}>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => <ItemVenda item={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={<Line />}
          />
        </ScrollView>
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
