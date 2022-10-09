import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AuthTabHeader from '../../components/AuthTabHeader';

const HomeScreen = (props: any) => {
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
        <Text
          style={{
            margin: 10,
            padding: 10,
            fontSize: 20,
            fontFamily: 'OpenSans-Bold',
          }}>
          DNS Table List View
        </Text>
        <DataTable
          data={[
            {name: 'Ainsley Wilson', age: 21, gender: 'male'},
            {name: 'Baylee Beck', age: 22, gender: 'male'},
            {name: 'Princess Pollard', age: 21, gender: 'male'},
            {
              name: 'Amna Shakeel',
              age: 22,
              gender: 'female',
            },
            {name: 'Kianna Santiago', age: 20, gender: 'male'},
            {name: 'Arthur Kelley', age: 13, gender: 'male'},
            {name: 'Liana Zhang', age: 13, gender: 'male'},
            {name: 'Lennon Simmons', age: 13, gender: 'male'},
            {name: 'Alyvia Douglas', age: 13, gender: 'male'},
          ]} // list of objects
          colNames={['name', 'age', 'gender']} //List of Strings
          colSettings={[
            {
              name: 'name',
              type: COL_TYPES.STRING,
              width: '40%',
            },
            {name: 'age', type: COL_TYPES.INT, width: '30%'},
            {name: 'gender', type: COL_TYPES.STRING, width: '30%'},
          ]} //List of Objects
          noOfPages={1} //number
          backgroundColor={'#FFF'} //Table Background Color
          headerLabelStyle={{color: 'rgba(0, 0, 0, 0.5)', fontSize: 12}} //Text Style Works
        />
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
    backgroundColor: '#FFF',
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

export default HomeScreen;
