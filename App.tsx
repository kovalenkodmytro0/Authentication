import React, {useEffect} from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f9fbfc',
  },
});

export default App;
