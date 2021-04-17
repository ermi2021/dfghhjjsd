import { StatusBar } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import { RecipeCard } from "../../AppStyles";

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: width * 0.41,
    height: height * 0.39,
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
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
  },

  centeredView: {
    width: width,
    height: height,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    //opacity: 0.4,
    // backgroundColor: "#f6f6f6",
  },
  modalView: {
    backgroundColor: "white",
    width: width * 0.8,

    height: height * 0.3,
    alignSelf: "center",
    justifyContent: "center",
    //elevation: 20,
    borderRadius: 15,
  },
  flatlist: {
    height: height * 0.71,
    //paddingTop: StatusBar.currentHeight,
  },
  searchInput: {
    width: width * 0.84,
    borderRadius: 25,
    borderColor: "black",
    borderWidth: 0.5,
    paddingVertical: 0,
    backgroundColor: "white",
    paddingHorizontal: 0,
    marginBottom: 0,
  },
  chipContainer: {
    height: height * 0.15,
    backgroundColor: "#f6f6f6",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: width,
    elevation: 5,
    width: width * 0.95,
    borderRadius: 10,
  },
  searchBarCont: {
    display: "flex",
    flexDirection: "row",
    width: width,
    backgroundColor: "orange",
    height: height * 0.12,
    paddingVertical: StatusBar.currentHeight,
  },
  backIcon: {
    marginHorizontal: 10,
    textAlignVertical: "center",
    marginTop: 15,
    height: 30,
  },
  searchBar: {
    paddingBottom: 20,
    marginBottom: 20,
    width: width * 0.87,
  },

  recOverlayPic: {
    height: height * 0.2,
    width: "90%",
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: 20,
  },
  quantityCont: {
    width: "100%",
    height: 50,
    bottom: -20,
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    // marginVertical: 4,
  },
  ingriCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: 30,
    paddingHorizontal: 10,
    width: "90%",
    height: height * 0.35,
    alignSelf: "center",
    backgroundColor: "white",
    elevation: 5,
  },
  ingriPic: {
    height: height * 0.13,
    width: "100%",
    resizeMode: "cover",
  },
  otherInput: {
    width: width * 0.6,
    padding: 10,
    fontWeight: "600",
    borderRadius: 3,
    marginVertical: 5,
  },
  ingridentCont: {
    height: height * 0.3,
    backgroundColor: "white",
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  orderLoading: {
    position: "absolute",
    height: height,
    width: width,
    justifyContent: "center",
    alignContent: "center",
    opacity: 0.8,
    backgroundColor: "#f6f6f6",
  },
});

export default styles;
