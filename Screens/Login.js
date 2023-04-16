//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, TextInput, TouchableOpacity, Linking } from 'react-native';
import { color, container, fonts } from '../Constant';
import FastImage from 'react-native-fast-image';
import Copyright from '../Components/Copyright';

// create a component
const Login = ({navigation, route}) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.clouds}}>
            <StatusBar barStyle={"dark-content"} />
            <ScrollView style={{ paddingHorizontal: (5/100) * container.width}} keyboardDismissMode="on-drag">

                {/* SECTION UNTUK LOGO & IMAGE QM */}
                <View style={{
                    alignItems: 'center',
                    paddingTop: (3/100) * container.height
                }}>
                    <FastImage 
                        source={require("../Assets/Logo/QM_OFFICIAL_LOGO.webp")}
                        style={{
                            width: 120,
                            height: 100
                            //width: (60/100) * container.width,
                            //height: (10/100) * container.width,
                        }}
                        resizeMode="stretch"
                    />
                </View>

                {/* SECTION UNTUK PERKATAAN SIGN IN - TITLE */}
                <View style={{ marginTop: (7/100) * container.height}}>
                    <Text style={{ fontWeight: 'bold', fontSize: fonts.xlarge}}>Sign In</Text>
                </View>

                {/* SECTION UNTUK FORM SIGN IN - USERNAME & PASSWORD */}
                <View style={{ marginTop: (3/100) * container.height}}>
                    
                    {/* SECTION UNTUK FORM SIGN IN - USERNAME */}
                    <View>
                        <View>
                            <Text style={{fontSize: fonts.regular, fontWeight: 'bold'}}>Email / Mobile / Username</Text>
                        </View>
                        <View style={{paddingTop: (1/100) * container.width}}>
                            <TextInput 
                            placeholder='Email / Username / Password'
                            placeholderTextColor={color.gray}
                            style={{
                                padding: (3/100) * container.width,
                                backgroundColor: color.white,
                                borderWidth: 0.5,
                                borderColor: color.gray,
                                borderRadius: (1/100) * container.width,
                                fontSize: fonts.small,
                                color: color.black
                            }}
                            />
                        </View>
                    </View>

                    {/* SECTION UNTUK FORM SIGN IN - PASSWORD */}
                    <View style={{ marginTop: (2/100) * container.height}}>
                        <View>
                            <Text style={{fontSize: fonts.regular, fontWeight: 'bold'}}>Password</Text>
                        </View>
                        <View style={{paddingTop: (1/100) * container.width}}>
                            <TextInput 
                            placeholder='Password'
                            placeholderTextColor={color.gray}
                            secureTextEntry
                            style={{
                                padding: (3/100) * container.width,
                                backgroundColor: color.white,
                                borderWidth: 0.5,
                                borderColor: color.gray,
                                borderRadius: (1/100) * container.width,
                                fontSize: fonts.small,
                                color: color.black
                            }}
                            />
                        </View>
                    </View>

                </View>

                {/* SECTION UNTUK HYPERLINK FORGOT PASSWORD */}
                <View style={{ marginTop: (1/100) * container.height}}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: fonts.regular, color: color.primary}}>Forget password?</Text>
                    </TouchableOpacity>
                </View>

                {/* SECTION UNTUK TERMS & REGULATIONS */}
                <View style={{ 
                    marginTop: (3/100) * container.height, 
                    backgroundColor: color.lightgray,
                    padding: (3/100) * container.width,
                    borderRadius: (1/100) * container.width,
                    borderWidth: 0.5,
                    borderColor: color.gray
                }}>
                    <View>
                        <Text style={{ fontSize: fonts.small, color: color.black}}>
                            By clicking "Secured Login", I declare that i have read,
                            understood and accepted <Text style={{color: color.primary}}>Terms & Conditions</Text>
                        </Text>
                    </View>

                    <View style={{marginTop: (2/100) * container.height}}>
                        <Text style={{ fontSize: fonts.small, color: color.black}}>
                            Note: Country Code had been removed from Username, please use your IC/Passport # only for login
                        </Text>
                    </View>

                    {/* SECTION UNTUK BUTTON ClEAR & SECURED LOGIN */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        paddingTop: (3/100) * container.height
                    }}>
                        <View>
                            <TouchableOpacity 
                            style={{
                                padding: (2/100) * container.width,
                                borderRadius: (1/100) * container.width,
                                borderWidth: 0.5,
                                borderColor: color.gray,
                                backgroundColor: color.white,
                                paddingHorizontal: (5/100) * container.width
                            }}
                            >
                                <Text style={{ fontSize: fonts.small, color: color.black}}>Clear</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: (1/100) * container.width}}>
                            <TouchableOpacity
                            style={{
                                padding: (2/100) * container.width,
                                borderRadius: (1/100) * container.width,
                                borderColor: color.gray,
                                backgroundColor: color.primary,
                                paddingHorizontal: (5/100) * container.width
                            }}
                            >
                                <Text style={{ fontSize: fonts.small, color: color.white}}>SecuredLogin</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* SECTION UNTUK CONTACT SUPPORT */}
                <View style={{ 
                    marginTop: (3/100) * container.height, 
                    backgroundColor: color.lightgray,
                    padding: (3/100) * container.width,
                    borderRadius: (1/100) * container.width,
                    borderWidth: 0.5,
                    borderColor: color.gray
                }}>

                    <View>
                        <Text style={{fontSize: fonts.regular, fontWeight: 'bold'}}>Need Assistance?</Text>
                    </View>
                    <View style={{marginTop: (1/100) * container.width}}>
                        <Text style={{fontSize: fonts.small}}>Call Center : +603 - 8605 3611</Text>
                        <Text style={{fontSize: fonts.small}}>Monday - Friday (9:00 AM to 5.00 PM)</Text>
                    </View>

                    <View style={{ marginTop: (2/100) * container.height}}>
                        <Text style={{fontSize: fonts.regular, fontWeight: 'bold'}}>Email</Text>
                    </View>
                    <View style={{marginTop: (1/100) * container.width}}>
                        <TouchableOpacity onPress={() => Linking.openURL("mailto:care@qbeb.org")}>
                            <Text style={{fontSize: fonts.small, color: color.primary}}>care@qbeb.org</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Copyright />
            </ScrollView>
        </SafeAreaView>
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
export default Login;
