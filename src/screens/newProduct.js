import { StyleSheet, View } from "react-native";
import Input from "../components/Input";
import Button from "../components/button";

const NovoProduto = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Input
            title={"Nome do produto"}
            placeholder="Digite aqui..."
            inputMode="text"
          />
        </View>
        <View>
          <Input
            title={"Código do produto"}
            placeholder="Digite aqui..."
            inputMode="text"
          />
        </View>
        <View>
          <Input
            title={"Custo unitário"}
            placeholder="R$"
            inputMode="decimal"
          />
        </View>
        <View>
          <Input
            title={"Preço de venda"}
            placeholder="R$"
            inputMode="decimal"
            />
        </View>
        <View>
          <Input 
          title={"Quantidade"} 
          placeholder="Digite aqui..." 
          inputMode="numeric"
          />
        </View>

        <Button
          buttonTitle={"Cadastrar produto"}
          onPress={() => navigation.jumpTo("Produtos")}
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
});

export default NovoProduto;
