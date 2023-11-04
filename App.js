import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from "react-native"
import Slider from "@react-native-community/slider"
import { useState } from "react";
import generatePassword from "./GeneratorAlgorithm";
import PasswordModal from "./src/components/PasswordModal";

export default function App() {
  const [passValue, setPassValue] = useState();
  const [charsSize, setCharsSize] = useState(14);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    const pass = generatePassword(charsSize);
    setPassValue(pass);
    setIsModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pass Generator</Text>
      <Image
        source={require('./assets/password-icon.png')}
        style={styles.logo}
      />

      <View style={styles.main}>
        <Text style={styles.mainText}>{charsSize}/42 Characters</Text>
        <Slider
          style={styles.slider}
          minimumValue={4}
          maximumValue={42}
          minimumTrackTintColor="#58b1e8"
          maximumTrackTintColor="#1295e6"
          thumbTintColor="#def"
          value={charsSize}
          onValueChange={(value) => setCharsSize(value.toFixed(0))}
        />

        <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
          <Text style={styles.textButton}>
            Generate password
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
      >
        <PasswordModal 
          closeModal={() => setIsModalVisible(false)}
          generatedPassword={passValue}
        />
      </Modal>
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
    borderRadius: 2
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
    borderRadius: 6
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
    elevation: 3
  },
  textButton: {
    fontSize: 18,
    color: '#191f21',
  }
});