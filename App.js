
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <WebView source={{uri: 'https://thehss.com.au/'}} />
      </SafeAreaView>
    </>
  );
};

export default App;