import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import "react-native-gesture-handler";
import Dashboard from "./src/pages/dashboard";
import Home from "./src/pages/home";
import Login from "./src/pages/login";
import Register from "./src/pages/register";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
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
            fontWeight: "normal",
            fontSize: 36,
          },
          headerTitleAlign: "center",
          headerTransparent: false,
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Cadastro" component={Register} />
        <Drawer.Screen name="Produtos" component={Home} />
        <Drawer.Screen name="Vendas" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

