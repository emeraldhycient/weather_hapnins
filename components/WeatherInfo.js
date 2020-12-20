import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'

import colors from "../myUtils/Colors"


const { primaryColor, secondaryColor, borderColor } = colors

export default function WeatherInfo({ currentWeather }) {

    const { main: { temp }, weather: [details], name } = currentWeather

    const { icon, description, main } = details

    iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        //<view style={styles.background} source={{ uri: "https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg" }}>
        <View style={styles.background}>
            <Text>{name}</Text>
            <Image style={styles.imageicon} source={{ uri: iconUrl }} />
            <Text style={styles.temp}>{temp}° </Text>
            <Text style={{ textTransform: "capitalize" }}>{description}</Text>
            <Text style={styles.main}>{main}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageicon: {
        width: 100,
        height: 200
    },
    temp: {
        color: primaryColor,
        fontSize: 40
    },
    main: {
        fontSize: 20,
        color: secondaryColor,
        fontWeight: "500",
        marginTop: 10
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    subBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255,255,255,0.6)',
        width: "80%",
        height: "40%",
    },

})
