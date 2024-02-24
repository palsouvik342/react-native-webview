
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const jsCode = `
    (function() {
      const allA = document.querySelectorAll("a");
      allA.forEach((current)=>{current.removeAttribute('target');})
    })();
  `;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <WebView 
          source={{uri: 'https://thehss.com.au/admin-login'}}
          originWhitelist={['*']}
          javaScriptEnabledAndroid={true}
          injectedJavaScript={jsCode}
          onMessage={(event) => console.log(event.nativeEvent.data)}

        />
      </SafeAreaView>
    </>
  );
};

export default App;