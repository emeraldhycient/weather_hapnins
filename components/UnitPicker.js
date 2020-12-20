import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Picker } from "@react-native-picker/picker"



export default function UnitPicker({ unit, setunit }) {
    return (
        <View style={styles.container}>
            <Picker selectedValue={unit} mode="dropdown" itemStyle={{ fontSize: 13 }} onValueChange={(val) => { setunit(val) }}>
                <Picker.Item label="C°" value="metric" />
                <Picker.Item label="F°" value="imperial" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 50,
        left: 50,
        backgroundColor: "#e0e0e0",
        width: "20%",
    },
})
