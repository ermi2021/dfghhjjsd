import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  ImageBackground,
} from "react-native";
import { readCategory } from "../../service/api";
import styles from "./styles";
import useAxios from "axios-hooks";
import { Entype, Entypo } from "@expo/vector-icons";
import { BackgroundImage } from "react-native-elements/dist/config";

function index({ navigation, route }) {
  const { type } = route.params;
  const [categories, setCategories] = useState();
  const [isLoading, setLoading] = useState(true);
  const [{ data, loading, error }, refetch] = useAxios(
    `https://foodorderingapi.herokuapp.com/REST_FOOD/api/category/read_by_type.php?type=` +
      type
  );

  useEffect(() => {
    setCategories(data);

    // console.warn(categories);
  }, [data]);

  const onCategoryPressed = (id) => {
    navigation.navigate("Recipe", { id });
  };

  const renderCategory = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onCategoryPressed(item.id)}
    >
      <ImageBackground
        source={{ uri: item.photo_url }}
        style={styles.container}
      >
        <View style={styles.transCont}>
          <Text style={styles.title}>{item.Category_name}</Text>
          <Entypo
            name="chevron-right"
            color="green"
            size={32}
            style={[
              styles.title,
              { fontSize: 32, marginHorizontal: 10, color: "green" },
            ]}
          />
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
  return (
    <View style={styles.mainCont}>
      {loading && (
        <View style={styles.loadingCont}>
          <ActivityIndicator color="green" size={32}></ActivityIndicator>
          <Text style={styles.title}>Loading recipes 👩‍🍳</Text>
        </View>
      )}
      {error && (
        <View style={styles.loadingCont}>
          <Text style={[styles.title, { fontSize: 32, marginVertical: 10 }]}>
            OOPS....
          </Text>
          <Text style={styles.title}>Error while Loading recipes 👩‍🍳</Text>
          <Text style={[styles.title, { fontSize: 14, color: "grey" }]}>
            Check your internet connection
          </Text>
        </View>
      )}
      {data && (
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={data.data}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          renderItem={({ item }) => renderCategory({ item })}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
}

export default index;
