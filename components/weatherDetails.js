import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"


import colors from "../myUtils/Colors"
const { primaryColor, secondaryColor, borderColor } = colors


export default function weatherDetails({ currentWeather, unit }) {

    const { main: { feels_like, humidity, pressure }, wind: { speed } } = currentWeather

    const windSpeed = unit === "metric" ? `${Math.round(speed)} m/s` : `${Math.round(speed)} m/h`

    return (
        <View style={styles.weatherdetails}>
            <View style={styles.row}>
                <View style={{ ...styles.detailsBox, borderRightWidth: 1, borderRightColor: borderColor }}>
                    <View style={styles.row}>
                        <FontAwesome5 name="temperature-low" size={25} color={primaryColor} />
                        <View style={styles.detailsBoxItems}>
                            <Text>Feels_like :</Text>
                            <Text style={styles.textSecondary}>{feels_like}°</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.detailsBox}>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="water" size={30} color={primaryColor} />
                        <View style={styles.detailsBoxItems}>
                            <Text>Humidity :</Text>
                            <Text style={styles.textSecondary}>{humidity} %</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ ...styles.row, borderTopWidth: 1, borderTopColor: borderColor }}>
                <View style={{ ...styles.detailsBox, borderRightWidth: 1, borderRightColor: borderColor }}>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="weather-windy" size={30} color={primaryColor} />
                        <View style={styles.detailsBoxItems}>
                            <Text>windSpeed :</Text>
                            <Text style={styles.textSecondary}>{windSpeed}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.detailsBox}>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="speedometer" size={30} color={primaryColor} />
                        <View style={styles.detailsBoxItems}>
                            <Text>pressure :</Text>
                            <Text style={styles.textSecondary}>{pressure} hPa</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ ...styles.row, borderTopWidth: 1, borderTopColor: borderColor }}>
                <View style={{ ...styles.detailsBox, borderRightWidth: 1, borderRightColor: borderColor }}>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="human" size={30} color={primaryColor} />
                        <View style={styles.detailsBoxItems}>
                            <Text>DevelopersContact :</Text>
                            <Text style={styles.textSecondary}>Email : Igwezehycient86@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherdetails: {
        marginTop: 'auto',
        borderColor: borderColor,
        borderRadius: 10,
        margin: 15,
        borderWidth: 1
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
    , detailsBox: {
        flex: 1,
        padding: 20
    },
    detailsBoxItems: {
        alignItems: "flex-end",
        justifyContent: 'flex-end'
    },
    textSecondary: {
        fontSize: 15,
        color: secondaryColor,
        fontWeight: "700",
        margin: 7
    }
})
