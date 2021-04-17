import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { Button, Overlay } from "react-native-elements";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import CartContext from "../../provider/CartProvider";
import styles from "./styles";
const { height, width } = Dimensions.get("window");
import axios from "axios";
function index({ navigation, route }) {
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(CartContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [tableNo, setTableNo] = useState(null);
  const [overlayVisible, setOverlay] = useState(false);
  const [loading, setLoading] = useState(false);
  let totalprice = 0;

  cart.forEach((item) => {
    totalprice += item.totalPrice;
  });

  const onScanPressed = async () => {
    setLoading(true);
    await axios
      .put(
        `https://foodorderingapi.herokuapp.com/REST_FOOD/api/orders/updateTotalPrice.php`
      )
      .then(setLoading(false), navigation.navigate("Scan"));
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Table Scanned Succesfully`);
    setTableNo(data);
    console.warn(tableNo);
  };

  const renderCart = ({ item }) => (
    <View
      style={{
        paddingVertical: 20,
        marginHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "black",
        marginVertical: 10,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          // justifyContent: "space-between",
        }}
      >
        <Image
          source={{ uri: item.photo_url }}
          style={{
            height: 50,
            width: 60,
            borderRadius: 25,
            marginHorizontal: 20,
            elevation: 15,
            resizeMode: "cover",
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            textAlign: "left",
            fontWeight: "700",
            textAlignVertical: "center",
            marginLeft: 13,
          }}
        >
          {item.name} * {item.quantity}
        </Text>
        <Text
          style={{
            textAlign: "right",
            fontWeight: "700",
            marginLeft: 30,
            color: "grey",
            textAlignVertical: "center",
          }}
        >
          💸 {item.totalPrice} Birr.
        </Text>
      </View>
    </View>
  );

  return (
    <View>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={cart}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        renderItem={({ item }) => renderCart({ item })}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatListCont}
        ListFooterComponent={
          <View>
            <Text
              style={{
                textAlign: "right",
                marginHorizontal: 20,
                fontWeight: "700",
                fontSize: 18,
              }}
            >
              Total Price = {totalprice} birr.
            </Text>
          </View>
        }
      />

      <Button
        title="Scan Table QR"
        type="solid"
        buttonStyle={{
          marginHorizontal: 15,
          height: 50,
          backgroundColor: "orange",
          color: "black",
        }}
        containerStyle={{
          marginVertical: 10,
        }}
        onPress={() => onScanPressed()}
      ></Button>
      {loading && (
        <View style={styles.orderLoading}>
          <ActivityIndicator color="green" size={32} />
          <Text style={styles.title}>Please wait....</Text>
        </View>
      )}
    </View>
  );
}

export default index;
