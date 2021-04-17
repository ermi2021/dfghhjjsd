import { StyleSheet, Dimensions } from "react-native";
import { RecipeCard } from "../../AppStyles";

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: width * 0.9,
    height: height * 0.3,
    marginVertical: 10,
    backgroundColor: "#f6f6f6",
    alignSelf: "center",
    elevation: 4,
    borderRadius: 5,
    marginHorizontal: 15,
  },
  pic: {
    width: width * 0.46,
    height: height * 0.19,
    marginHorizontal: 10,
    alignSelf: "center",
    padding: 10,
    resizeMode: "contain",
  },
  mainCont: {
    paddingTop: 20,
    height: height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    textAlignVertical: "center",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
    marginHorizontal: 15,
  },
});

export default styles;
