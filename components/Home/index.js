import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  Image,
} from "react-native";
import { Mcategories } from "../../service/main_catagories";
import styles from "./styles";
import { Entype, Entypo } from "@expo/vector-icons";
function index({ navigation }) {
  const onCategoryPressed = (type) => {
    navigation.navigate("Category", { type });
  };

  const renderMainCategory = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onCategoryPressed(item.type)}
    >
      <View style={styles.container}>
        {item.id == 1 ? (
          <Image style={styles.pic} source={require("../../assets/food.png")} />
        ) : (
          <Image
            style={styles.pic}
            source={require("../../assets/drink.png")}
          />
        )}

        <Text style={styles.title}>{item.name}</Text>
        <Entypo
          name="chevron-right"
          color="grey"
          size={32}
          style={[styles.title, { fontSize: 32, marginHorizontal: 10 }]}
        />
      </View>
    </TouchableHighlight>
  );
  return (
    <View style={styles.mainCont}>
      <Text
        style={[
          styles.title,
          {
            marginVertical: 15,
            fontWeight: "700",
            fontSize: 15,
            color: "black",
            elevation: 5,
          },
        ]}
      >
        Welcome To Goha Restaurant Ordering Mobile App
      </Text>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={Mcategories}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        renderItem={({ item }) => renderMainCategory({ item })}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default index;
