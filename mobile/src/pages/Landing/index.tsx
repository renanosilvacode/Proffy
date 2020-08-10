import React, { useEffect, useState } from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';
import api from '../../services/api';

function Landing(){

const {navigate} = useNavigation();
const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        }) 
    }, []);

function handleNavigationToGiveClassesPage(){
    navigate('GiveClasses');
}
function handleNavigationToStudyPages(){
    navigate('Study');
}

return (
        <View style={styles.container}>
            <Image source={landingImage} style={styles.banner} />
        
            <Text style={styles.title}>
                Welcome, {'\n'}
                <Text style={styles.titleBold}>
                    What do you wish to do?
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigationToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Study</Text>
                </RectButton>
             
                <RectButton onPress={handleNavigationToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Teach</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                More than {totalConnections} connections {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
    )
}

export default Landing;