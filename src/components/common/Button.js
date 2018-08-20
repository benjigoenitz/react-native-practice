import React from 'react';
import { Text, TouchableOpacity, ToastAndroid } from 'react-native'

const Button = ({ onPress, children }) => {
    const { ButtonStyle, ButtonTextStyle } = styles;

    return (
        //practically a button
        <TouchableOpacity onPress={onPress} style={ButtonStyle}>
            <Text style={ButtonTextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    ButtonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
    ButtonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
};

export { Button } ;
