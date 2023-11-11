import Slider from "@react-native-community/slider";
import { Pressable, Text } from "react-native";

export function PasswordOptions({ passOptions, setPassOptions }) {
  const handleSlideChange = (value) => {
    setPassOptions((prev) => {
      return { ...prev, length: value.toFixed(0) }
    });
  }

  return (
    <>
      <Slider
        minimumValue={8}
        maximumValue={30}
        minimumTrackTintColor="#58b1e8"
        maximumTrackTintColor="#1295e6"
        thumbTintColor="#def"
        value={passOptions.length}
        onValueChange={handleSlideChange}
      />

      <Pressable 
        style={{
          backgroundColor: passOptions.lowercase ? 'green' : 'red'
        }}
        onPress={() => {
          setPassOptions((prev) => {
            return {...prev, lowercase: !prev.lowercase}
          });
        }}
      >
        <Text>Lowercase</Text>
      </Pressable>

      <Pressable 
        style={{
          backgroundColor: passOptions.uppercase ? 'green' : 'red'
        }}
        onPress={() => {
          setPassOptions((prev) => {
            return {...prev, uppercase: !prev.uppercase}
          });
        }}
      >
        <Text>Uppercase</Text>
      </Pressable>

      <Pressable 
        style={{
          backgroundColor: passOptions.numbers ? 'green' : 'red'
        }}
        onPress={() => {
          setPassOptions((prev) => {
            return {...prev, numbers: !prev.numbers}
          });
        }}
      >
        <Text>Numbers</Text>
      </Pressable>

      <Pressable 
        style={{
          backgroundColor: passOptions.specials ? 'green' : 'red'
        }}
        onPress={() => {
          setPassOptions((prev) => {
            return {...prev, specials: !prev.specials}
          });
        }}
      >
        <Text>Specials</Text>
      </Pressable>
    </>
  );
}