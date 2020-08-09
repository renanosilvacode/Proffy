import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../Components/PageHeader';

function Favorites(){
    return (
        <View style={styles.container}>
            <PageHeader title="My Favorite Proffys"/>
        </View>
    );
}

export default Favorites;