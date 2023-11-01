import { StyleSheet, Text, View, Image } from "react-native"
import Slider from "@react-native-community/slider"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pass Generator</Text>
      <Image
        source={require('./assets/password-icon.png')}
        style={styles.logo}
      />

      <View style={styles.main}>
        <Text style={styles.mainText}>14 Characters</Text>
        <Slider
          style={{ height: 56 }}
          minimumValue={8}
          maximumValue={40}
          minimumTrackTintColor="#58b1e8"
          maximumTrackTintColor="#1295e6"
          thumbTintColor="#d12446"
        />
      </View>
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
    marginBottom: 40
  },

  main: {
    backgroundColor: '#ddeeff44',
    paddingVertical: 16,
    width: '88%',
    borderRadius: 8
  },
  mainText: {
    color: '#def',
    textAlign: 'center',
    fontSize: 24
  }
});