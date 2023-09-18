import { CaretRight } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";

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
      <View style={{alignSelf:"center"}}>
        <CaretRight size={24} />
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
});

export default ItemVenda;
