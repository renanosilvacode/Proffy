import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';

import styles from './styles';

function Favorites(){
    return (
        <View style={styles.container}>
            <PageHeader title="My Favorite Proffys"/>

            <ScrollView 
            style={styles.teacherList} 
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
                <TeacherItem></TeacherItem>
            </ScrollView>
        </View>
    );
}

export default Favorites;