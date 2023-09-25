import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Line from "../components/lineSeparator";
import { db } from "../config/firebase";

const Home = () => {

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalProductsValue, setTotalProductsValue] = useState(0);
  const [totalSalesCurrentMonth, setTotalSalesCurrentMonth] = useState(0);
  const [totalSalesValue, setTotalSalesValue] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    try {
      const product = onSnapshot(collection(db, "produtos"), (DATA) => {
        DATA.forEach((doc) => {
          setTotalProducts((prev) => parseInt(prev + doc.data().quantity));
          setTotalProductsValue((prev) => prev + (doc.data().quantity * doc.data().price));
          console.log(totalProductsValue);
          });
        });
        const sales = onSnapshot(collection(db, "vendas"), (DATA) => {
          DATA.forEach((doc) => {
            setTotalSalesValue((prev) => prev + doc.data().value);
            setTotalSalesCurrentMonth((prev) => prev + doc.data().value)
        });
      });

    } catch (error) {
      alert("Não foi possível carregar os itens!");
      console.log(error);
    }
  };

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Produtos em estoque",
      content: totalProducts,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
      title: "Valor total em estoque",
      content: "R$ " + totalProductsValue,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Produtos vendidos",
      content: "10",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Total de vendas",
      content: "R$ " + totalSalesValue,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "Vendas no mês",
      content: "R$" + totalSalesCurrentMonth,
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
    alignItems: "center",
    marginTop: 15,
  },
  item: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  itemText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
});

export default Home;
