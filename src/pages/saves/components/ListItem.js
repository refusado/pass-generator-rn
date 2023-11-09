import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ListItem({ value, handleDelete }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Pressable
      onLongPress={handleDelete}
      style={styles.container}
      android_ripple={{ color: '#ff313144' }}
    >
      {isVisible ? 
        <Text style={styles.text}>{value}</Text> :
        <View style={[styles.censoredText, { width: value.length * 9 }]} />}

      <Pressable
        style={styles.eyeButton}
        onPress={() => setIsVisible((prev) => !prev)}
      >
        {isVisible ? 
          <Feather name="eye" size={24} color="#3b82c9" /> :
          <Feather name="eye-off" size={24} color="#3b82c9" />}
      </Pressable>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#ddeeff44',
    borderRadius: 2
  },
  text: {
    color: '#c9dbf6',
    marginHorizontal: 12,
    marginVertical: 8,
  },
  censoredText: {
    backgroundColor: '#ddeeff44',
    height: 21,
    borderRadius: 999,
    marginHorizontal: 12,
    marginVertical: 8,
  },
  eyeButton: {
    paddingLeft: 24,
    paddingRight: 12,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});