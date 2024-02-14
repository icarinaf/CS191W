import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';


const image = { uri: "https://img.freepik.com/free-vector/background-with-female-hairdressing-salon_33099-1143.jpg" };
export default function HomeScreen() {
    const [fontsLoaded] = useFonts({
        'SuperFunky': require('./assets/super-funky-font/SuperFunky-lgmWw.ttf'),
    });
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.container}>
            <Text style={styles.button_style}>My Skincare Salon</Text>
            <View style={styles.button_box_style}>
                <Button title="Next button" ><Text style={styles.button_style}>Click Here for Next</Text></Button>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-around',
        // padding: '20px',
    },
    button_box_style: {
        backgroundColor: '#FF3EB3',
        borderRadius: '5px',
    },
    button_style: {
        textAlign: "center",
        color: "#841584",
        alignSelf: "center",
        justifyContent: "center",
        fontSize: 50,
        margin: '20%',
    },
});
