import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList,Alert } from "react-native";
import Header from "./component/Header";
import uuid from "react-uuid";
import ListItem from "./component/ListItem";
import AddItem from "./component/AddItem";
const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: "Milk" },
    { id: uuid(), text: "Eggs" },
    { id: uuid(), text: "Bread" },
    { id: uuid(), text: "Cheese" },
  ]);
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };
  const addItem = (item) => {
    if(!item){
      Alert.alert('Error','please enter an item',[{text:'OK'}]);
    }else{
    setItems((prevItems) => {
      return [{ id: uuid(), text: item }, ...prevItems];
    });
  }
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
    },
  });
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={ deleteItem }/>}
      />
      <AddItem addItem={addItem} />
      <StatusBar style="auto" />
    </View>
  );
};
export default App;
