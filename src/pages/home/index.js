import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from "react-native"
import { useState } from "react";
import { PasswordModal } from "../../components/PasswordModal";
import generatePassword from "../../utils/GeneratorAlgorithm";
import { PasswordOptions } from "../../components/PasswordOptions";
import Toast from "react-native-toast-message";

export function Home({ navigation }) {
  const [passValue, setPassValue] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [passOptions, setPassOptions] = useState({
    length: 14,
    uppercase: true,
    lowercase: false,
    numbers: true,
    specials: false
  });

  const handleButtonClick = () => {
    const hasAnySelected = Object.values(passOptions).some((value) => {
      if (typeof(value) == 'boolean') {
        return value
      }
    })

    if (hasAnySelected) {
      const pass = generatePassword({ ...passOptions });
      setPassValue(pass);
      setIsModalVisible(true);

      return
    }

    Toast.show({
      type: 'error',
      text1: 'Select at least one password generation option',
      position: 'bottom'
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pass Generator</Text>
      <Image
        source={require('../../../assets/password-icon.png')}
        style={styles.logo}
      />

      <PasswordOptions passOptions={passOptions} setPassOptions={setPassOptions} />

      <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
        <Text style={styles.textButton}>
          Generate password
        </Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
      >
        <PasswordModal 
          closeModal={() => setIsModalVisible(false)}
          changeScreen={() => navigation.navigate('Saves')}
          generatedPassword={passValue}
        />
        <Toast />
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
    color: '#c6d9f5',
    fontSize: 22,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    textAlign: 'center'
  },
  logo: {
    resizeMode: 'contain',
    width: 108,
    height: 108,
    marginBottom: 72
  },
  button: {
    alignItems: 'center',
    borderRadius: 999,
    backgroundColor: '#26618f',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    elevation: 3
  },
  textButton: {
    fontSize: 16,
    color: '#cce4f5',
    textTransform: 'uppercase'
  }
});