import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",

    paddingHorizontal: 10,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: "orange",
  },
  scanbut: {
    marginHorizontal: 20,
    fontWeight: "700",
    color: "black",
  },
  flatListCont: {
    height: height * 0.7,
    paddingVertical: 15,
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
  barcode: {
    height: height * 0.7,
    width: width * 0.7,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
    borderRadius: 7,
    elevation: 30,
  },
  modalView: {
    backgroundColor: "white",
    //  backgroundIma
    display: "flex",
    flexDirection: "column",
    resizeMode: "contain",
    width: width * 0.95,
    // marginTop: 15,
    height: height * 0.9,
    marginBottom: 0,
    borderRadius: 10,
    elevation: 10,
    // alignSelf: "center",
    // justifyContent: "center",
    //elevation: 20,
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
});

export default styles;
