import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  CheckBox,
  Overlay,
  Input,
  SearchBar,
  PricingCard,
} from "react-native-elements";
import _ from "lodash";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableHighlight,
  ScrollView,
  StatusBar,
  TextInput,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { Dialog, Portal } from "react-native-paper";
import axios from "axios";
import styles from "./styles";
import useAxios from "axios-hooks";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Chip } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import Recipes from "../Recipies";
import CartContext from "../../provider/CartProvider";

export default function index({ navigation, route }) {
  const { cart, setCart } = useContext(CartContext);
  const [recipes, setRecipes] = useState();
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedR, setSelected] = useState({
    id: null,
    quantity: null,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [recOverlayVisible, setOverlayVisible] = useState(false);
  const [defaultChecked, setDefaultChecked] = useState(true);
  const [customizeChecked, setCustomizeChecked] = useState(false);
  //let selectedR = new Array();
  const { id } = route.params;
  const [{ data, loading, error }, refetch] = useAxios(
    "https://foodorderingapi.herokuapp.com/REST_FOOD/api/recipe/read_by_catagory.php?id=" +
      id
  );
  useEffect(() => {
    setSelected([]);
    setRecipes(data);
  }, [data]);

  const onOrderPressed = () => {
    navigation.navigate("Order");
    // setModalVisible(false);
  };
  const onBackdPress = () => {
    navigation.goBack();
  };

  const removeRecipe = async ({ item }) => {
    await axios.delete(
      `https://foodorderingapi.herokuapp.com/REST_FOOD/api/order_recipes/delete.php`,
      item.id
    );
    setCart(cart.filter((recipe) => recipe.name !== item.name));
  };

  const contains = ({ title }, query) => {
    if (title.includes(query)) {
      return true;
    }
    return false;
  };

  const handleSearch = (search) => {
    const formattedQuery = search.toLowerCase();
    const data = _.filter(recipes.data, (recipe) => {
      return contains(recipe, formattedQuery);
    });
    setRecipes(data);
  };

  const renderSelected = (item) => {
    return (
      <Chip
        style={{
          height: 35,
          color: "white",
          fontWeight: "700",
          marginVertical: 10,
          marginHorizontal: 10,
          elevation: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={{ uri: item.photo_url }}
          style={{
            height: 25,
            width: 25,
            borderRadius: 10,
            marginRight: 10,
            resizeMode: "contain",
          }}
        />{" "}
        <Text
          style={[
            styles.title,
            {
              color: "black",
              fontSize: 14,
              textAlignVertical: "center",
              height: 35,
            },
          ]}
        >
          {item.id}
        </Text>
        <Ionicons
          name="close-circle-sharp"
          color="brown"
          size={20}
          style={{ marginLeft: 30 }}
          onPress={() => {
            removeRecipe({ item });
          }}
        />
      </Chip>
    );
  };

  const openRecipeOverlay = ({ item }) => {
    //  setOverlayVisible(true);
    <View style={styles.mainCont}>
      <Overlay
        style={{ backgroundColor: "white" }}
        isVisible={recOverlayVisible}
        // animated={true}
        backdropStyle={{
          backgroundColor: "#f6f6f6",
          opacity: 0.48,
        }}
        onBackdropPress={() => setOverlayVisible(false)}
      >
        <View style={styles.recipeOverlay}>
          <Button
            title="Add To Cart"
            type="solid"
            buttonStyle={{
              backgroundColor: "orange",
              width: "90%",
              alignSelf: "center",
              marginTop: 5,
            }}
            icon={
              <Ionicons
                name="arrow-forward"
                size={22}
                color="white"
                style={{ marginLeft: 10 }}
              />
            }
            iconRight
            //  onPress={() => onOrderPressed()}
          />
        </View>
      </Overlay>
    </View>;
  };
  const renderRecipes = ({ item }) => {
    let title = "Add To Basket";
    let quantity = 1;
    const onChangeNumber = (number) => {
      quantity = number;
    };

    const recOverlayShow = ({ item }) => {
      setOverlayVisible(true);
      return (
        <Overlay
          style={{ backgroundColor: "white" }}
          isVisible={recOverlayVisible}
          // animated={true}
          backdropStyle={{
            backgroundColor: "#f6f6f6",
            opacity: 0.2,
          }}
          onBackdropPress={() => setOverlayVisible(false)}
        ></Overlay>
      );
    };
    return (
      <View>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => {
            navigation.navigate("Quantity", { item });
          }}
        >
          <View style={styles.container}>
            <Image style={styles.pic} source={{ uri: item.photo_url }} />
            <View style={styles.textCont}>
              <Text style={styles.title}>{item.title} </Text>
              <Text
                style={[
                  styles.title,
                  { marginTop: 2, fontSize: 11, color: "grey" },
                ]}
              >
                "{item.description}"
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  style={[styles.title, { color: "green", marginRight: 3 }]}
                  name="ios-pricetags-sharp"
                  size={16}
                  color="green"
                />
                <Text style={styles.price}>{item.price} ETB / item</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  };

  return (
    <View>
      <StatusBar backgroundColor="orange" />
      <View
        style={{
          backgroundColor: "orange",
          padding: 10,
          alignItems: "center",
          justifyContent: "space-around",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Ionicons
          name="arrow-back"
          color="white"
          size={25}
          style={{ marginHorizontal: 5 }}
          onPress={onBackdPress}
        />
      </View>

      {loading && (
        <View style={styles.loadingCont}>
          <ActivityIndicator color="green" size={32} />
          <Text style={styles.title}>Loading recipes 👩‍🍳</Text>
        </View>
      )}
      {data && (
        <View>
          <ScrollView>
            <FlatList
              vertical
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={data.data}
              snapToAlignment={"start"}
              decelerationRate={"fast"}
              renderItem={({ item }) => renderRecipes({ item })}
              keyExtractor={(item, index) => index.toString()}
              style={styles.flatlist}
              updateCellsBatchingPeriod={10}
            />
          </ScrollView>
          <View style={styles.chipContainer}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "700",
                marginVertical: 4,
                //  borderRadius: 3,
              }}
            >
              Recipes Selected
            </Text>
            <FlatList
              horizontal
              numRows={1}
              data={cart}
              snapToAlignment={"start"}
              decelerationRate={"fast"}
              renderItem={({ item }) => renderSelected(item)}
              keyExtractor={(item, index) => index.toString()}
              style={styles.flatlist}
              updateCellsBatchingPeriod={10}
              ListEmptyComponent={
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "700",
                      color: "grey",
                      fontSize: 12,
                      textAlignVertical: "center",
                    }}
                  >
                    No Recipe Selected
                  </Text>
                </View>
              }
            />
          </View>
          <Button
            title="Submit"
            type="solid"
            buttonStyle={{
              backgroundColor: "orange",
              width: "90%",
              alignSelf: "center",
              marginTop: 5,
            }}
            icon={
              <Ionicons
                name="arrow-forward"
                size={22}
                color="white"
                style={{ marginLeft: 10 }}
              />
            }
            iconRight
            onPress={() => onOrderPressed()}
            containerStyle={{
              elevation: 20,
            }}
          />
        </View>
      )}
    </View>
  );
}
