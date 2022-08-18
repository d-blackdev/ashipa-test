import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../styles/colors';

const Header = () => {
  return (
    <View
      style={[
        globalStyles.flexCenter,
        globalStyles.alignItemsCenter,
        globalStyles.justifyBetween,
      ]}>
      <Icon name="chevron-back" color={colors.black} size={25} />
      <Icon name="menu" color={colors.black} size={30} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
