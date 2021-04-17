import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: width * 0.9,
    height: height * 0.2,
    marginVertical: 10,
    justifyContent: "space-evenly",
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
  transCont: {
    height: height * 0.05,
    width: width * 0.9,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignSelf: "flex-end",

    textAlign: "right",
    justifyContent: "space-between",
    opacity: 0.8,
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
    textAlignVertical: "center",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
    marginHorizontal: 15,
    color: "black",
  },

  loadingCont: {
    display: "flex",
    flexDirection: "column",
    height: height * 0.7,
    justifyContent: "center",

    alignItems: "center",
  },
});

export default styles;
