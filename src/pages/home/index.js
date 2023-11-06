import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from "react-native"
import Slider from "@react-native-community/slider"
import { useState } from "react";
import { PasswordModal } from "../../components/PasswordModal";
import generatePassword from "../../GeneratorAlgorithm";

export function Home() {
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
        source={require('../../assets/password-icon.png')}
        style={styles.logo}
      />

      <View style={styles.main}>
        <Text style={styles.mainText}>{charsSize} Characters</Text>
        <Slider
          style={styles.slider}
          minimumValue={8}
          maximumValue={30}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    width: '100%',
    backgroundColor: '#b9cdeb',
    color: '#191f21',
    fontSize: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 4,
    textAlign: 'center'
  },
  logo: {
    resizeMode: 'contain',
    width: 120,
    height: 120,
    marginBottom: 40
  },

  main: {
    backgroundColor: '#ddeeff44',
    paddingHorizontal: 16,
    paddingVertical: 24,
    width: '88%',
    borderRadius: 6
  },
  mainText: {
    color: '#d7e6fc',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  slider: {
    height: 56,
    marginVertical: 16
  },
  button: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 999,
    backgroundColor: '#4b8cdb',
    alignSelf: 'center',
    paddingVertical: 10,
    elevation: 1
  },
  textButton: {
    fontSize: 16,
    color: '#191f21',
  }
});