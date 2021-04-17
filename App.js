import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import Catagories from "./components/Catagories";
import Home from "./components/Home";
import Ingredient from "./components/Ingredient";
import Order from "./components/Order";
import Recipies from "./components/Recipies";
import Scan from "./components/Scan";
import recipeQuantity from "./components/recipeQuantity";
import orderSubmited from "./components/orderSubmited";
import CartContext from "./provider/CartProvider";
import About from "./components/About";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{
        headerShown: true,
      }}
      drawerStyle={{
        backgroundColor: "#f6f6f6",
        width: Dimensions.get("window").width * 0.755,
        height: "100%",
      }}
      // overlayColor="white"
      initialRouteName={"Home"}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "orange",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
          },
          headerTitleAlign: "center",
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={About}
        options={{
          title: "About",
          headerStyle: {
            backgroundColor: "orange",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
          },
          headerTitleAlign: "center",
        }}
      />
    </Drawer.Navigator>
  );
}
const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="drawer">
          <Stack.Screen
            name="drawer"
            options={{
              headerShown: false,
            }}
            component={DrawerRoutes}
          />

          <Stack.Screen
            name="Recipe"
            component={Recipies}
            options={{
              title: "choose recipes",
              headerStyle: {
                backgroundColor: "orange",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "600",
                fontSize: 18,
              },
              headerTitleAlign: "center",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Quantity"
            component={recipeQuantity}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Order"
            component={Order}
            options={{
              title: "Cart",
              headerStyle: {
                backgroundColor: "orange",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "600",
                fontSize: 16,
              },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Scan"
            component={Scan}
            options={{
              title: "Scan",
              headerStyle: {
                backgroundColor: "orange",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "600",
                fontSize: 18,
              },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="OrderSubmitted"
            component={orderSubmited}
            options={{
              title: "Order Submitted",
              headerStyle: {
                backgroundColor: "orange",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "600",
                fontSize: 18,
              },
              headerTitleAlign: "center",
            }}
          />

          <Stack.Screen
            name="Category"
            component={Catagories}
            options={{
              title: "Recipe Categories",
              headerStyle: {
                backgroundColor: "orange",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "600",
                fontSize: 18,
              },
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
};

export default App;
