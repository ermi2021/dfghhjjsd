import React, { useState, useEffect, useContext } from "react";
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
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import {
  Button,
  Overlay,
  CheckBox,
  Input,
  SearchBar,
  PricingCard,
} from "react-native-elements";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { selectedR } from "../Recipies";
import CartContext from "../../provider/CartProvider";
import useAxios from "axios-hooks";
import axios from "axios";
import { get, indexOf } from "lodash";
import { useChecklist } from "react-checklist";
import HTML from "react-native-render-html";

function index({ navigation, route }) {
  let { id, title, photo_url, price, description } = route.params.item;
  let ingrA = [];

  const [ingridents, setIngridents] = useState();
  const [ingrArray, setIngridentArray] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  const [orderLoading, setLoading] = useState(false);
  let need = "berbere indaybezaw";
  const [quantity, setQuantity] = useState(1);
  const [{ data, loading, error }, refetch] = useAxios(
    `https://foodorderingapi.herokuapp.com/REST_FOOD/api/ingrdentsforrecipe.php?ids=` +
      id
  );

  useEffect(() => {
    setIngridentArray([]);
  }, []);
  const addtoCart = async () => {
    let dataRecipe = {
      recipe_id: id,
      quantity: quantity,
      price: price,
      need: need,
    };
    let dataIngr = {
      ingridents: ingrArray,
    };
    setLoading(true);
    //selectedR.push({ id: id, quantity: quantity });
    axios
      .all([
        axios.post({
          url: `https://foodorderingapi.herokuapp.com/REST_FOOD/api/orders/create.php`,
        }),
        axios.post(
          `https://foodorderingapi.herokuapp.com/REST_FOOD/api/order_recipes/create.php`,
          dataRecipe
        ),
        axios.post(
          `https://foodorderingapi.herokuapp.com/REST_FOOD/api/order_ingridents/create.php`,
          dataIngr
        ),
      ])
      .then(
        // output of req.
        //  console.warn("order", order, "recipe", recipe, "ingrident", ingridents),
        setLoading(false),
        navigation.goBack()
      );
  };

  const onChecked = (id) => {
    let exists = ingrArray.includes(id);

    if (exists) {
      setIngridentArray(ingrArray.filter((item) => item !== id));
    } else {
      setIngridentArray([...ingrArray, id]);
    }
    console.log(ingrArray);
  };
  const renderIngrident = ({ item }) => {
    return (
      <View>
        <CheckBox
          title={item.name}
          checked={ingrArray.includes(item.ingrident_id)}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={() => {
            onChecked(item.ingrident_id);
          }}
        />
      </View>
    );
  };
  return (
    <View>
      <StatusBar backgroundColor="orange" />
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "orange",
          paddingVertical: 15,
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="arrow-back"
            style={{
              alignSelf: "center",
              textAlignVertical: "center",
              paddingTop: 10,
            }}
            color="white"
            size={25}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 0.8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={[
              styles.title,
              { color: "white", fontSize: 18, textTransform: "uppercase" },
            ]}
          >
            {title}
          </Text>
        </View>
      </View>
      <View>
        <Image source={{ uri: photo_url }} style={styles.recOverlayPic} />
        <View style={styles.quantityCont}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (quantity > 1) {
                setQuantity((quantity) => quantity - 1);
              }
            }}
            style={{
              width: 35,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontSize: 20,
                color: "grey",
              }}
            >
              -
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: 35,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              elevation: 5,
              borderColor: "orange",
              borderWidth: 0.25,
            }}
          >
            <Text
              editable={false}
              // underlineColorAndroid="transparent"
              style={{ fontSize: 15, fontWeight: "600" }}
            >
              {quantity}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setQuantity((quantity) => quantity + 1);
              //  setTotal((totalPrice) => quantity * totalPrice);
            }}
            activeOpacity={0.8}
            style={{
              width: 35,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: 25,
              borderBottomRightRadius: 25,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontSize: 20,
                color: "grey",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          color: "grey",
          marginTop: 40,
        }}
      >
        "{description}"
      </Text>
      <View style={styles.ingriCont}>
        {loading && (
          <View style={styles.loadingCont}>
            <ActivityIndicator color="green" size={32} />
            <Text style={styles.title}>Loading ingridents 👩‍🍳</Text>
          </View>
        )}
        {data && (
          <View>
            <FlatList
              vertical
              numColumns={2}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <Text style={styles.title}>Select Ingridents</Text>
              }
              data={data}
              snapToAlignment={"start"}
              decelerationRate={"fast"}
              renderItem={({ item }) => renderIngrident({ item })}
              keyExtractor={(item, index) => index.toString()}
              style={{ height: "70%", marginVertical: 10 }}
              updateCellsBatchingPeriod={10}
            />
          </View>
        )}
        <TextInput
          style={{
            padding: 10,
            fontWeight: "700",
            borderRadius: 10,
            marginTop: 2,
            borderWidth: 1,
            borderColor: "green",
            marginBottom: 20,
            fontSize: 12,
          }}
          placeholder="What else do you need? (you can skip this field)"
        />
      </View>

      <Button
        disabled={(loading, ingrArray.length == 0 ? true : false)}
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
            name="cart"
            size={22}
            color="white"
            style={{ marginLeft: 10 }}
          />
        }
        iconRight
        onPress={() => {
          setCart((prev) => [
            ...prev,
            {
              id: id,
              name: title,
              photo_url: photo_url,
              quantity: quantity,
              totalPrice: quantity * price,
            },
          ]);
          addtoCart();
        }}
        containerStyle={{
          elevation: 20,
        }}
      />
      {orderLoading && (
        <View style={styles.orderLoading}>
          <ActivityIndicator color="green" size={32} />
          <Text style={styles.title}>Please wait....</Text>
        </View>
      )}
    </View>
  );
}

export default index;
