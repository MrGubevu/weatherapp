import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import getCurrentWeather from "./Components/currentWeather";
import getCurrentLocation from "./Components/currentWeather";

function getImageSource(weatherData) {
  // Check if weatherData is null or if the necessary properties are missing
  if (!weatherData?.weather?.[0]?.description) {
    return require("./assets/Images/sea_sunnypng.png"); // Default image if data is missing
  }

  const condition = weatherData.weather[0].description.toLowerCase();

  // Check the weather condition and return the corresponding image
  if (condition.includes("cloud")) {
    return require("./assets/Images/sea_cloudy.png");
  } else if (condition.includes("rain")) {
    return require("./assets/Images/sea_rainy.png");
  } else if (condition.includes("clear sky")) {
    return require("./assets/Images/sea_sunnypng.png");
  } else {
    return require("./assets/Images/sea_sunnypng.png");
  }
}
const getBackgroundColor = (condition) => {
  if (!condition) {
    return "#47ab2f"; // Default background color if condition is missing
  }

  condition = condition.toLowerCase();

  if (condition.includes("clear")) {
    return "#47ab2f";
  } else if (condition.includes("cloud")) {
    return "#54717a";
  } else if (condition.includes("rain")) {
    return "#57575d";
  } else {
    return "#57575d"; // Default background color
  }
};

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const initialWeatherData = null; //Start weatherData as null

  useEffect(() => {
    // Get the user's current location
    getCurrentLocation()
      .then(({ latitude, longitude }) => {
        // Call the weather API based on the obtained location
        return getCurrentWeather(latitude, longitude);
      })
      .then((data) => {
        if (data) {
          setWeatherData(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const fecthWeatherData = async () => {
      const { lattitude, longitude } = await getCurrentLocation();
      const weather = await getCurrentWeather();
      setWeatherData(weather);
    };

    fecthWeatherData();
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: getBackgroundColor(
            weatherData?.weather?.[0]?.description
          ),
        },
      ]}
    >
      <Image source={getImageSource(weatherData)} style={styles.weatherImage} />

      {weatherData ? ( // Check if weatherData is not null
        <View style={styles.temperatureColumn}>
          <Text style={styles.tempDegree}>{weatherData.temperature}°C</Text>
          <Text style={styles.cloudyText}>{weatherData.description}</Text>
        </View>
      ) : (
        <Text style={styles.value}>Loading...</Text> // Show a loading message while data is being fetched
      )}

      <View style={styles.temperatureDiv}>
        {weatherData !== null ? (
          <View style={styles.column}>
            <Text style={styles.value}>{weatherData.tempLow}°C</Text>
            <Text style={styles.label}>min</Text>
          </View>
        ) : (
          <Text style={styles.value}>Loading...</Text>
        )}

        <View style={styles.column}>
          <Text style={styles.value}>25°</Text>
          <Text style={styles.label}>Current</Text>
        </View>

        {weatherData !== null ? (
          <View style={styles.column}>
            <Text style={styles.value}>{weatherData.tempMax}°C</Text>
            <Text style={styles.label}>max</Text>
          </View>
        ) : (
          <Text style={styles.value}>Loading...</Text>
        )}
      </View>
      <View style={styles.WeekForecastDiv}>
        <View style={styles.dayContainer}>
          <Text style={styles.value}>Tuesday</Text>
          <Image
            source={require("./assets/Icons/partlysunny@2x.png")}
            style={styles.icons}
          />
          <Text style={styles.value}>25°C</Text>
        </View>

        <View style={styles.dayContainer}>
          <Text style={styles.value}>Wednesday</Text>

          <Image
            source={require("./assets/Icons/clear@2x.png")}
            style={styles.icons}
          />
          <Text style={styles.value}>25°</Text>
        </View>
        <View style={styles.dayContainer}>
          <Text style={styles.value}>Thursday</Text>

          <Image
            source={require("./assets/Icons/rain@2x.png")}
            style={styles.icons}
          />
          <Text style={styles.value}>24°</Text>
        </View>
        <View style={styles.dayContainer}>
          <Text style={styles.value}>Friday</Text>

          <Image
            source={require("./assets/Icons/rain@2x.png")}
            style={styles.icons}
          />
          <Text style={styles.value}>30°</Text>
        </View>
        <View style={styles.dayContainer}>
          <Text style={styles.value}>Saturday</Text>

          <Image
            source={require("./assets/Icons/rain@2x.png")}
            style={styles.icons}
          />
          <Text style={styles.value}>32°</Text>
        </View>
        <View style={styles.dayContainer}>
          <Text style={styles.value}>Sunday</Text>
          <Image
            source={require("./assets/Icons/rain@2x.png")}
            style={styles.icons}
          />
          <Text style={styles.value}>26°</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  flexItemImage: {
    display: "flex",
  },
  temperatureDiv: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  WeekForecastDiv: {
    flexDirection: "column", // Stack columns vertically
  },
  column: {
    alignItems: "center",
    textAlign: "center",
  },
  dayContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20, // Add spacing between stacked days
  },
  dayDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  tempDegree: {
    fontSize: 70,
    color: "white",
  },
  cloudyText: {
    fontSize: 30,
    color: "white",
  },
  temperatureColumn: {
    position: "absolute",
    alignItems: "center",
    top: 50,
  },
  weatherImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  label: {
    color: "white",
  },
  value: {
    color: "white",
    fontSize: 20,
  },
  icons: {
    width: 25,
    height: 25,
  },
  WeekForecastDiv: {
    width: "100%",
  },
});
