import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Input from "../components/Input";
import Button from "../components/button";
import { db } from "../config/firebase";
import { Product, productConverter } from "../model/Product";

const NovoProduto = ({ navigation }) => {
  const [product, setProduct] = useState();

  const handleProduct = async () => {
    try {
      const productRef = doc(db, "produtos", product.id)
                        .withConverter(productConverter);
      await setDoc(
        productRef,
        new Product(
          parseInt(product.id),
          product.title,
          parseFloat(product.coast),
          parseFloat(product.price),
          parseInt(product.quantity)
        )
      );
      alert("Produto cadastrado!");
      navigation.jumpTo("Produtos");
    } catch (error) {
      alert("Produto não cadastrado!\nDados Inválidos!");
      console.log(error);
    }
  };

  const handleId = (id) => {
    setProduct((prev) => ({ ...prev, id }));
  };
  const handleTitle = (title) => {
    setProduct((prev) => ({ ...prev, title }));
  };
  const handleCoast = (coast) => {
    setProduct((prev) => ({ ...prev, coast }));
  };
  const handlePrice = (price) => {
    setProduct((prev) => ({ ...prev, price }));
  };
  const handleQuantity = (quantity) => {
    setProduct((prev) => ({ ...prev, quantity }));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Input
            title={"Nome do produto"}
            placeholder="Digite aqui..."
            inputMode="text"
            onChangeText={handleTitle}
          />
        </View>
        <View>
          <Input
            title={"Código do produto"}
            placeholder="Digite aqui..."
            inputMode="text"
            onChangeText={handleId}
          />
        </View>
        <View>
          <Input
            title={"Custo unitário"}
            placeholder="R$"
            inputMode="decimal"
            onChangeText={handleCoast}
          />
        </View>
        <View>
          <Input
            title={"Preço de venda"}
            placeholder="R$"
            inputMode="decimal"
            onChangeText={handlePrice}
          />
        </View>
        <View>
          <Input
            title={"Quantidade"}
            placeholder="Digite aqui..."
            inputMode="numeric"
            onChangeText={handleQuantity}
          />
        </View>

        <Button buttonTitle={"Cadastrar produto"} onPress={handleProduct} />
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
});

export default NovoProduto;
