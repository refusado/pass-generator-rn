import AsyncStorage from "@react-native-async-storage/async-storage"

export default function useStorage() {
  // Get a storage item
  const getItems = async () => {
    try {
      // to do
    } catch (error) {
      console.log('Error while getting storage item', error);
      return null;
    }
  }

  // Save new item in storage
  const saveItem = async () => {
    try {
      // to do
    } catch (error) {
      console.log('Error while saving storage item', error);
      return null;
    }
  }

  // Remove a storage item
  const removeItem = async () => {
    try {
      // to do
    } catch (error) {
      console.log('Error while removing storage item', error);
      return false;
    }
  }

  return { getItems, saveItem, removeItem }
}