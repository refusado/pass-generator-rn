import Slider from "@react-native-community/slider";
import { Pressable, StyleSheet, Text, View } from "react-native";

const charsSize = {
  max: 30,
  min: 8
}

const charsOptions = [
  { label: 'Lowercase', name: 'lowercase' },
  { label: 'Uppercase', name: 'uppercase' },
  { label: 'Specials', name: 'specials' },
  { label: 'Numbers', name: 'numbers' }
];

export function PasswordOptions({ passOptions, setPassOptions }) {
  const handleSlideChange = (value) => {
    setPassOptions((prev) => {
      return { ...prev, length: value.toFixed(0) }
    });
  }

  const handleCheckChange = (prop) => {
    setPassOptions((prev) => {
      return { ...prev, [prop]: !prev[prop] }
    });
  }

  const buttons = charsOptions.map(({ label, name }) => {
    const isChecked = passOptions[name];

    return (
      <Pressable 
        key={name}
        style={[styles.button, isChecked ? styles.checked : '']}
        onPress={() => handleCheckChange(name)}
      >
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    )
  })

  return (
    <View style={styles.container}>
      <View style={styles.buttonsWrapper}>
        {[ ...buttons ]}
      </View>

      <Slider
        style={{ marginVertical: 20 }}
        minimumValue={charsSize.min}
        maximumValue={charsSize.max}
        minimumTrackTintColor="#26a2f0"
        maximumTrackTintColor="#ffffff"
        thumbTintColor="#d2e4f5"
        value={passOptions.length}
        onValueChange={handleSlideChange}
      />

      <Text style={styles.text}>{passOptions.length} Characters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4c5c73',
    paddingHorizontal: 16,
    paddingVertical: 24,
    width: '76%',
    borderRadius: 6,
    marginBottom: 24
  },
  buttonsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    borderRadius: 8
  },
  button: {
    width: '50%',
    paddingVertical: 10,
    backgroundColor: '#20689e',
    borderWidth: 0.6,
    borderColor: '#34709e',
    opacity: 0.5
  },
  checked: {
    opacity: 1
  },
  text: {
    color: '#d1e8f7',
    textAlign: 'center'
  }
});