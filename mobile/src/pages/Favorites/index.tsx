import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';

import styles from './styles';

function Favorites(){

    const [favorites, setFavorites] = useState([]);
    
    function loadFavorites(){
        //Getting itens from the local database
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers);
            }
        });
    }
    
    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
      )

    return (
        <View style={styles.container}>
            <PageHeader title="My Favorite Proffys"/>

            <ScrollView 
            style={styles.teacherList} 
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>
                { favorites.map((teacher: Teacher) =>{
                    return(
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={true} />
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;