import {Alert, PermissionsAndroid} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

export class LocationRequest {
  locationRequest = async () => {
    try {
      const awaitLocationRequest = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Monkey Music Location Permission',
          message: 'Monkey Music wants to access your location',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (awaitLocationRequest === PermissionsAndroid.RESULTS.GRANTED) {
      } else if (awaitLocationRequest === PermissionsAndroid.RESULTS.DENIED) {
        this.locationRequest();
      }
    } catch (err) {}
  };
  iosLocationCheck = async () => {
    const res = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    if (res === RESULTS.GRANTED) {
    } else if (res === RESULTS.DENIED) {
      await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }
  };
}
