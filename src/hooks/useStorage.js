import AsyncStorage from "@react-native-async-storage/async-storage"

export default function useStorage() {
  // Get saves from storage
  const getItems = async (key) => {
    try {
      const saves = await AsyncStorage.getItem(key);
      return JSON.parse(saves) || [];

    } catch (error) {
      console.log('Error while getting the storage item', error);
      return null;
    }
  }

  // Save new item in storage
  const saveItem = async (key, value) => {
    try {
      const saves = await getItems(key);
      saves.push(value);

      await AsyncStorage.setItem(key, JSON.stringify(saves));
      return saves;

    } catch (error) {
      console.log('Error while saving value', error);
      return null;
    }
  }

  // Remove item from storage
  const removeItem = async (key, value) => {
    try {
      const saves = await getItems(key);
      const newSaves = saves.filter(item => item != value);

      await AsyncStorage.setItem(key, JSON.stringify(newSaves));
      return newSaves;

    } catch (error) {
      console.log('Error while removing value', error);
      return null;
    }
  }

  return { getItems, saveItem, removeItem }
}