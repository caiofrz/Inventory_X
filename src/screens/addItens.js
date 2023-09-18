import { MagnifyingGlass } from "phosphor-react-native";
import { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import Button from "../components/button";

const AddItens = ({ navigation }) => {
  const DATA = [
    {
      label: "Produto 1",
      value: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    },
    {
      label: "Produto 1",
      value: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
    },
    {
      label: "Produto 1",
      value: "58694a0f-3da1-471f-bd96-145571e29d72",
    },
    {
      label: "Produto 1",
      value: "58694a0f-3da1-471f-bd96-145571e29d73",
    },
    {
      label: "Produto 1",
      value: "58694a0f-3da1-471f-bd96-145571e29d74",
    },
    {
      label: "Produto 1",
      value: "58694a0f-3da1-471f-bd96-145571e29d75",
    },
    {
      label: "Produto 1",
      value: "58694a0f-3da1-471f-bd96-145571e29d76",
    },
    {
      label: "Produto 1",
      value: "58694a0f-3da1-471f-bd96-145571e29d77",
    },
    {
      label: "Produto 1",
      value: "58694a0f-3da1-471f-bd96-145571e29d78",
    },
  ];

  const [itens, setItens] = useState({ selectedProducts: [] });

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
          />
        </View>
        <ScrollView style={styles.list}>
          <SelectMultiple
            items={DATA}
            selectedItems={itens.selectedProducts}
            onSelectionsChange={onSelectionsChange}
          />
        </ScrollView>
      </View>
      <View style={{ position: "absolute", bottom: -20, width: "80%" }}>
        <Button
          buttonTitle={"Finalizar"}
          onPress={() => navigation.jumpTo("Vendas")}
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
    height: "80%",
  },
});

export default AddItens;
