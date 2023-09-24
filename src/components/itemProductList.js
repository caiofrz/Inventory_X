import { CaretRight } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import ItemModal from "./modal";

const ItemProduto = ({ item }) => {
  // const showItem = ({item}) => {
  //   return (
  //     <View style={styles.containerModal}>
  //       <Text style={styles.itemTitleModal}>{item.title}</Text>
  //       <View style={styles.itensModal}>
  //         <View style={styles.itemModal}>
  //           <Text style={styles.itemTitle}>Código</Text>
  //           <Text style={styles.itemTitle}>{item.id}</Text>
  //         </View>
  //         <Line />
  //         <View style={styles.itemModal}>
  //           <Text style={styles.itemTitle}>Estoque</Text>
  //           <Text style={styles.itemTitle}>{item.quantity}</Text>
  //         </View>
  //         <Line />
  //         <View style={styles.itemModal}>
  //           <Text style={styles.itemTitle}>Custo Unitário</Text>
  //           <Text style={styles.itemTitle}>R${item.coast}</Text>
  //         </View>
  //         <Line />
  //         <View style={styles.itemModal}>
  //           <Text style={styles.itemTitle}>Preço de venda</Text>
  //           <Text style={styles.itemTitle}>R${item.price}</Text>
  //         </View>
  //         <Line />
  //         <View style={styles.itemModal}>
  //           <TouchableOpacity style={styles.icon}>
  //             <Trash size={30} />
  //             <Text>Excluir</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity style={styles.icon}>
  //             <Pencil size={30} />
  //             <Text>Atualizar</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemContent}>
          <Text style={styles.itemText}>{item.quantity} un</Text>
          <Text style={styles.itemText}>R${item.price}</Text>
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
          <ItemModal item={item} />
        </RBSheet>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
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

export default ItemProduto;
