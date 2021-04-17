import React, { useState, useEffect } from "react";
import { Button, CheckBox } from "react-native-elements";
import styles from "./styles";

import {
  View,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
  TouchableHighlight,
} from "react-native";

import useAxios from "axios-hooks";
import { FontAwsome } from "@expo/vector-icons";
function Ingrident(props) {
  const { id } = props;

  const [recipeIngridents, setRecIngri] = useState();

  const [{ data, loading, error }, refetch] = useAxios(
    `https://foodorderingapi.herokuapp.com/REST_FOOD/api/ingrdentsforrecipe.php?ids=` +
      id
  );

  useEffect(() => {
    console.warn(data);
    setRecIngri(data);
  }, [data]);

  const renderIngrident = ({ item }) => (
    <TouchableHighlight
      underlayColor="black"
      style={styles.ingriCont}
      //    onPress={() => onCategoryPressed(item.id)}
    >
      <View>
        <Text style={[styles.title, { fontWeight: "600", marginBottom: 5 }]}>
          {item.name}
        </Text>
        <Image source={{ uri: item.photo_url }} style={styles.ingriPic} />
        <CheckBox
          title="add"
          checked={true}
          checkedIcon="remove"
          checkedColor="pink"
          uncheckedIcon="plus-circle"
          checkedTitle="remove"
          uncheckedColor="green"
          size={18}
          style={{
            height: 20,
            backgroundColor: "white",
            borderColor: "transparent",
          }}
          center
          containerStyle={{
            height: 20,
            backgroundColor: "white",
            marginTop: 10,
            elevation: 15,
          }}
        />
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      {loading && (
        <View style={styles.loadingCont}>
          <ActivityIndicator size={32} color="orange" />
        </View>
      )}
      {error && (
        <View style={styles.loadingCont}>
          <Text>error</Text>
        </View>
      )}
      {data && (
        <View>
          <FlatList
            horizontal
            showsVerticalScrollIndicator={false}
            numRows={1}
            data={data.data}
            snapToAlignment={"start"}
            decelerationRate={"fast"}
            renderItem={({ item }) => renderIngrident({ item })}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
}

export default Ingrident;
