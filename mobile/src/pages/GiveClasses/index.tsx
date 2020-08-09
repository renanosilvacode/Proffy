import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function GiveClass() {
    const {goBack} = useNavigation();

    function handleNavigateBack(){
        goBack();
    }


    return (<View style={styles.container}>
        <ImageBackground  resizeMode='contain' source={giveClassesBgImage} style={styles.content}>
            <Text style={styles.title}>Do you want to be a Proffy?</Text>
            <Text style={styles.description}>To start, you need to register as a teacher in our website.</Text>
        </ImageBackground>
        <RectButton style={styles.okButton} onPress={handleNavigateBack}>
            <Text style={styles.okButtonText}>Got it!</Text>
        </RectButton>
    </View>);
}

export default GiveClass;