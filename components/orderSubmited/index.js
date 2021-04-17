import React, { useEffect, useState, useContext, Dimensions } from "react";
import { Overlay } from "react-native-elements";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import CartContext from "../../provider/CartProvider";
function index({ navigation, route }) {
  const { cart, setCart } = useContext(CartContext);
  let totalprice = 0;

  cart.forEach((item) => {
    totalprice += item.totalPrice;
  });

  const renderOrder = ({ item }) => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 7,
          width: "100%",
        }}
      >
        <Text
          style={{
            textAlign: "left",
            fontWeight: "700",
            marginLeft: 20,
            fontSize: 14,
          }}
        >
          {item.name} * {item.quantity}
        </Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: "grey",
          marginTop: 15,
          marginHorizontal: 10,
          opacity: 0.4,
        }}
      ></View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontWeight: "700" }}>
        Order Summary
      </Text>

      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={cart}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        renderItem={({ item }) => renderOrder({ item })}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatListCont}
        ListFooterComponent={
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                textAlign: "right",
                fontWeight: "700",
                color: "grey",
                marginRight: 20,
                fontSize: 12,
              }}
            >
              Total Price = {totalprice} Birr.
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: "grey",
                marginTop: 15,
                marginHorizontal: 10,
                opacity: 0.4,
              }}
            ></View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "600",
                marginVertical: 10,
              }}
            >
              Pay With
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableHighlight>
                <Image
                  style={styles.payIcon}
                  source={require("../../assets/cbe.png")}
                />
              </TouchableHighlight>
              <Image
                style={styles.payIcon}
                source={require("../../assets/amole.png")}
              />
              <Image
                style={styles.payIcon}
                source={require("../../assets/cbe.png")}
              />
              <Image
                style={styles.payIcon}
                source={require("../../assets/amole.png")}
              />
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: "grey",
                marginTop: 15,
                marginHorizontal: 10,
                opacity: 0.4,
              }}
            ></View>
            <View>
              <Button
                title="Back to home"
                type="outline"
                buttonStyle={{
                  // backgroundColor: "green",
                  width: "90%",
                  alignSelf: "center",
                  marginTop: 5,
                  color: "orange",
                  borderColor: "orange",
                  fontSize: 12,
                }}
                //  disabled={!scanned ? true : false}
                icon={
                  <Ionicons
                    name="chevron-back-sharp"
                    size={22}
                    color="orange"
                    style={{ marginLeft: 10 }}
                  />
                }
                iconLeft
                onPress={() => navigation.navigate("Home")}
              />
            </View>
          </View>
        }
        contentContainerStyle={{
          height: "70%",
          backgroundColor: "white",
          marginHorizontal: 10,
          elevation: 10,
          borderRadius: 10,
          paddingVertical: 10,
        }}
      />
    </View>
  );
}

export default index;
