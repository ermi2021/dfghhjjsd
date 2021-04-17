import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 10,
    height: height,
    elevation: 3,
    // backgroundColor: "green",
    //justifyContent: "space-between",
    // alignContent: "center",
    paddingVertical: height * 0.15,
    //flex: 1,
  },
  flatListCont: {
    alignSelf: "center",
    alignContent: "center",
    height: height * 0.7,
    width: width * 0.7,
    paddingVertical: 20,
  },
  payIcon: {
    height: 45,
    width: 45,
    resizeMode: "contain",
    borderWidth: 1,
    padding: 5,
  },
});

export default styles;
