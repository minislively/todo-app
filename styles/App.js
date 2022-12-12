import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleBackground: {
    backgroundColor: "#222",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    bottom: 60,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f1f1f1",
    borderRadius: 30,
    width: 260,
    color: "#222",
  },
  addWrapper: {
    width: 60,
    height: 50,
    backgroundColor: "#222",
    borderRadius: 30,
    opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: "#fff",
    fontWeight: "600",
  },
});
