import { StyleSheet, Text, View, Image } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pass Generator</Text>
      <Image
        source={require('./assets/password-icon.png')}
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#123',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    backgroundColor: '#def',
    fontSize: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 4
  },
  logo: {
    resizeMode: 'contain',
    width: 120,
    height: 120,
  }
});