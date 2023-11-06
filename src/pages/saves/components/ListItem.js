import { Pressable, StyleSheet, Text } from "react-native";

export default function ListItem({ value, handleDelete }) {
  return (
    <Pressable
      onLongPress={handleDelete}
      style={styles.container}
    >
      <Text style={styles.text}>
        {value}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'blue',
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  buttonText: {
    fontSize: 18,
    backgroundColor: 'yellow',
    color: 'red',
  },
  text: {
    color: 'white',
  }
});