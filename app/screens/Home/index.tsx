/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {staticTableData} from './constant';

const HomeScreen = (props: any) => {
  const {navigation} = props;

  const isDarkMode = useColorScheme() === 'dark';

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
          data={staticTableData} // list of objects
          colNames={[
            'ID',
            'Domain_name',
            'Extension',
            'Status',
            'Adult_content',
            'Keywords',
          ]} //List of Strings
          colSettings={[
            {
              name: 'ID',
              type: COL_TYPES.STRING,
              width: 50,
            },
            {name: 'Domain_name', type: COL_TYPES.INT, width: 150},
            {name: 'Extension', type: COL_TYPES.STRING, width: 100},
            {name: 'Status', type: COL_TYPES.STRING, width: 100},
            {name: 'Adult_content', type: COL_TYPES.STRING, width: 130},
            {name: 'Keywords', type: COL_TYPES.STRING, width: 300},
          ]} //List of Objects
          noOfPages={1} //number
          backgroundColor={'#fdfdfd'} //Table Background Color
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
    backgroundColor: '#fdfdfd',
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
