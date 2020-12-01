import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';  

export default function App() {
  return (
    <View style={styles.container}>
      <Svg>
        <Circle 
          cx="50"
          cy="50"
          r="45"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
