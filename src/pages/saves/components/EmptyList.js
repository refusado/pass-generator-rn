import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function EmptyList({ backToHome }) {
  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name='shield-off' />

      <Text style={styles.text}>
        There are no saved passwords.
      </Text>

      <Pressable onPress={backToHome}>
        <Text style={[styles.text, { textDecorationLine: 'underline' }]}>
          Start generating now!
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: 104,
    marginBottom: 24,
    color: '#73afeb30'
  },
  text: {
    color: '#c5d4eb'
  }
});