import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
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
          style={styles.slider}
          minimumValue={8}
          maximumValue={40}
          minimumTrackTintColor="#58b1e8"
          maximumTrackTintColor="#1295e6"
          thumbTintColor="#def"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
            Generate password
          </Text>
        </TouchableOpacity>
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
    color: '#191f21',
    fontSize: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 6
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
    paddingHorizontal: 8,
    width: '88%',
    borderRadius: 8
  },
  mainText: {
    color: '#def',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  slider: {
    height: 56,
    marginVertical: 16
  },
  button: {
    borderRadius: 999,
    backgroundColor: '#6fc5ed',
    alignSelf: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    elevation: 5
  },
  textButton: {
    fontSize: 18,
    color: '#191f21',
  }
});