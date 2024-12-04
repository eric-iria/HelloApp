import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const HomeSceen = () => {
    const navegacao = useNavigation();
    return (
        <View style={styles.container}>
        <Text>Olá mundo!</Text>
        <Button title="Ir para login"  onPress={() => navegacao.navigate('Login')}/>  
        <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeSceen;