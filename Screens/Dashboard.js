//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from '../Constant';
import FastImage from 'react-native-fast-image';

// create a component
const Dashboard = () => {
    return (
        <View style={styles.container}>
            <FastImage 
                source={require("../Assets/Logo/QM_OFFICIAL_LOGO.webp")}
                style={{
                    width: 150,
                    height: 100
                    //width: (60/100) * container.width,
                    //height: (10/100) * container.width,
                }}
                resizeMode="stretch"
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
    },
});

//make this component available to the app
export default Dashboard;
