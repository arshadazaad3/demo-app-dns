/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AuthTabHeader from '../../components/AuthTabHeader';

const SignUpScreen = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const currentScreenName = props?.route?.name;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.safeArea}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <AuthTabHeader activeScreenName={currentScreenName} />
        </View>
        <View style={styles.body}>
          <Text>Sign In</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    display: 'flex',
    flex: 1,
  },
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#306060',
  },

  header: {
    backgroundColor: '#306060',
    flex: 0.3,
    display: 'flex',
    padding: 15,
  },
  body: {
    backgroundColor: '#FFF',
    flex: 0.7,
    display: 'flex',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 20,
    padding: 20,
  },

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

export default SignUpScreen;
