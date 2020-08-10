import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';


function TeacherList(){
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFilterVisible, setisFilterVisible] = useState(false);

    const[subject, setSubject] = useState('');
    const[week_day, setweekDay] = useState('');
    const[time, setTime] = useState('');

    function loadFavorites(){
        //Getting itens from the local database
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher : Teacher) => {
                    return teacher.id;
                })
                setFavorites(favoritedTeachersIds);
            }
        });
    }

    useFocusEffect(()=>{
        loadFavorites();
    });

    function handleToggleFiltersVisible(){
        setisFilterVisible(!isFilterVisible);
    }

    async function handleFiltersSubmit(){
        loadFavorites();
        const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time
            }
        });
        setisFilterVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys available" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color='#FFF'/>
                    </BorderlessButton>
                )}>
                { isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Subject</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Which subject?"
                            placeholderTextColor="#c1bccc"
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Week Day</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setweekDay(text)}
                                    placeholder="Which day?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Time</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Which time?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filter</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>


            <ScrollView 
            style={styles.teacherList} 
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)} />)
                })}

            </ScrollView>

        </View>
    );
}

export default TeacherList;