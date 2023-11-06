import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from "../../hooks/useStorage";

export function Saves() {
  const focused = useIsFocused();
  const [passwordsList, setPasswordsList] = useState([]);
  const { getItems } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const items = await getItems('@passwords');
      setPasswordsList(items);
    }

    loadPasswords();
  }, [focused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text>
          Passwords
        </Text>
      </View>

      <View style={styles.container}>
        { passwordsList.map((value) => <Text>{value}</Text>) }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
  },

  container: {
    backgroundColor: 'blue',
  }
});