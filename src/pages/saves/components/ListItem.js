import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { PixelRatio, Pressable, StyleSheet, Text, View } from "react-native";

const fontScale = PixelRatio.getFontScale();

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
        <View style={[styles.censoredText, { width: value.length * 8.5 * fontScale }]} />}

      <Pressable
        style={styles.eyeButton}
        onPress={() => setIsVisible((prev) => !prev)}
      >
        {isVisible ? 
          <Feather name="eye-off" size={24} color="#336fac" /> :
          <Feather name="eye" size={24} color="#336fac" />}
      </Pressable>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 32 * fontScale,
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
    marginHorizontal: 8,
    fontSize: 13 * fontScale
  },
  censoredText: {
    backgroundColor: '#ddeeff44',
    height: 18 * fontScale,
    borderRadius: 999,
    marginHorizontal: 8,
  },
  eyeButton: {
    backgroundColor: '#252c3d55',
    paddingHorizontal: 14,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});