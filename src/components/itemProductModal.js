import { Pencil, Trash } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Line from "./lineSeparator";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";



const ItemProdutoModal = ({ item }) => {

  const deleteProduct = async () =>{
    await deleteDoc(doc(db, "produtos", item.id));
}

  return (
    <View style={styles.containerModal}>
      <Text style={styles.itemTitleModal}>{item.title}</Text>
      <View style={styles.itensModal}>
        <View style={styles.itemModal}>
          <Text style={styles.itemTitle}>Código</Text>
          <Text style={styles.itemTitle}>{item.id}</Text>
        </View>
        <Line />
        <View style={styles.itemModal}>
          <Text style={styles.itemTitle}>Estoque</Text>
          <Text style={styles.itemTitle}>{item.quantity}</Text>
        </View>
        <Line />
        <View style={styles.itemModal}>
          <Text style={styles.itemTitle}>Custo Unitário</Text>
          <Text style={styles.itemTitle}>R${item.coast}</Text>
        </View>
        <Line />
        <View style={styles.itemModal}>
          <Text style={styles.itemTitle}>Preço de venda</Text>
          <Text style={styles.itemTitle}>R${item.price}</Text>
        </View>
        <Line />
        <View style={styles.itemModal}>
          <TouchableOpacity 
          style={styles.icon}
          onPress={deleteProduct}>
            <Trash size={30} />
            <Text>Excluir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Pencil size={30} />
            <Text>Atualizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  itemTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  containerModal: {
    width: "80%",
    gap: 14,
  },
  itensModal: {
    gap: 14,
  },
  itemTitleModal: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    padding: 15,
  },
  itemModal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    alignItems: "center",
  },
});

export default ItemProdutoModal;
