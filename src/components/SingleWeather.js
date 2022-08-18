import {Image, Text, View} from 'react-native';
import React from 'react';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../styles/colors';

const SingleWeather = ({time, temp, icon}) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.iconContainer, globalStyles.flexCenter]}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${icon}@2x.png`,
          }}
          style={[{width: scale(50), height: scale(50)}]}
        />
      </View>
      <Text style={[styles.timeText, globalStyles.pt1]}>{time}</Text>
      <Text style={[styles.tempText, globalStyles.pt2]}>{temp}</Text>
    </View>
  );
};

export default SingleWeather;

const styles = ScaledSheet.create({
  container: {
    marginRight: scale(5),
  },
  iconContainer: {
    width: '100@ms',
    height: '100@ms',
    borderRadius: scale(10),
    backgroundColor: 'rgba(46, 48, 173, 0.07)',
  },
  timeText: {
    textAlign: 'center',
    color: colors.gray,
    fontSize: '15@ms',
    fontWeight: '600',
  },
  tempText: {
    textAlign: 'center',
    color: colors.blue,
    fontSize: '25@ms',
    fontWeight: '700',
  },
});
