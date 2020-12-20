import React, { useEffect, useState } from 'react';
import { useDimensions } from '@react-native-community/hooks'
import {
  StyleSheet, Text, View, Button, Platform, ActivityIndicator
} from 'react-native';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';

import WeatherDetails from "./components/weatherDetails"
import WeatherInfo from "./components/WeatherInfo"
import UnitPicker from './components/UnitPicker'
import colors from "./myUtils/Colors"
import ReloadIcon from "./components/ReloadIcon"
import DevelopersContact from "./components/DevelopersContact"
import { openWeatherMap_ApiKey } from "@env"
const { primaryColor, secondaryColor, borderColor } = colors



const openWeatherMap_UrlBase = `https://api.openweathermap.org/data/2.5/weather?`


export default function App() {

  const [unit, setunit] = useState('metric')

  const [errorMsg, setErrorMsg] = useState(null);

  const [currentWeather, setcurrentWeather] = useState(null)


  useEffect(() => {
    getLocation()
  }, [unit])

  const getweather = async (requestUrl) => {
    setcurrentWeather(null)
    setErrorMsg(null)

    try {

      const request = await fetch(requestUrl);
      const res = await request.json();

      setcurrentWeather(res)

      if (res.ok) {
        setcurrentWeather(res)
      } else {
        setErrorMsg(res.message)
      }

    } catch (error) {
      setErrorMsg(error.message)
    }


  }

  const getLocation = async () => {

    try {

      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return
      }

      const location = await Location.getCurrentPositionAsync();

      let { latitude, longitude } = location.coords;

      const completeUrl = `${openWeatherMap_UrlBase}units=${unit}&lat=${latitude}&lon=${longitude}&appid=${openWeatherMap_ApiKey}`;

      getweather(completeUrl)

    } catch (error) {
      setErrorMsg(error.message)
    }


  }

  if (currentWeather) {

    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.body}>
          <UnitPicker unit={unit} setunit={setunit} />
          <ReloadIcon load={getLocation} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails currentWeather={currentWeather} unit={unit} />
      </View>
    )

  } else if (errorMsg) {

    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <ReloadIcon load={getLocation} />
        <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 20 }}>{errorMsg}</Text>
        <DevelopersContact />
      </View>
    )

  } else {
    return (
      <View style={styles.container}>
        <StatusBar style='auto' />
        <ActivityIndicator size="large" color={primaryColor} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  body: {
    flex: 1,
  },
});
