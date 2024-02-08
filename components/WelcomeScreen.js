import * as React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style = {{
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        padding: 40,
        // backgroundColor: 'red',
      }}>
        Welcome to Little Lemon
      </Text>
      <Text style = {{
        padding: 20,
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 8,
        // backgroundColor: 'green',
      }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </View>
  );
}