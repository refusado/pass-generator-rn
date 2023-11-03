import { StyleSheet, Text, View } from "react-native";

export default function PasswordModal() {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text>Modal here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#191f2174',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '72%',
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#def',
  }
});