import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "ios-partly-sunny-outline",
        gradient: ["#0b486b", "#F56217"],
        title: "Haze",
        subtitle: ""
    },
    Thunderstorm: {
        iconName: "thunderstorm-outline",
        gradient: ["#360033", "#0b8793"],
        title: "Thunderstorm",
        subtitle: ""
    },
    Drizzle: {
        iconName: "rainy-outline",
        gradient: ["#00d2ff", "#928dab"],
        title: "Drizzle",
        subtitle: ""
    },
    Rain: {
        iconName: "rainy-outline",
        gradient: ["#ffd89b", "#19547b"],
        title: "Rain",
        subtitle: ""
    },
    Snow: {
        iconName: "snow",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Snow",
        subtitle: ""
    },
    Clear: {
        iconName: "sunny-outline",
        gradient: ["#22c1c3", "#fdbb2d"],
        title: "Clear",
        subtitle: "정희상 날씨 앱 완성"
    },
    Clouds: {
        iconName: "cloud-outline",
        gradient: ["#6D6027", "#D3CBB8"],
        title: "Clouds",
        subtitle: ""
    },
    Mist: {
        iconName: "cloud-outline",
        gradient: ["#BE93C5", "#7bc6cc"],
        title: "Mist",
        subtitle: ""
    },
    Smoke: {
        iconName: "cloud-outline",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Smoke",
        subtitle: ""
    },
    Dust: {
        iconName: "cloud-outline",
        gradient: ["#1e130c", "#9a8478"],
        title: "Dust",
        subtitle: ""
    },
    Fog: {
        iconName: "cloud-outline",
        gradient: ["#616161", "#9bc5c3"],
        title: "Fog",
        subtitle: ""
    },
    Sand: {
        iconName: "cloud-outline",
        gradient: ["#F7F8F8", "#acbb78"],
        title: "Sand",
        subtitle: ""
    },
    Ash: {
        iconName: "sunny-outline",
        gradient: ["#ffe259", "#ffa751"],
        title: "Ash",
        subtitle: ""
    },
    Squall: {
        iconName: "rainy-outline",
        gradient: ["#77A1D3", "#79CBCA", "#E684AE"],
        title: "Squall",
        subtitle: ""
    },
    Tornado: {
        iconName: "thunderstorm-outline",
        gradient: ["#334d50", "#cbcaa5"],
        title: "Tornado",
        subtitle: ""
    },
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
        >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <Ionicons size={96} name={weatherOptions[condition].iconName} color="white" />
            <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});