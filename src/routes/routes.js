import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import "react-native-gesture-handler";
import Dashboard from "../screens/dashboard";
import Home from "../screens/home";
import Login from "../screens/login";
import NovoProduto from "../screens/newProduct";
import NovaVenda from "../screens/newSale";
import Produtos from "../screens/products";
import Register from "../screens/register";
import Vendas from "../screens/sales";
import AddItens from "../screens/addItens";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#D3D2D2",
            width: 167,
          },
          drawerLabelStyle: {
            color: "#000",
            fontSize: 20,
          },
          headerStyle: {
            height: 88,
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 36,
          },
          headerTitleAlign: "center",
          headerTransparent: false,
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
        <Drawer.Screen
          name="Cadastro"
          component={Register}
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Produtos" component={Produtos} />
        <Drawer.Screen
          name="NovoProduto"
          component={NovoProduto}
          options={{
            headerTitle: "Produtos",
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
        <Drawer.Screen
          name="NovaVenda"
          component={NovaVenda}
          options={{
            headerTitle: "Vendas",
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
        <Drawer.Screen name="Vendas" component={Vendas} />
        <Drawer.Screen
          name="AddItens"
          component={AddItens}
          options={{
            headerTitle: "Itens",
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
