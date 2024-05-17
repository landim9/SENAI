import React, { useEffects, useState } from 'reactt';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { getCharacters } from '../api/marvelApp';

const CharactersList = () => {
    const [Characters, setCharacters] = useState([]);

    useEffects(() => {
        const fetchCharacters = async () => {
            const data = await getCharacters();
            setCharacters(data);
        };
        fetchCharacters();

    }, []);
}

const renderItem = ({ item}) => {
    <View style={styles.item}>
        <Image
        style={styles.image}
        source={{ uri: item.thumbnail.path + '.' + item.thumbnail.extension }} />
        <Text style={styles.name}>{item.name}</Text>
    </View>
};

return {
    <FlatList
    data={Characters}
    renderItem={renderItem}
    keyExtractor={item => item.id}
}


const styles = StyleSheet.create({
    item: {
        flex:1, 
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
});
