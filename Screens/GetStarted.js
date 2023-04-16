//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { color, container, fonts } from '../Constant';

// create a component
const GetStarted = ({navigation, route}) => {
    return (
        <View style={styles.container}>

            <StatusBar barStyle={"light-content"} />
            
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{ fontSize: fonts.page_title, fontWeight: 'bold', color: color.secondary}}>Quantum Metal</Text>
                <Text style={{ fontSize: fonts.small, color: color.clouds}}>Preserve & Enhance Your Assets</Text>
            </View>

            <View style={{
                marginTop: (3/100) * container.height
            }}>
                <TouchableOpacity 
                style={{
                    width: (60/100) * container.width,
                    backgroundColor: color.primary,
                    padding: (3/100) * container.width,
                    borderRadius: (1/100) * container.width,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => navigation.navigate("Login")}
                >
                    <Text style={{ fontSize: fonts.regular, fontWeight: 'bold', color: color.white}}>Let's Dive In</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.black,
    },
});

//make this component available to the app
export default GetStarted;
