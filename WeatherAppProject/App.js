import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image
        source={require('./assets/Images/sea_cloudy.png')}
        style={styles.sea_cloudy}
      />
    
      <View style={styles.temperatureColumn}>
        <Text style={styles.tempDegree}>18°</Text>
        <Text style={styles.cloudyText}>Cloudy</Text>
      </View>
      <View style={styles.temperatureDiv}>
        <View style={styles.column}>
          <Text style={styles.value}>18°</Text>
          <Text style={styles.label}>min</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.value}>25°</Text>
          <Text style={styles.label}>Current</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.value}>30°</Text>
          <Text style={styles.label}>max</Text>
        </View>
      </View>
      <View style={styles.WeekForecastDiv}>
        <View style={styles.dayContainer}>
          <Text style={styles.value}>Tuesday</Text>
          
            <Image
              source={require('./assets/Icons/partlysunny.png')}
              style={styles.icons}
            />
            <Text style={styles.value}>30°</Text>
          
        </View>
        <View style={styles.dayContainer}>
          <Text style={styles.value}>Wednesday</Text>
          
            <Image
              source={require('./assets/Icons/clear@2x.png')}
              style={styles.icons}
            />
            <Text style={styles.value}>25°</Text>
          
        </View>
        <View style={styles.dayContainer}>
          <Text style={styles.value}>Thursday</Text>
         
            <Image
              source={require('./assets/Icons/rain@2x.png')}
              style={styles.icons}
            />
            <Text style={styles.value}>24°</Text>
         
        </View>
        <View style={styles.dayContainer}>
          <Text style={styles.value}>Friday</Text>
         
            <Image
              source={require('./assets/Icons/rain@2x.png')}
              style={styles.icons}
            />
            <Text style={styles.value}>30°</Text>
          
        </View>
        <View style={styles.dayContainer}>
          <Text style={styles.value}>Saturday</Text>
          
            <Image
              source={require('./assets/Icons/rain@2x.png')}
              style={styles.icons}
            />
            <Text style={styles.value}>32°</Text>
          
        </View>
        <View style={styles.dayContainer}>
         
          <Text style={styles.value}>Sunday</Text>
            <Image
              source={require('./assets/Icons/rain@2x.png')}
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
    backgroundColor: '#57575D',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10
  },
  flexItemImage: {
    display: 'flex' 
  },
  temperatureDiv: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: "100%",
    marginTop: 20, 
  },
  WeekForecastDiv: {
    flexDirection: 'column', // Stack columns vertically
  },
  column: {
    alignItems: 'center',
    textAlign: 'center',
  },
  dayContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: "100%",
    marginTop: 20, // Add spacing between stacked days
  },
  dayDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempDegree: {
    fontSize: 70,
    color: 'white',
  },
  cloudyText: {
    fontSize: 30,
    color: 'white',
  },
  temperatureColumn: {
    position: 'absolute',
    alignItems: 'center',
    top: 50,
  },
  sea_cloudy: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch', 
  },
  label: {
    color: 'white',
  },
  value: {
    color: 'white',
    fontSize: 20,
  },
  icons: {
    width: 25,
    height: 25,
    
  },
  WeekForecastDiv: {
    width: '100%'
  }
});
