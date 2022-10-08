/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const APP_LOGO = '../assets/images/logo.png';

const signInScreen = 'SignIn';
const signUpScreen = 'SignUp';

function AuthTabHeader(props: any) {
  const {activeScreenName = 'SignIn'} = props;

  return (
    <>
      <View style={styles.tabHeader}>
        <View>
          <Image source={require(APP_LOGO)} style={{width: 50, height: 50}} />
        </View>
        <View style={styles.authBtnsContainer}>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...styles.fontCommon,
                marginLeft: 20,
                fontFamily: 'OpenSans-SemiBold',
                fontSize: 17,
                padding: 10,
              }}>
              Sign In
            </Text>
            {activeScreenName === signInScreen && (
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#FFF',
                  width: '40%',
                  marginLeft: 15,
                }}
              />
            )}
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...styles.fontCommon,
                marginLeft: 20,
                fontFamily: 'OpenSans-SemiBold',
                fontSize: 17,
                padding: 10,
              }}>
              Sign Up
            </Text>
            {activeScreenName === signUpScreen && (
              <View
                style={{
                  borderBottomWidth: 2,
                  borderBottomColor: '#FFF',
                  width: '40%',
                  marginLeft: 15,
                }}
              />
            )}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  tabHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },

  authBtnsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  fontCommon: {
    color: '#FFF',
  },
});

AuthTabHeader.propTypes = {
  activeScreenName: PropTypes.string,
};

export default AuthTabHeader;
