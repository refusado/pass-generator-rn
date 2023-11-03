import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PasswordModal() {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text style={styles.title}>Generated Password: </Text>

        <Pressable style={{ width: '100%' }}>
          <Text style={styles.pass}>test1231231</Text>
        </Pressable>

        <View style={styles.horizontalLine}></View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor: '#51a9db'}]}>
            <Text style={styles.buttonText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#191f2188',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    paddingVertical: 24,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#def',
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
    width: 3,
    height: 3,
    marginVertical: 20,
    backgroundColor: '#00000088',
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
  },
  buttonText: {

  }
});