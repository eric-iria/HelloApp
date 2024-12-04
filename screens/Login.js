import React, {useState} from "react";
import {View, Text, TextInput, Button } from 'react-native'
import {useNavegation} from '@react-navigation/native'


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('')

    return (
        <View>
            <Text>E-mail</Text>
            <TextInput value="{emal}" />
            <Text>Senha</Text>
            <TextInput value="{senha}" secureTextEntry />

            <Button title="Entrar" />
        </View>
    );

};

export default LoginScreen;