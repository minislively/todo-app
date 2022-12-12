import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "../styles/Task";
import { AntDesign } from "@expo/vector-icons";
const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <AntDesign name="delete" size={24} color="#222" />
    </View>
  );
};
export default Task;
