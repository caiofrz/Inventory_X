import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropdownSelect from "react-native-input-select";
import Input from "../components/Input";
import Button from "../components/button";
import Line from "../components/lineSeparator";
import { db } from "../config/firebase";
import { Sale, saleConverter } from "../model/Sale";

const NovaVenda = ({ navigation, route }) => {
  const [sale, setSale] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const paymentMethodsOptions = [
    { label: "Cartão Débito", value: "Debito" },
    { label: "Cartão Crédito", value: "Credito" },
    { label: "Dinheiro", value: "Dinheiro" },
    { label: "Pix", value: "Pix" },
  ];

  const handleSaleSubmit = async () => {
    try {
      checkValidateInput();
      const saleRef = doc(collection(db, "vendas"))
                        .withConverter(saleConverter);
      await setDoc(
        saleRef,
        new Sale(
          sale.id,
          sale.clientName,
          new Date().getTime(),
          parseFloat(sale.value),
          paymentMethod,
          route.params.paramKey
        )
      );
      alert("Venda cadastrada!");
      navigation.jumpTo("Vendas");
    } catch (error) {
      alert("Venda não cadastrada!\nDados Inválidos!");
      console.log(error);
    }
  };


  const handleClientName = (clientName) => {
    setSale((prev) => ({ ...prev, clientName }));
  };
  const handleValue = (value) => {
    setSale((prev) => ({ ...prev, value }));
  };


  const checkValidateInput = () => {
    if (!sale.clientName.trim()) {
      alert('Nome do cliente precisa ser informado!');
      return new Error('Nome do cliente precisa ser informado!');
    }
    if (!sale.value.trim()) {
      alert('Valor da venda precisa ser informado!');
      return new Error('Valor da venda precisa ser informado!');
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Input
            title={"Nome do cliente"}
            placeholder="Digite aqui..."
            inputMode="text"
            onChangeText={handleClientName}
          />
        </View>
        <View>
          {/* <DatePicker
            format={"DD/MM/YYYY"}
            date={date}
            onDateChange={handleDate}
          /> */}
          {/* <DatePicker 
          mode="date"
          date={date} 
          onDateChange={handleDate} /> */}
        </View>
        <View>
          <Input 
          title={"Valor"} 
          placeholder="R$" 
          inputMode="decimal" 
          onChangeText={handleValue}
          />
        </View>
        <View>
          <Text style={styles.title}>Forma de pagamento</Text>
          <DropdownSelect
            placeholder="Forma de pagamento.."
            dropdownStyle={{
              height: 20,
              borderWidth: 0,
              backgroundColor: "#E5E3E3",
            }}
            options={paymentMethodsOptions}
            selectedValue={paymentMethod}
            onValueChange={(method) => setPaymentMethod(method)}
            primaryColor={"#141414"}
          />
          <Line />
        </View>
        <View>
          <Text style={styles.title}>Itens</Text>
          <Button
            buttonTitle={"Adicionar Itens"}
            onPress={() => navigation.jumpTo("AddItens")}
          />
          <Line />
        </View>

        <Button
          buttonTitle={"Cadastrar venda"}
          onPress={handleSaleSubmit}
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
  title: {
    color: "#000",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 7,
  },
});

export default NovaVenda;
