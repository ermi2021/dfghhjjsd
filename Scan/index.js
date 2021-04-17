import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { BarCodeScanner } from "expo-barcode-scanner";
import styles from "./styles";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import CartContext from "../../provider/CartProvider";

function index({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [tableNo, setTableNo] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Table Scanned Succesfully ${data}`);
    setTableNo(data);
    console.warn(tableNo);
  };

  const submitOrder = async () => {
    await axios
      .put(
        `https://foodorderingapi.herokuapp.com/REST_FOOD/api/orders/updateTableNumber.php`,
        tableNo
      )
      .then(navigation.navigate("OrderSubmitted"));
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Table QR Code</Text>
      <BarCodeScanner
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.barcode}
      />
      <Button
        title="Submit Order"
        type="solid"
        buttonStyle={{
          backgroundColor: "green",
          width: "90%",
          alignSelf: "center",
          marginTop: 5,
        }}
        disabled={!scanned ? true : false}
        icon={
          <Ionicons
            name="arrow-forward"
            size={22}
            color="white"
            style={{ marginLeft: 10 }}
          />
        }
        iconRight
        onPress={() => submitOrder()}
      />
    </View>
  );
}

export default index;
