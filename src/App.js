import React, {useEffect, useState} from 'react';
import {scale, ScaledSheet} from 'react-native-size-matters';
import Geolocation from 'react-native-geolocation-service';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {LocationRequest} from './utils/locationPermission';
import {globalStyles} from './styles/globalStyles';
import Header from './components/Header';
import {colors} from './styles/colors';
import {weatherData} from './utils/data';
import SingleWeather from './components/SingleWeather';
import SingleBottomText from './components/SingleBottomText';
const App = () => {
  const [data, setData] = useState(null);
  const permission = new LocationRequest();
  // GeoLocation
  const getLocation = async () => {
    Geolocation.getCurrentPosition(
      location => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&appid=41d5652092eae78c6f2f556cb409d9ee`,
        )
          .then(response => response.json())
          .then(res => {
            setData(res);
          })
          .catch(err => console.log(err));
      },
      () => {},
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        showLocationDialog: true,
      },
    );
  };
  // Geolocation permission check
  useEffect(() => {
    Platform.OS === 'ios' &&
      permission.iosLocationCheck().then(() => {
        Geolocation.requestAuthorization('whenInUse').then(() => {
          getLocation();
        });
      });
    Platform.OS === 'android' &&
      permission.locationRequest().then(() => {
        getLocation();
      });
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[globalStyles.mainContainer, globalStyles.px2]}>
        <Header />
        {/* Content */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[globalStyles.pb2]}>
          <View style={[globalStyles.w10, globalStyles.mt3]}>
            <Text style={{fontSize: scale(12)}}>Today</Text>
            <View style={[globalStyles.mt2]}>
              <View>
                <Text style={[AppStyles.tempText]}>{data?.main.temp}°C</Text>
                <Text style={[AppStyles.weatherText]}>
                  {data?.weather[0]?.main}
                </Text>
                <Text style={[AppStyles.subWeatherText]}>
                  {data?.weather[0]?.description}
                </Text>
              </View>
              {/* Image */}
              <View
                style={[
                  AppStyles.imageContainer,
                  globalStyles.w10,
                  {top: -50},
                ]}>
                <Image
                  source={{
                    uri: `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`,
                  }}
                  style={[globalStyles.weatherImage]}
                />
              </View>
            </View>
            {/* ScrollView */}
            <ScrollView
              horizontal={true}
              bounces={false}
              showsHorizontalScrollIndicator={false}
              style={[globalStyles.pb2, globalStyles.mt7]}>
              {weatherData.map((item, index) => (
                <SingleWeather key={index} {...item} />
              ))}
            </ScrollView>
          </View>
          <View
            style={[
              AppStyles.bottomView,
              globalStyles.flexRow,
              globalStyles.mt4,
            ]}>
            <View
              style={[
                globalStyles.w5,
                {borderRightColor: '#E0E0E0', borderRightWidth: 1.5},
                globalStyles.flexCenter,
              ]}>
              <SingleBottomText
                text="Pressure"
                value={`${data?.main?.pressure}`}
                unit="hPa"
              />
            </View>
            <View style={[globalStyles.w5, globalStyles.flexCenter]}>
              <SingleBottomText
                text="Humidity"
                value={`${data?.main?.humidity}`}
                unit="%"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const AppStyles = ScaledSheet.create({
  tempText: {
    fontSize: '65@ms',
    fontWeight: '700',
    color: colors.blue,
    fontStyle: 'normal',
  },
  weatherText: {
    fontSize: '15@ms',
    fontWeight: '600',
    color: colors.black,
  },
  subWeatherText: {
    fontSize: '12@ms',
    fontWeight: '400',
    color: colors.gray,
    textTransform: 'capitalize',
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  bottomView: {
    height: '100@ms',
    borderTopColor: '#E0E0E0',
    borderTopWidth: 1,
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    bottom: 20,
  },
});
