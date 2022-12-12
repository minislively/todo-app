import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "#222",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#222",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
});
