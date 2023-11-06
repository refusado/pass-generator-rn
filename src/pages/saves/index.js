import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from "../../hooks/useStorage";
import ListItem from "./components/ListItem";

export function Saves() {
  const [passwordsList, setPasswordsList] = useState([]);
  const focused = useIsFocused();
  const { getItems, removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const items = await getItems('@passwords');
      setPasswordsList(items);
    }

    loadPasswords();
  }, [focused]);

  async function deletePassword(password) {
    const updatedItems = await removeItem('@passwords', password);
    setPasswordsList(updatedItems);
  }

  const renderItem = ({ item }) => <ListItem value={item} handleDelete={() => deletePassword(item)} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Saves
        </Text>
      </View>

      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={passwordsList}
          keyExtractor={(value) => String(value)}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#cddef7',
    padding: 16,
    paddingTop: 40
  },
  title: {
    fontSize: 18
  },

  container: {
    flex: 1,
    padding: 16
  },
});