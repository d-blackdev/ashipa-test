import {Text, View} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {colors} from '../styles/colors';

const SingleBottomText = ({text, value, unit}) => {
  return (
    <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.divider} />
      <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
        <Text style={[styles.text, {fontWeight: '700'}]}>{value}</Text>
        <Text style={styles.text}>{unit}</Text>
      </View>
    </View>
  );
};

export default SingleBottomText;

const styles = ScaledSheet.create({
  text: {
    color: '#333333',
    fontSize: '15@ms',
  },
  divider: {
    borderRightColor: '#333333',
    borderRightWidth: 1.6,
    height: 17,
    marginHorizontal: '8@ms',
  },
});
