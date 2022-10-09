import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AuthTabHeader from '../../components/AuthTabHeader';

const SignUpScreen = (props: any) => {
  const {navigation} = props;

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
          <AuthTabHeader
            activeScreenName={currentScreenName}
            navigation={navigation}
          />
        </View>
        <View style={styles.body}>
          <Text>Sign Up</Text>
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
    backgroundColor: '#3E66FB',
  },

  header: {
    backgroundColor: '#3E66FB',
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
