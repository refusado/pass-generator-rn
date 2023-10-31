import { StyleSheet, Text, View, Image } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/password-icon.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Pass Generator</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#123',
  },
  title: {
    color: '#def',
    fontSize: 16,
  },
  logo: {
    width: 300,
    height: 300,
  }
});