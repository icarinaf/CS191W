import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, } from 'react-native';
import HomeScreen from './intro_screens/HomeScreen';
import { useFonts } from 'expo-font';




const image = { uri: "https://img.freepik.com/free-vector/background-with-female-hairdressing-salon_33099-1143.jpg" };
export default function App() {
  const [fontsLoaded] = useFonts({
    'SuperFunky': require('./assets/super-funky-font/SuperFunky-lgmWw.ttf'),
  });
  
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
  },
});
