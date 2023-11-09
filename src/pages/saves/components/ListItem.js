import { Pressable, StyleSheet, Text } from "react-native";

export default function ListItem({ value, handleDelete }) {
  return (
    <Pressable
      onLongPress={handleDelete}
      style={styles.container}
      android_ripple={{ color: '#ff313144' }}
    >
      <Text style={styles.text}>{value}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#ddeeff44',
    borderRadius: 2
  },
  text: {
    color: '#c9dbf6'
  }
});