//import liraries
import moment from 'moment/moment';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color, container, fonts } from '../Constant';

// create a component
const Copyright = () => {
    return (
        <View style={{
            marginTop: (3/100) * container.height,
            alignItems: 'center'
        }}>
            <Text style={{fontSize: fonts.xsmall, color: color.gray}}>Quantum Metal @ Copyright {moment().year()}</Text>
            <Text style={{fontSize: fonts.xsmall, color: color.gray}}>Apps Version : 1.0.0</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export default Copyright;
