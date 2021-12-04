import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import {
  LineChart,
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;


const Dashboard =({navigation}) => {
    return (
      <View style={styles.container}>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: '#8fcbbc',
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <Text>
      Markets are, most of the time, also random. Windows of opportunity (where price movement is less than random) are scarce and taken advantage of quickly. This means chances are most of the lines you perceive to see on a real chart are also random, therefore mean nothing. 
      </Text>
    </View>
      
      )
};

const styles = StyleSheet.create({
    container: {   
      alignItems: 'center',
      justifyContent: 'center', 
      height: 800 , 
      backgroundColor: '#8fcbbc'
    },
    
  })

export default Dashboard;

