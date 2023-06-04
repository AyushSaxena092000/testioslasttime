import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'

// import { StripeProvider } from '@stripe/stripe-react-native';

// const SP_KEY = pk_test_51NEUgxSIpUUe4dSRyJh35Da3fduMyGNT3CKmYveceSkghF7fwNebORAaXICQ7zQJPoxmAEGtAauM6AGsugmGSLP300ZfjZyijC;
function App() {
  
  return (
    <View style={style.container}>
      <Text>App</Text>
    </View>
  );
}

export default App;
const style = StyleSheet.create({
container:{
  flex: 1,
  justifyContent:'center',
  alignItems: 'center',
  backgroundColor:'#2c3e50'
}
});