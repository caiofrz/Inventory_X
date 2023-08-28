import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Line from "../components/lineSeparator";

const Dashboard = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Produtos em estoque",
      content: "10",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Produtos vendidos",
      content: "10",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Total de vendas",
      content: "R$ 1000,00",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "Vendas no mês",
      content: "R$ 1000,00",
    },
  ];

  const Item = ({ title, content }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
      <Text style={styles.itemText}>{content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.dashboardItens}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} content={item.content} />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={<Line />}
        />
    </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E3E3",
  },

  dashboardItens: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 37,
  },
  item: {
    flex: 1,
    alignItems: "center",
    gap: 7,
    width: "100%",
  },
  itemText: {
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "700",
    color: "#000",
    marginBottom: 10,
  },
});

export default Dashboard;
