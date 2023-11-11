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

    if (!hasAnySelected) {
      Toast.show({
        type: 'error',
        text1: 'Select at least one password generation option',
        position: 'bottom'
      });

      return
    }

    const pass = generatePassword({ ...passOptions });
    setPassValue(pass);
    setIsModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pass Generator</Text>
      <Image
        source={require('../../../assets/password-icon.png')}
        style={styles.logo}
      />

      <View style={styles.main}>
        <Text style={styles.mainText}>{passOptions.length} Characters</Text>

        <PasswordOptions passOptions={passOptions} setPassOptions={setPassOptions} />

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
          changeScreen={() => navigation.navigate('Saves')}
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
    color: '#c6d9f5',
    fontSize: 22,
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    textAlign: 'center'
  },
  logo: {
    resizeMode: 'contain',
    width: 120,
    height: 120,
    marginBottom: 72
  },

  main: {
    backgroundColor: '#ddeeff44',
    paddingHorizontal: 16,
    paddingVertical: 24,
    width: '88%',
    borderRadius: 4
  },
  mainText: {
    color: '#d7e6fc',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 999,
    backgroundColor: '#339ff1',
    alignSelf: 'center',
    paddingVertical: 10,
    elevation: 1
  },
  textButton: {
    fontSize: 16,
    color: '#11191d',
  }
});