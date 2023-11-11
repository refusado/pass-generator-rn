import Slider from "@react-native-community/slider";
import { Pressable, Text } from "react-native";

const charsSize = {
  max: 30,
  min: 8
}

const charsOptions = [
  { label: 'Lowercase', name: 'lowercase' },
  { label: 'Uppercase', name: 'uppercase' },
  { label: 'Numbers', name: 'numbers' },
  { label: 'Specials', name: 'specials' }
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
    return (
      <Pressable 
        key={name}
        style={{backgroundColor: passOptions[name] ? 'green' : 'red'}}
        onPress={() => handleCheckChange(name)}
      >
        <Text>{label}</Text>
      </Pressable>
    )
  })


  return (
    <>
      <Slider
        minimumValue={charsSize.min}
        maximumValue={charsSize.max}
        minimumTrackTintColor="#58b1e8"
        maximumTrackTintColor="#1295e6"
        thumbTintColor="#def"
        value={passOptions.length}
        onValueChange={handleSlideChange}
      />

      {[ ...buttons ]}
    </>
  );
}