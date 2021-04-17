import React, { useEffect, useState, Dimensions } from "react";
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
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button } from "react-native-elements";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import useAxios from "axios-hooks";
import Ingrident from "./Ingrident";

function index({ navigation, route }) {
  const { selectedR, recipes } = route.params;

  // const [recipes, setRecIngrident] = useState();

  const recipeIds = selectedR.toString();

  const [{ data, loading, error }, rerefetch] = useAxios(
    `https://foodorderingapi.herokuapp.com/REST_FOOD/api/readmultiple.php?ids=` +
      recipeIds
  );

  useEffect(() => {
    console.warn(recipes);
    console.warn(data);
    setRecIngrident(data);
  }, [data]);

  const orderPressed = () => {
    navigation.navigate("Order", { recipes });
  };

  const renderIngrident = ({ item }) => (
    <View
      style={{
        paddingVertical: 20,
        marginHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "green",
        marginVertical: 10,
        borderRadius: 15,
      }}
    >
      <Text
        style={[
          styles.title,
          {
            textAlign: "center",
            color: "grey",
            marginTop: 0.5,
            marginBottom: 1,
            marginVertical: 0,
          },
        ]}
      >
        ingridents for {item.title}
      </Text>
      <TouchableHighlight
        underlayColor="rgba(73,182,77,1,0.9)"
        //    onPress={() => onCategoryPressed(item.id)}
      >
        <View>
          <Ingrident id={item.id} />
        </View>
      </TouchableHighlight>
    </View>
  );

  return (
    <View>
      {loading && (
        <View style={styles.loadingCont}>
          <ActivityIndicator color="green" size={32}></ActivityIndicator>
          <Text style={styles.title}>Loading your cart 👩‍🍳</Text>
        </View>
      )}

      {data && (
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              marginVertical: 10,
            }}
          >
            You can remove the ingridents you don't want
          </Text>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={data.data}
            snapToAlignment={"start"}
            decelerationRate={"fast"}
            renderItem={({ item }) => renderIngrident({ item })}
            keyExtractor={(item, index) => index.toString()}
            style={styles.flatListCont}
          />
        </View>
      )}

      <Button
        title="continue"
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
        onPress={() => orderPressed()}
      ></Button>
    </View>
  );
}

export default index;
