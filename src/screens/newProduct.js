import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Input from "../components/Input";
import Button from "../components/button";
import { db } from "../config/firebase";
import { Product, productConverter } from "../model/Product";

const NovoProduto = ({ navigation }) => {
  const [product, setProduct] = useState();

  const handleProductSubmit = async () => {
    try {
      checkValidateInput();
      const productRef = doc(db, "produtos", product.id)
                        .withConverter(productConverter);
      await setDoc(
        productRef,
        new Product(
          product.id,
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
  
  const checkValidateInput = () => {
    if (!product.id.trim()) {
      alert('Código do produto precisa ser informado!');
      return new Error('Código do produto precisa ser informado!');
    }
    if (!product.title.trim()) {
      alert('Nome do produto precisa ser informado!');
      return new Error('Nome do produto precisa ser informado!');
    }
    if (!product.coast.trim()) {
      alert('Custo unitário do produto precisa ser informado!');
      return new Error('Custo unitário do produto precisa ser informado!');
    }
    if (!product.price.trim()) {
      alert('Preço do produto precisa ser informado!');
      return new Error('Preço do produto precisa ser informado!');
    }
    if (!product.quantity.trim()) {
      alert('Quantidade do produto precisa ser informado!');
      return new Error('Quantidade do produto precisa ser informado!');
    }
  };
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container}>
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

        <Button buttonTitle={"Cadastrar produto"} onPress={handleProductSubmit} />
      </ScrollView>
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
