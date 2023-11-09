import { StatusBar } from "expo-status-bar"
import { Routes } from "./src/routes"
import { NavigationContainer } from "@react-navigation/native"
import Toast from "react-native-toast-message"

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Routes />
      </NavigationContainer>
      <Toast />
    </>
  )
}