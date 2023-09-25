import { CaretRight } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import ItemVendaModal from "./itemSaleModal";

const ItemVenda = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.clientName}</Text>
        <View style={styles.itemContent}>
          <Text style={styles.itemText}>{item.date}</Text>
          <Text style={styles.itemText}>R${item.value}</Text>
        </View>
      </View>
      <View style={{ alignSelf: "center" }}>
        <TouchableOpacity onPress={() => this[RBSheet + item].open()}>
          <CaretRight size={24} />
        </TouchableOpacity>

        <RBSheet
          ref={(ref) => {
            this[RBSheet + item] = ref;
          }}
          height={474}
          openDuration={250}
          customStyles={{
            container: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              alignItems: "center",
            },
          }}
        >
          <ItemVendaModal item={item} />
        </RBSheet>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent:"space-between"
  },
  item: {
    gap: 5,
  },
  itemContent: {
    flexDirection: "row",
    gap: 20,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  itemText: {
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

export default ItemVenda;
