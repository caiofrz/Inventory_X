import { collection, onSnapshot } from "firebase/firestore";
import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import Button from "../components/button";
import { db } from "../config/firebase";

const AddItens = ({ navigation }) => {

  const [itens, setItens] = useState({ selectedProducts: [] });
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [Data, setData] = useState([]);

  useEffect(() => {
    loadItens();
  }, []);

  const loadItens = async () => {
    try {
      const unsub = onSnapshot(collection(db, "produtos"), (DATA) => {
        const newItens = [];
        DATA.forEach((doc) => {
          const newProduct = {
            label: doc.data().title,
            value: doc.data().id,
          };
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
        if (item.label) {
          const itemData = item.label.toUpperCase();
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


  const onSelectionsChange = (selectedProducts) => {
    setItens({ selectedProducts });
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
          <SelectMultiple
            items={filteredData}
            selectedItems={itens.selectedProducts}
            onSelectionsChange={onSelectionsChange}
          />
        </View>
      </View>
      <View style={{ position: "absolute", bottom: -15, width: "80%" }}>
        <Button
          buttonTitle={"Finalizar"}
          onPress={() => navigation.jumpTo("NovaVenda", { 
            paramKey: itens.selectedProducts, 
          })}
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

export default AddItens;
