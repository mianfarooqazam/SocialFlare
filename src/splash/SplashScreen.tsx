import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/361-1.png')}
                style={styles.logo}
                resizeMode="cover"
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>Social Flare</Text>
                
                {/* <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Feel the flare</Text>
                    <Text style={styles.subtitle}>Find the fun</Text>
                </View> */}

                <Text style={styles.desc}>See Where The Crowd Is And Join The Excitement 🥳</Text>
            </View>
            <View style={styles.authContainer}>
                <TouchableOpacity>
                    <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f3ee76',
    },
    logo: {
        width: width,
        height: height * 0.5,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    subtitleContainer: {
        marginBottom: 20, 
    },
    authContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginBottom: 30,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#7C00FE',
        marginBottom: 20, 
        textAlign:'center'
    },
    subtitle: {
        fontSize: 20,
        color: '#333',
        textAlign: 'left',
        fontWeight: '600',
        fontFamily: 'Helvetica Neue',
        marginBottom: 5, // Space between subtitle lines
    },
    desc: {
        fontSize: 20,
        color: '#333',
        textAlign: 'center',
        fontWeight: '400',
        fontFamily: 'Helvetica Neue',
    },
    signupText: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Helvetica Neue',
    },
    loginButton: {
        backgroundColor: "#000",
        borderRadius: 5,
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Helvetica Neue',
        color: '#fff',
        padding: 10
    },
    authText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default SplashScreen;