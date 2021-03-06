import React, { useState } from 'react';
import {
    StyleSheet, 
    SafeAreaView, 
    View, 
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import {Button} from '../components/button'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }
    function handleInputFocus(){
        setIsFocused(true);
    }
    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName (value);
    }


    return(
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView
                style={style.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={style.content}>
                    <View style={style.form}>
                        <View style={style.header}>
                            <Text style={style.emoji}>                        
                                { isFilled ? '😀' : '😆' }
                            </Text>
                            <Text style={style.title}>
                                Como podemos {'\n'}
                                chamar você?
                            </Text> 
                        </View>
                        <TextInput 
                            style={[
                                style.input,
                                (isFocused || isFilled) && 
                                {borderColor: colors.green}
                            ]}
                            placeholder='Digite o nome'
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={ style.footer}>
                            <Button />
                        </View>
                    </View>

                </View>
            </KeyboardAvoidingView>    
        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20

    },
    footer:{
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    }


})