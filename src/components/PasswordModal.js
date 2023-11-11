import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../hooks/useStorage";
import Toast from "react-native-toast-message";

export function PasswordModal({ closeModal, generatedPassword, changeScreen }) {
  const { saveItem } = useStorage();

  const copyPass = async () => {
    await Clipboard.setStringAsync(generatedPassword);

    Toast.show({
      text1: `Password copied`,
      type: 'info',
      position: 'bottom',
    });
  }

  const savePass = async () => {
    await saveItem('@passwords', generatedPassword);
    closeModal();

    Toast.show({
      type: 'info',
      text1: `Password "${generatedPassword}" saved`,
      position: 'bottom',
    });
    changeScreen();
  }

  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text style={styles.title}>Generated Password: </Text>

        <Pressable
          style={{ width: '100%' }}
          onLongPress={copyPass}
        >
          <Text style={styles.pass}>{generatedPassword}</Text>
        </Pressable>

        <View style={styles.horizontalLine}></View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={closeModal}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#4fa3e8'}]}
            onPress={savePass}
          >
            <Text style={styles.buttonText}>Save pass</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#121414aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    paddingVertical: 24,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cddef7',
    borderRadius: 9
  },
  title: {
    marginBottom: 12,
    color: '#191f21',
    fontSize: 16
  },
  pass: {
    textAlign: 'center',
    backgroundColor: '#191f21',
    color: '#def',
    fontFamily: 'monospace',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 2
  },

  horizontalLine: {
    width: '48%',
    height: 1,
    marginVertical: 24,
    backgroundColor: '#00000024',
  },
  
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 5
  }
});