import { StyleSheet, Dimensions } from "react-native";
import { RecipeCard } from "../../AppStyles";

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: width * 0.41,
    height: height * 0.41,
    marginVertical: 10,
    backgroundColor: "#f6f6f6",
    alignSelf: "center",
    elevation: 4,
    borderRadius: 5,
    marginHorizontal: 15,
  },
  pic: {
    width: width * 0.41,
    height: height * 0.19,
    //marginHorizontal: 10,
    alignSelf: "flex-start",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    padding: 10,
    resizeMode: "cover",
  },
  textCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  mainCont: {
    paddingTop: 20,
    height: height,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "700",
    marginLeft: 5,
    marginTop: 10,
    textAlignVertical: "bottom",
    color: "black",
  },
  price: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "700",
    marginRight: 5,
    textAlignVertical: "bottom",
    color: "grey",
  },
  quanInput: {
    marginHorizontal: 5,
    borderWidth: 0.7,
    borderColor: "orange",
    marginTop: 7,
    borderRadius: 3,
    textAlignVertical: "center",
    fontSize: 14,
    paddingHorizontal: 10,
  },
  quanLabel: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "700",
    color: "grey",
  },
  loadingCont: {
    display: "flex",
    flexDirection: "column",
    height: height * 0.7,
    justifyContent: "center",

    alignItems: "center",
  },
  barcode: {
    height: "80%",
    width: "90%",
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
    borderRadius: 7,
  },
  ingriPic: {
    height: height * 0.15,
    width: 130,
    resizeMode: "cover",
  },
  ingriCont: {
    height: height * 0.28,
    width: 130,
    backgroundColor: "white",
    marginHorizontal: 10,
    // paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 10,
    paddingTop: 5,
  },
  flatListCont: {
    height: height * 0.7,
  },
});

export default styles;
