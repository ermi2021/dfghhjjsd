import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: height * 0.05,
    width: width * 0.9,
    alignSelf: "center",
    borderRadius: 10,
    paddingVertical: 10,
    elevation: 40,
  },
  barcode: {
    height: height * 0.6,
    width: width,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
    //borderRadius: 7,
  },
  order: {
    width: 100,
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    marginTop: 10,
    color: "grey",
    fontFamily: "sans-serif",
  },
});

export default styles;
