import React from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'
import { Ionicons } from "@expo/vector-icons"

import colors from "../myUtils/Colors"
const { primaryColor, secondaryColor, borderColor } = colors


export default function ReloadIcon({ load }) {

    const reloadicons = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'

    return (
        <View style={styles.reload}>
            <Ionicons onPress={load} name={reloadicons} size={24} color={primaryColor} />
        </View>
    )
}

const styles = StyleSheet.create({
    reload: {
        position: "absolute",
        top: 60,
        right: 40,
    }
})
