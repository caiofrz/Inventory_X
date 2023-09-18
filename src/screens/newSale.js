import { StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import Button from "../components/button";
import Line from "../components/lineSeparator";
import DatePicker from "react-native-date-picker";
import { useState } from "react";
import DropdownSelect from "react-native-input-select";

const NovaVenda = ({ navigation }) => {
  const [date, setDate] = useState({ date: "" });

  const changeDate = (valor) => {
    setDate({ date: valor });
  };

  const [paymentMethod, setPaymentMethod] = useState();

  const paymentMethodsOptions = [
    { label: "Cartão Débito", value: "Debito" },
    { label: "Cartão Crédito", value: "Credito" },
    { label: "Dinheiro", value: "Dinheiro" },
    { label: "Pix", value: "Pix" },
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Input
            title={"Nome do cliente"}
            placeholder="Digite aqui..."
            inputMode="text"
          />
        </View>
        <View>
          <Input
            title={"Data da venda"}
            placeholder="Digite aqui..."
            inputMode="text"
          />
          {/* <DatePicker
            format={"DD/MM/YYYY"}
            date={date.date}
            onDateChange={changeDate}
          /> */}
        </View>
        <View>
          <Input title={"Valor"} placeholder="R$" inputMode="decimal" />
        </View>
        <View>
          {/* <Input
            title={"Forma de pagamento"}
            placeholder="R$"
            inputMode="decimal"
          /> */}
          <Text style={styles.title}>Forma de pagamento</Text>
          <DropdownSelect
            placeholder="Forma de pagamento.."
            dropdownStyle={{
              height: 20,
              borderWidth: 0,
              backgroundColor: "#E5E3E3"
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
          onPress={() => navigation.jumpTo("Vendas")}
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
